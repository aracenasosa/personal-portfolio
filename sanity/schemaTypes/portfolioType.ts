// /schemas/portfolio.ts
import { defineType, defineField } from "sanity";

const languageFields = [
  defineField({
    name: "en",
    title: "English",
    type: "string",
  }),
  defineField({
    name: "es",
    title: "Spanish",
    type: "string",
  }),
];

const localizedString = (
  name: string,
  title: string,
  options: Record<string, unknown> = {}
) =>
  defineField({
    name,
    title,
    type: "object",
    fields: languageFields,
    options: {
      columns: 2,
      collapsible: true,
      collapsed: false,
    },
    ...options,
  });

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({
        name: "en",
        title: "English",
        type: "text",
      }),
      defineField({
        name: "es",
        title: "Spanish",
        type: "text",
      }),
    ],
    options: {
      collapsible: true,
      collapsed: false,
    },
  });

const localizedStringArray = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({
        name: "en",
        title: "English",
        type: "array",
        of: [{ type: "string" }],
      }),
      defineField({
        name: "es",
        title: "Spanish",
        type: "array",
        of: [{ type: "string" }],
      }),
    ],
    options: {
      collapsible: true,
      collapsed: false,
    },
  });

const localizedPortableText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({
        name: "en",
        title: "English",
        type: "array",
        of: [{ type: "block" }],
      }),
      defineField({
        name: "es",
        title: "Spanish",
        type: "array",
        of: [{ type: "block" }],
      }),
    ],
    options: {
      collapsible: true,
      collapsed: false,
    },
  });

export default defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    // PROFILE
    {
      name: "profile",
      title: "Profile",
      type: "object",
      fields: [
        localizedString("topTitle", "Top Title"),
        localizedString("topLeftTitle", "Top Left Title"),
        {
          name: "image",
          title: "Image",
          type: "image",
        },
        localizedString("specialization", "Specialization"),
        localizedString("baseIn", "Base in"),
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "github",
          title: "Github",
          type: "url",
        },
        {
          name: "linkedin",
          title: "Linkedin",
          type: "url",
        },
      ],
    },

    // INTRODUCTION
    {
      name: "introduction",
      title: "Introduction",
      type: "object",
      fields: [
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        {
          name: "cv",
          title: "CV URL",
          type: "url",
        },
        {
          name: "cl",
          title: "Cover Letter URL",
          type: "url",
        },
        {
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              name: "stat",
              title: "Stat",
              type: "object",
              fields: [
                {
                  name: "value",
                  title: "Value",
                  type: "string",
                },
                localizedString("label", "Label"),
              ],
            },
          ],
        },
      ],
    },

    // PORTFOLIO SETTINGS
    localizedString("workProjectsTitle", "Work Projects Section Title", {
      description:
        "Title for the Work Projects section (default: Production Projects)",
      initialValue: {
        en: "Production Projects",
        es: "Proyectos profesionales",
      },
    }),
    localizedString("personalProjectsTitle", "Personal Projects Section Title", {
      description:
        "Title for the Personal Projects section (default: Personal Projects)",
      initialValue: {
        en: "Personal Projects",
        es: "Proyectos personales",
      },
    }),
    {
      name: "maxWorkProjects",
      title: "Max Work Projects on Home",
      type: "number",
      description:
        "Maximum number of Work Projects to display on the home page (default: 3)",
      initialValue: 3,
    },
    {
      name: "maxPersonalProjects",
      title: "Max Personal Projects on Home",
      type: "number",
      description:
        "Maximum number of Personal Projects to display on the home page (default: 3)",
      initialValue: 3,
    },

    // PROJECTS
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          name: "project",
          title: "Project",
          type: "object",
          fields: [
            {
              name: "order",
              title: "Order",
              type: "number",
            },
            localizedString("title", "Title"),
            {
              name: "projectType",
              title: "Project Type",
              type: "string",
              options: {
                list: [
                  { title: "Work", value: "work" },
                  { title: "Personal", value: "personal" },
                ],
                layout: "radio",
              },
              initialValue: "personal",
            },
            localizedStringArray("category", "Category"),
            localizedText("description", "Short description"),
            localizedPortableText("fullDescription", "Full Description"),
            {
              name: "images",
              title: "Gallery images (URLs)",
              type: "array",
              of: [{ type: "image" }],
            },
            {
              name: "technologies",
              title: "Technologies",
              type: "array",
              of: [{ type: "string" }],
            },
            localizedStringArray("features", "Features"),
            {
              name: "liveUrl",
              title: "Live URL",
              type: "url",
            },
            {
              name: "githubUrl",
              title: "GitHub URL",
              type: "url",
            },
            localizedString("timeline", "Timeline"),
            localizedStringArray("highlights", "Highlights"),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "projectType",
              media: "images.0",
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title?.en || title?.es || title || "Untitled",
                subtitle: subtitle === "work" ? "Type: Work" : "Type: Personal",
                media,
              };
            },
          },
        },
      ],
    },

    // RESUME
    {
      name: "resume",
      title: "Resume",
      type: "object",
      fields: [
        localizedString("title", "Section title"),
        localizedText("description", "Section description"),
        {
          name: "work",
          title: "Work experience",
          type: "array",
          of: [
            {
              name: "workItem",
              title: "Work item",
              type: "object",
              fields: [
                localizedString("period", "Period"),
                localizedString("title", "Title"),
                localizedString("organization", "Organization"),
                localizedText("description", "Description"),
              ],
            },
          ],
        },
        {
          name: "education",
          title: "Education",
          type: "array",
          of: [
            {
              name: "educationItem",
              title: "Education item",
              type: "object",
              fields: [
                localizedString("period", "Period"),
                localizedString("title", "Title"),
                localizedString("organization", "Organization"),
                localizedText("description", "Description"),
              ],
            },
          ],
        },
        {
          name: "certifications",
          title: "Certifications",
          type: "array",
          of: [
            {
              name: "certificationItem",
              title: "Certification item",
              type: "object",
              fields: [
                localizedString("period", "Period"),
                localizedString("title", "Title"),
                localizedString("organization", "Organization"),
                localizedText("description", "Description"),
              ],
            },
          ],
        },
        {
          name: "linkedinUrl",
          title: "LinkedIn URL for Certifications",
          type: "url",
        },
      ],
    },

    // RECOMMENDATIONS
    {
      name: "recommendations",
      title: "Recommendations",
      type: "array",
      of: [
        {
          name: "recommendationItem",
          title: "Recommendation item",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            localizedString("role", "Role"),
            {
              name: "company",
              title: "Company",
              type: "string",
            },
            localizedString("date", "Date"),
            localizedString("relationship", "Relationship"),
            localizedText("recommendation", "Recommendation"),
            {
              name: "linkedinUrl",
              title: "LinkedIn URL",
              type: "url",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },

    // SKILLS
    {
      name: "skills",
      title: "Skills",
      type: "object",
      fields: [
        localizedString("title", "Section Title"),
        {
          name: "items",
          title: "Skills",
          type: "array",
          of: [
            {
              name: "skillItem",
              title: "Skill Item",
              type: "object",
              fields: [
                localizedString("name", "Name"),
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                },
              ],
            },
          ],
        },
      ],
    },

    // ABOUT
    {
      name: "about",
      title: "About",
      type: "object",
      fields: [
        localizedString("title", "Title"),
        localizedText("description", "Description"),
      ],
    },
  ],
});
