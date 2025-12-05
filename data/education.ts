import type { EducationItem, ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
    {
        id: 'travcoding-senior-frontend',
        period: 'Jun 2024 - Present',
        title: 'Senior Frontend Developer',
        organization: 'Travcoding · Remote · United States',
        description:
            'Leading front-end development for travel-tech platforms, building booking, payment, and operations tools using React, TypeScript, Redux, SCSS, and Stripe integrations. Delivering high-performance UI experiences for hotels, rentals, and travel agencies.'
    },
    {
        id: 'claro-senior-software',
        period: 'Jun 2021 - Jun 2024',
        title: 'Senior Software Engineer',
        organization: 'Claro Dominicana · Remote',
        description:
            'Developed and maintained enterprise web applications for the largest telecom company in the Dominican Republic. Built internal tools for plan management, penalty calculations, and customer operations using React, Java, .NET, and Oracle.'
    },
    {
        id: 'apap-fullstack',
        period: 'Jul 2019 - Jun 2021',
        title: 'Full Stack Senior Developer',
        organization: 'Asociación Popular de Ahorros y Préstamos (APAP) · Remote',
        description:
            'Implemented financial systems for savings, credit, and mortgage operations. Built Angular, Next.js, and Nest.js applications, developed SQL procedures, and optimized internal tools for loan processing and financial product management.'
    },
    {
        id: 'popular-business-analyst',
        period: 'Jan 2019 - Jul 2019',
        title: 'Project Business Analyst (Contractor)',
        organization: 'Banco Popular Dominicano · On-site',
        description:
            'Coordinated communication between business stakeholders and development teams. Gathered requirements, validated system flows, and helped ensure successful delivery of banking software projects.'
    }
]

export const education: EducationItem[] = [
    // --- Formal Education ---
    {
        id: 'unapec-engineer',
        period: 'Jan 2020 - Mar 2023',
        title: "Engineer's Degree, Computer Software Engineering",
        organization: 'Universidad APEC',
        description:
            'Engineering program focused on software architecture, programming, databases, and systems analysis.'
    },
    {
        id: 'itla-technologist',
        period: 'Sep 2017 - Mar 2020',
        title: 'Software Technologist',
        organization: 'ITLA',
        description:
            'Training in software development, algorithms, databases, and web technologies.'
    },

]

export const certifications: EducationItem[] = [
    // --- 2025 ---
    {
        id: 'databricks-ai',
        period: 'Issued Oct 2025',
        title: 'Generative AI Fundamentals',
        organization: 'Databricks',
        description:
            'Introduction to generative AI concepts, large language models, and practical applications.'
    },
    {
        id: 'postman-api',
        period: 'Issued Oct 2025',
        title: 'Postman API Fundamentals Student Expert',
        organization: 'Postman',
        description:
            'Hands-on course covering REST APIs, HTTP requests, collections, and API testing workflows.'
    },

    // --- 2024 ---
    {
        id: 'efset-c1',
        period: 'Issued Apr 2024',
        title: 'EF SET English Certificate (C1 Advanced)',
        organization: 'EF SET',
        description:
            'English proficiency certification at an advanced C1 level.'
    },

    // --- 2020 ---
    {
        id: 'itla-db-course',
        period: 'Issued Dec 2020',
        title: 'Introduction to Database',
        organization: 'ITLA',
        description: 'Fundamentals of SQL, relational models, and database design.'
    },
    {
        id: 'owasp-secure-dev',
        period: 'Issued Nov 2020',
        title: 'Desarrollo de Software Seguro Basado en OWASP',
        organization: 'Ministerio de Industria y Comercio',
        description:
            'Secure software development practices based on OWASP standards.'
    },
    {
        id: 'gcp-core-infra',
        period: 'Issued Oct 2020',
        title: 'Google Cloud Platform Fundamentals: Core Infrastructure',
        organization: 'Coursera',
        description:
            'Core concepts of GCP: compute, storage, networking, IAM, and cloud deployment.'
    },
    {
        id: 'scrum-foundation',
        period: 'Issued Jun 2020 · Expired Jun 2021',
        title: 'Scrum Foundation Professional Certification (SFPC)',
        organization: 'Certiprof',
        description:
            'Training in Scrum principles, Agile methodologies, and team workflows.'
    },

    // --- 2019 ---
    {
        id: 'angular-basics',
        period: 'Issued Aug 2019',
        title: 'Angular Basics for Absolute Beginners',
        organization: 'Udemy',
        description:
            'Introduction to Angular components, routing, TypeScript, and application structure.'
    },
    {
        id: 'web-programming',
        period: 'Issued Jan 2019',
        title: 'Fundamentals of Web Programming',
        organization: 'Udemy',
        description:
            'Training in HTML, CSS, Bootstrap, JavaScript, and responsive UI development.'
    },

    // --- 2018 ---
    {
        id: 'js-intro',
        period: 'Issued Oct 2018',
        title: 'Introduction to Programming Using JavaScript',
        organization: 'Udemy',
        description:
            'Core JavaScript syntax, functions, DOM manipulation, and problem-solving foundations.'
    }
]