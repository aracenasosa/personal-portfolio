// /schemas/portfolio.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        // PROFILE
        defineField({
            name: 'profile',
            title: 'Profile',
            type: 'object',
            fields: [
                defineField({
                    name: 'topTitle',
                    title: 'Top Title',
                    type: 'string',
                }),
                defineField({
                    name: 'topLeftTitle',
                    title: 'Top Left Title',
                    type: 'string',
                }),
                defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                }),
                defineField({
                    name: 'specialization',
                    title: 'Specialization',
                    type: 'string',
                }),
                defineField({
                    name: 'baseIn',
                    title: 'Base in',
                    type: 'string',
                }),
                defineField({
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                }),
                defineField({
                    name: 'github',
                    title: 'Github',
                    type: 'url',
                }),
                defineField({
                    name: 'linkedin',
                    title: 'Linkedin',
                    type: 'url',
                }),
            ],
        }),

        // INTRODUCTION
        defineField({
            name: 'introduction',
            title: 'Introduction',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                }),
                defineField({
                    name: 'cv',
                    title: 'CV URL',
                    type: 'url',
                }),
                defineField({
                    name: 'cl',
                    title: 'Cover Letter URL',
                    type: 'url',
                }),
                defineField({
                    name: 'stats',
                    title: 'Stats',
                    type: 'array',
                    of: [
                        {
                            name: 'stat',
                            title: 'Stat',
                            type: 'object',
                            fields: [
                                {
                                    name: 'value',
                                    title: 'Value',
                                    type: 'string',
                                },
                                {
                                    name: 'label',
                                    title: 'Label',
                                    type: 'string',
                                },
                            ],
                        },
                    ],
                }),
            ],
        }),

        // PROJECTS
        defineField({
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [
                {
                    name: 'project',
                    title: 'Project',
                    type: 'object',
                    fields: [
                        {
                            name: 'order',
                            title: 'Order',
                            type: 'number',
                        },
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'category',
                            title: 'Category',
                            type: 'array',
                            of: [{ type: 'string' }]
                        },
                        {
                            name: 'description',
                            title: 'Short description',
                            type: 'text',
                        },
                        {
                            name: "fullDescription",
                            title: "Full Description",
                            type: "array",
                            of: [{ type: "block" }],
                        },
                        {
                            name: 'images',
                            title: 'Gallery images (URLs)',
                            type: 'array',
                            of: [{ type: 'image' }],
                        },
                        {
                            name: 'technologies',
                            title: 'Technologies',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                        {
                            name: 'features',
                            title: 'Features',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                        {
                            name: 'liveUrl',
                            title: 'Live URL',
                            type: 'url',
                        },
                        {
                            name: 'githubUrl',
                            title: 'GitHub URL',
                            type: 'url',
                        },
                        {
                            name: 'timeline',
                            title: 'Timeline',
                            type: 'string',
                        },
                        {
                            name: 'highlights',
                            title: 'Highlights',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                    ],
                },
            ],
        }),

        // RESUME
        defineField({
            name: 'resume',
            title: 'Resume',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Section title',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Section description',
                    type: 'text',
                },
                {
                    name: 'work',
                    title: 'Work experience',
                    type: 'array',
                    of: [
                        {
                            name: 'workItem',
                            title: 'Work item',
                            type: 'object',
                            fields: [
                                {
                                    name: 'period',
                                    title: 'Period',
                                    type: 'string',
                                },
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                },
                                {
                                    name: 'organization',
                                    title: 'Organization',
                                    type: 'string',
                                },
                                {
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'education',
                    title: 'Education',
                    type: 'array',
                    of: [
                        {
                            name: 'educationItem',
                            title: 'Education item',
                            type: 'object',
                            fields: [
                                {
                                    name: 'period',
                                    title: 'Period',
                                    type: 'string',
                                },
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                },
                                {
                                    name: 'organization',
                                    title: 'Organization',
                                    type: 'string',
                                },
                                {
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'certifications',
                    title: 'Certifications',
                    type: 'array',
                    of: [
                        {
                            name: 'certificationItem',
                            title: 'Certification item',
                            type: 'object',
                            fields: [
                                {
                                    name: 'period',
                                    title: 'Period',
                                    type: 'string',
                                },
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                },
                                {
                                    name: 'organization',
                                    title: 'Organization',
                                    type: 'string',
                                },
                                {
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        }),

        // ABOUT
        defineField({
            name: 'about',
            title: 'About',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                },
            ],
        }),
    ],
})
