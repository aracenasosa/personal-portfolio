// /schemas/portfolio.ts
import { defineType, defineField } from "sanity";

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
        {
          name: "topTitle",
          title: "Top Title",
          type: "string",
        },
        {
          name: "topLeftTitle",
          title: "Top Left Title",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
        {
          name: "specialization",
          title: "Specialization",
          type: "string",
        },
        {
          name: "baseIn",
          title: "Base in",
          type: "string",
        },
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
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
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
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },

    // PORTFOLIO SETTINGS
    {
      name: "workProjectsTitle",
      title: "Work Projects Section Title",
      type: "string",
      description:
        "Title for the Work Projects section (default: Work Projects)",
      initialValue: "Work Projects",
    },
    {
      name: "personalProjectsTitle",
      title: "Personal Projects Section Title",
      type: "string",
      description:
        "Title for the Personal Projects section (default: Personal Projects)",
      initialValue: "Personal Projects",
    },
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
            {
              name: "title",
              title: "Title",
              type: "string",
            },
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
            {
              name: "category",
              title: "Category",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "description",
              title: "Short description",
              type: "text",
            },
            {
              name: "fullDescription",
              title: "Full Description",
              type: "array",
              of: [{ type: "block" }],
            },
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
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
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
            {
              name: "timeline",
              title: "Timeline",
              type: "string",
            },
            {
              name: "highlights",
              title: "Highlights",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "projectType",
              media: "images.0",
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || "Untitled",
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
        {
          name: "title",
          title: "Section title",
          type: "string",
        },
        {
          name: "description",
          title: "Section description",
          type: "text",
        },
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
                {
                  name: "period",
                  title: "Period",
                  type: "string",
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "organization",
                  title: "Organization",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
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
                {
                  name: "period",
                  title: "Period",
                  type: "string",
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "organization",
                  title: "Organization",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
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
                {
                  name: "period",
                  title: "Period",
                  type: "string",
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "organization",
                  title: "Organization",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
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
            {
              name: "role",
              title: "Role",
              type: "string",
            },
            {
              name: "company",
              title: "Company",
              type: "string",
            },
            {
              name: "date",
              title: "Date",
              type: "string",
            },
            {
              name: "relationship",
              title: "Relationship",
              type: "string",
            },
            {
              name: "recommendation",
              title: "Recommendation",
              type: "text",
            },
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
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
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
                {
                  name: "name",
                  title: "Name",
                  type: "string",
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
      ],
    },

    // ABOUT
    {
      name: "about",
      title: "About",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
      ],
    },
  ],
});
