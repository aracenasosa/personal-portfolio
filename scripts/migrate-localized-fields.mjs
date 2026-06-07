import { createClient } from "@sanity/client";
import { getCliClient } from "sanity/cli";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

for (const envFileName of [".env-local", ".env.local", ".env"]) {
  const envPath = resolve(process.cwd(), envFileName);

  if (!existsSync(envPath)) {
    continue;
  }

  const envFile = readFileSync(envPath, "utf8");

  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [rawKey, ...valueParts] = trimmed.split("=");
    const key = rawKey.trim();
    const value = valueParts.join("=").trim().replace(/^["']|["']$/g, "");

    process.env[key] = value;
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v2025-12-05";
const token = process.env.SANITY_API_WRITE_TOKEN;
const useCliToken = process.argv.includes("--use-cli-token");

if (!projectId || !dataset) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET."
  );
}

if (!token && !useCliToken) {
  if (process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN) {
    throw new Error(
      "Found NEXT_PUBLIC_SANITY_API_WRITE_TOKEN, but write tokens must not be public. Rename it to SANITY_API_WRITE_TOKEN in .env."
    );
  }

  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN. Add a write token to .env before running this migration."
  );
}

const client = useCliToken
  ? getCliClient({ projectId, dataset, apiVersion, useCdn: false })
  : createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
    });

const localizedStringPaths = [
  "profile.topTitle",
  "profile.topLeftTitle",
  "profile.specialization",
  "profile.baseIn",
  "introduction.title",
  "workProjectsTitle",
  "personalProjectsTitle",
  "resume.title",
  "skills.title",
  "about.title",
];

const localizedTextPaths = [
  "introduction.description",
  "resume.description",
  "about.description",
];

const statStringPaths = ["label"];
const projectStringPaths = ["title", "timeline"];
const projectTextPaths = ["description"];
const projectArrayPaths = ["category", "fullDescription", "features", "highlights"];
const resumeItemStringPaths = ["period", "title", "organization"];
const resumeItemTextPaths = ["description"];
const recommendationStringPaths = ["role", "date", "relationship"];
const recommendationTextPaths = ["recommendation"];
const skillStringPaths = ["name"];

function isLocalizedObject(value) {
  return (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    ("en" in value || "es" in value)
  );
}

function toLocalized(value) {
  if (value === undefined || value === null || isLocalizedObject(value)) {
    return value;
  }

  return {
    en: value,
    es: "",
  };
}

function getByPath(object, path) {
  return path.split(".").reduce((current, key) => current?.[key], object);
}

function localizeObjectPaths(target, paths, patch) {
  for (const path of paths) {
    const current = getByPath(target, path);
    const localized = toLocalized(current);

    if (localized !== current) {
      patch[path] = localized;
    }
  }
}

function localizeArrayItems(items, itemPaths, patchItems) {
  if (!Array.isArray(items)) {
    return;
  }

  items.forEach((item, index) => {
    const itemPatch = {};
    localizeObjectPaths(item, itemPaths, itemPatch);

    if (Object.keys(itemPatch).length > 0) {
      patchItems[index] = {
        ...(patchItems[index] || {}),
        ...itemPatch,
      };
    }
  });
}

function hasPatch(value) {
  if (!value || typeof value !== "object") {
    return false;
  }

  if (Array.isArray(value)) {
    return value.some(hasPatch);
  }

  return Object.keys(value).length > 0;
}

const doc = await client.fetch(`*[_type == "portfolio"][0]`);

if (!doc?._id) {
  throw new Error("No portfolio document found.");
}

const patch = {};

localizeObjectPaths(doc, localizedStringPaths, patch);
localizeObjectPaths(doc, localizedTextPaths, patch);

if (Array.isArray(doc.introduction?.stats)) {
  const statsPatch = [];
  localizeArrayItems(doc.introduction.stats, statStringPaths, statsPatch);

  if (hasPatch(statsPatch)) {
    patch["introduction.stats"] = doc.introduction.stats.map((item, index) => ({
      ...item,
      ...(statsPatch[index] || {}),
    }));
  }
}

if (Array.isArray(doc.projects)) {
  const projectsPatch = doc.projects.map((project) => {
    const projectPatch = {};
    localizeObjectPaths(
      project,
      [...projectStringPaths, ...projectTextPaths, ...projectArrayPaths],
      projectPatch
    );
    return hasPatch(projectPatch) ? { ...project, ...projectPatch } : project;
  });

  if (JSON.stringify(projectsPatch) !== JSON.stringify(doc.projects)) {
    patch.projects = projectsPatch;
  }
}

for (const group of ["work", "education", "certifications"]) {
  const items = doc.resume?.[group];

  if (!Array.isArray(items)) {
    continue;
  }

  const localizedItems = items.map((item) => {
    const itemPatch = {};
    localizeObjectPaths(
      item,
      [...resumeItemStringPaths, ...resumeItemTextPaths],
      itemPatch
    );
    return hasPatch(itemPatch) ? { ...item, ...itemPatch } : item;
  });

  if (JSON.stringify(localizedItems) !== JSON.stringify(items)) {
    patch[`resume.${group}`] = localizedItems;
  }
}

if (Array.isArray(doc.recommendations)) {
  const localizedRecommendations = doc.recommendations.map((item) => {
    const itemPatch = {};
    localizeObjectPaths(
      item,
      [...recommendationStringPaths, ...recommendationTextPaths],
      itemPatch
    );
    return hasPatch(itemPatch) ? { ...item, ...itemPatch } : item;
  });

  if (
    JSON.stringify(localizedRecommendations) !==
    JSON.stringify(doc.recommendations)
  ) {
    patch.recommendations = localizedRecommendations;
  }
}

if (Array.isArray(doc.skills?.items)) {
  const localizedSkills = doc.skills.items.map((item) => {
    const itemPatch = {};
    localizeObjectPaths(item, skillStringPaths, itemPatch);
    return hasPatch(itemPatch) ? { ...item, ...itemPatch } : item;
  });

  if (JSON.stringify(localizedSkills) !== JSON.stringify(doc.skills.items)) {
    patch["skills.items"] = localizedSkills;
  }
}

if (!hasPatch(patch)) {
  console.log("No plain fields found. Portfolio already uses localized fields.");
} else {
  try {
    await client.patch(doc._id).set(patch).commit();
  } catch (error) {
    if (
      error?.statusCode === 403 ||
      String(error?.message || "").includes("permission")
    ) {
      throw new Error(
        [
          "Sanity rejected the write with insufficient permissions.",
          "",
          "Options:",
          "1. Create a new project token with Administrator access, then set SANITY_API_WRITE_TOKEN in .env.",
          "2. Or run `pnpm exec sanity login`, then run `pnpm migrate:i18n:user` to use your logged-in Studio user.",
          "",
          `Original error: ${error.message}`,
        ].join("\n")
      );
    }

    throw error;
  }

  console.log(
    "Portfolio localized field migration complete. English values were copied into `en`; fill `es` in Sanity Studio."
  );
}
