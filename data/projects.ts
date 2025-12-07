import type { Project } from '@/types'

export const projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        description: 'Modern admin dashboard for managing e-commerce operations with real-time analytics and inventory management.',
        fullDescription: 'A comprehensive e-commerce management platform built with React and TypeScript. The dashboard provides real-time insights into sales, inventory, customer analytics, and order processing. Features include customizable widgets, interactive charts, automated reporting, and role-based access control. The system integrates with multiple payment gateways and shipping providers to streamline operations.',
        images: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2426&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop'
        ],
        technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Chart.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        features: [
            'Real-time sales and revenue analytics with interactive charts',
            'Inventory management with low-stock alerts and automated reordering',
            'Customer analytics and behavior tracking',
            'Order processing and fulfillment dashboard',
            'Multi-channel integration (web, mobile, marketplace)',
            'Role-based access control and team management',
            'Automated email notifications and reporting'
        ],
        liveUrl: 'https://demo-ecommerce-dashboard.com',
        githubUrl: 'https://github.com/yourusername/ecommerce-dashboard',
        timeline: 'Jan 2024 - Apr 2024',
        role: 'Full Stack Developer',
        teamSize: '4 developers',
        highlights: [
            'Reduced order processing time by 60%',
            'Improved inventory accuracy to 99.7%',
            'Handled 10,000+ transactions per day'
        ]
    },
    {
        id: 2,
        title: 'Finance App',
        category: 'Mobile Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
        description: 'Personal finance management app with budgeting tools, expense tracking, and investment insights.',
        fullDescription: 'A comprehensive personal finance application designed to help users take control of their financial life. The app features intelligent expense categorization, budget planning, bill reminders, and investment tracking. Built with React Native for cross-platform compatibility, it offers seamless synchronization across devices and bank account integration for automatic transaction imports.',
        images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2340&auto=format&fit=crop'
        ],
        technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Expo', 'Firebase', 'Plaid API', 'Chart.js'],
        features: [
            'Automatic expense tracking via bank integration',
            'Smart budget creation and monitoring',
            'Bill payment reminders and scheduling',
            'Investment portfolio tracking',
            'Customizable spending categories',
            'Financial goal setting and progress tracking',
            'Detailed reports and spending insights',
            'Secure biometric authentication'
        ],
        liveUrl: 'https://apps.apple.com/financeapp',
        timeline: 'Jun 2023 - Oct 2023',
        role: 'Lead Mobile Developer',
        teamSize: 'Solo project',
        highlights: [
            'Over 50,000 downloads in first 3 months',
            '4.8 star rating on App Store',
            'Featured in "Best New Apps" category'
        ]
    },
    {
        id: 3,
        title: 'Travel Platform',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2340&auto=format&fit=crop',
        description: 'Complete travel booking platform with personalized recommendations and seamless booking experience.',
        fullDescription: 'An end-to-end travel booking platform that reimagines the travel planning experience. The platform combines hotel reservations, flight bookings, and local experience recommendations into a single, intuitive interface. Features include AI-powered destination suggestions, real-time price comparisons, interactive itinerary planning, and 24/7 customer support. Built with Next.js and optimized for performance across all devices.',
        images: [
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2340&auto=format&fit=crop'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Google Maps API', 'Sanity CMS'],
        features: [
            'AI-powered travel recommendations',
            'Real-time flight and hotel search',
            'Interactive itinerary builder with drag-and-drop',
            'Price alerts and best deal notifications',
            'Multi-currency support',
            'Integrated payment processing',
            'User reviews and ratings system',
            'Mobile-responsive design with offline support'
        ],
        liveUrl: 'https://travel-platform-demo.com',
        githubUrl: 'https://github.com/yourusername/travel-platform',
        timeline: 'Mar 2023 - Aug 2023',
        role: 'Senior Frontend Developer',
        teamSize: '6 developers',
        highlights: [
            'Achieved 95+ Lighthouse performance score',
            'Processed $2M+ in bookings within first 6 months',
            'Reduced booking abandonment rate by 40%'
        ]
    },
    {
        id: 4,
        title: 'Portfolio Template',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2340&auto=format&fit=crop',
        description: 'Modern, customizable portfolio template for developers and designers with dark mode and animations.',
        fullDescription: 'A highly customizable, production-ready portfolio template designed for developers and designers. Built with Next.js 14 and TypeScript, it features a component-based architecture for easy customization. Includes pre-built sections for projects, skills, experience, and contact forms. The template emphasizes performance with optimized images, code splitting, and SEO best practices. Fully responsive with smooth animations powered by Framer Motion.',
        images: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2340&auto=format&fit=crop'
        ],
        technologies: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS', 'Vercel'],
        features: [
            'Fully responsive design with mobile-first approach',
            'Dark/light theme toggle with smooth transitions',
            'Animated sections with scroll-based reveals',
            'Contact form with email integration',
            'Blog support with MDX',
            'Projects showcase with filtering',
            'SEO optimized with meta tags',
            'One-click deployment to Vercel'
        ],
        liveUrl: 'https://portfolio-template-demo.vercel.app',
        githubUrl: 'https://github.com/yourusername/portfolio-template',
        timeline: 'Nov 2023 - Dec 2023',
        role: 'Creator & Maintainer',
        highlights: [
            '1,000+ GitHub stars',
            'Used by 500+ developers worldwide',
            '100% Lighthouse score across all categories'
        ]
    },
    {
        id: 5,
        title: 'Task Management System',
        category: 'SaaS Platform',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2340&auto=format&fit=crop',
        description: 'Collaborative task management platform with real-time updates, team workflows, and productivity analytics.',
        fullDescription: 'A modern SaaS task management platform designed for distributed teams. The system features intelligent task prioritization, automated workflow management, real-time collaboration, and comprehensive analytics. Built with a microservices architecture using Next.js frontend and Node.js backend, it handles thousands of concurrent users with sub-second response times. Integration with popular tools like Slack, GitHub, and Google Workspace enables seamless workflow automation.',
        images: [
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2340&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop'
        ],
        technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'WebSocket', 'Docker', 'AWS'],
        features: [
            'Real-time task updates and collaboration with WebSocket',
            'Kanban boards with drag-and-drop functionality',
            'Advanced filtering and search capabilities',
            'Automated task assignment based on workload',
            'Team productivity analytics and reporting',
            'Custom workflow automation with triggers',
            'Third-party integrations (Slack, GitHub, Google Workspace)',
            'Role-based permissions and team management'
        ],
        liveUrl: 'https://taskmanager-demo.com',
        githubUrl: 'https://github.com/yourusername/task-manager',
        timeline: 'Sep 2022 - Feb 2023',
        role: 'Tech Lead',
        teamSize: '8 developers',
        highlights: [
            'Serving 25,000+ active users across 500+ teams',
            '99.9% uptime over 18 months',
            'Average task completion rate increased by 45%'
        ]
    }
]
