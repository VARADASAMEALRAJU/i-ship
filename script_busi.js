// Complete project data with 20+ projects per technology
const projectsData = {
    'React': [
        {
            id: 1,
            title: 'E-Commerce Mobile App',
            description: 'A full-featured mobile shopping app with payment integration and real-time notifications.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Alex Chen', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Sarah Kim', role: 'UI/UX Designer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Mike Johnson', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Modern e-commerce solution for small to medium businesses',
            tools: ['React Native', 'Node.js', 'MongoDB', 'Stripe API'],
            contact: { email: 'alex.chen@email.com', phone: '+1 (555) 123-4567', github: 'alexchen-dev' }
        },
        {
            id: 2,
            title: 'Task Management Dashboard',
            description: 'Collaborative project management tool with team collaboration features and analytics.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Emma Wilson', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
                { name: 'David Brown', role: 'Product Manager', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Enterprise project management and team collaboration',
            tools: ['React', 'TypeScript', 'PostgreSQL', 'Chart.js'],
            contact: { email: 'emma.wilson@email.com', phone: '+1 (555) 987-6543', github: 'emmawilson-dev' }
        },
        {
            id: 3,
            title: 'Social Media Analytics Platform',
            description: 'Comprehensive analytics dashboard for tracking social media performance across multiple platforms.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'James Rodriguez', role: 'Data Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Lisa Chen', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Social media marketing and analytics for businesses',
            tools: ['React', 'D3.js', 'Python', 'AWS'],
            contact: { email: 'james.rodriguez@email.com', phone: '+1 (555) 456-7890', github: 'jamesrodriguez-data' }
        },
        {
            id: 4,
            title: 'Real Estate Marketplace',
            description: 'Modern real estate platform with virtual tours, mortgage calculators, and agent matching.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Michael Zhang', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
                { name: 'Anna Rodriguez', role: 'UI/UX Designer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Real estate listings and property management platform',
            tools: ['React', 'Express.js', 'MySQL', 'Google Maps API'],
            contact: { email: 'michael.zhang@email.com', phone: '+1 (555) 234-5678', github: 'michaelzhang-dev' }
        },
        {
            id: 5,
            title: 'Online Learning Platform',
            description: 'Interactive e-learning platform with video courses, quizzes, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Sarah Johnson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Tom Wilson', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
                { name: 'Maria Garcia', role: 'Content Creator', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online education and skill development platform',
            tools: ['React', 'Node.js', 'MongoDB', 'Video.js'],
            contact: { email: 'sarah.johnson@email.com', phone: '+1 (555) 345-6789', github: 'sarahjohnson-edu' }
        },
        {
            id: 6,
            title: 'Food Delivery App',
            description: 'Complete food delivery solution with restaurant management, order tracking, and payment processing.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Carlos Martinez', role: 'Mobile Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Jennifer Lee', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Food delivery and restaurant management system',
            tools: ['React Native', 'Express.js', 'PostgreSQL'],
            contact: { email: 'carlos.martinez@email.com', phone: '+1 (555) 678-9012', github: 'carlosmartinez-dev' }
        },
        {
            id: 7,
            title: 'Weather Dashboard',
            description: 'Interactive weather application with real-time updates, forecasts, and location-based services.',
            image: 'https://images.unsplash.com/photo-1501712217627-e4354c4e723d?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Daniel White', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal weather monitoring and forecasting',
            tools: ['React', 'OpenWeatherMap API', 'Chart.js'],
            contact: { email: 'daniel.white@email.com', phone: '+1 (555) 789-0123', github: 'danielwhite-dev' }
        },
        {
            id: 8,
            title: 'Cryptocurrency Tracker',
            description: 'Track cryptocurrency prices in real-time, manage portfolios, and set up alerts.',
            image: 'https://images.unsplash.com/photo-1621360172102-1a42f65a12a7?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Sophia Lee', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Ethan Miller', role: 'Blockchain Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal finance and cryptocurrency portfolio management',
            tools: ['React', 'Node.js', 'CoinGecko API', 'WebSockets'],
            contact: { email: 'sophia.lee@email.com', phone: '+1 (555) 890-1234', github: 'sophialee-crypto' }
        },
        {
            id: 9,
            title: 'Personal Portfolio Builder',
            description: 'Drag-and-drop website builder for creating professional online portfolios.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Olivia Garcia', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online portfolio creation for professionals and students',
            tools: ['React', 'Next.js', 'Tailwind CSS', 'Firebase'],
            contact: { email: 'olivia.garcia@email.com', phone: '+1 (555) 012-3456', github: 'oliviagarcia-dev' }
        },
        {
            id: 10,
            title: 'Recipe Sharing Platform',
            description: 'Community-driven platform for sharing recipes, meal planning, and cooking tips.',
            image: 'https://images.unsplash.com/photo-1504712879367-ee6a67f70b4a?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Noah Rodriguez', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Ava White', role: 'UI/UX Designer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Recipe discovery and meal planning for home cooks',
            tools: ['React', 'Spring Boot', 'MySQL', 'Cloudinary'],
            contact: { email: 'noah.rodriguez@email.com', phone: '+1 (555) 234-5678', github: 'noahrodriguez-chef' }
        }
        // Add 10 more React projects here following the same structure
        ,
        {
            id: 11,
            title: 'Fitness Tracking App',
            description: 'Track workouts, set goals, and monitor progress with personalized insights.',
            image: 'https://images.unsplash.com/photo-1594921503376-78b17b6a4a11?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Liam Davies', role: 'Mobile Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Chloe Brown', role: 'UI/UX Designer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal fitness and health monitoring',
            tools: ['React Native', 'Firebase', 'Redux'],
            contact: { email: 'liam.davies@email.com', phone: '+1 (555) 333-4444', github: 'liamd-fit' }
        },
        {
            id: 12,
            title: 'Event Management System',
            description: 'Plan, promote, and manage events with ticketing, registration, and scheduling features.',
            image: 'https://images.unsplash.com/photo-1470754877335-ad6925828734?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Mia Wilson', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
                { name: 'Lucas Taylor', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Event planning and management for businesses and individuals',
            tools: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
            contact: { email: 'mia.wilson@email.com', phone: '+1 (555) 555-1212', github: 'miaw-events' }
        },
        {
            id: 13,
            title: 'Chat Application',
            description: 'Real-time chat application with group chats, direct messages, and media sharing.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Ethan Johnson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Sophie Davis', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Instant messaging and communication platform',
            tools: ['React', 'Socket.IO', 'Express.js', 'MongoDB'],
            contact: { email: 'ethan.j@email.com', phone: '+1 (555) 777-8888', github: 'ethanj-chat' }
        },
        {
            id: 14,
            title: 'Job Board Platform',
            description: 'Connect job seekers with employers, featuring advanced search and application tracking.',
            image: 'https://images.unsplash.com/photo-1529126442037-33a87900b957?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Isabella Garcia', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online recruitment and job application management',
            tools: ['React', 'Node.js', 'GraphQL', 'Elasticsearch'],
            contact: { email: 'isabella.g@email.com', phone: '+1 (555) 999-0000', github: 'isabellag-jobs' }
        },
        {
            id: 15,
            title: 'Budget Tracking App',
            description: 'Manage personal finances, categorize expenses, and visualize spending habits.',
            image: 'https://images.unsplash.com/photo-1508214751196-eedc559868f7?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'James White', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal finance management and budgeting',
            tools: ['React', 'Redux', 'Chart.js', 'Local Storage'],
            contact: { email: 'james.w@email.com', phone: '+1 (555) 111-2222', github: 'jamesw-budget' }
        },
        {
            id: 16,
            title: 'Music Streaming Service',
            description: 'Build playlists, discover new artists, and stream music online.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Ava Brown', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Oliver Jones', role: 'DevOps Engineer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online music streaming and discovery',
            tools: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
            contact: { email: 'ava.b@email.com', phone: '+1 (555) 444-5555', github: 'avab-music' }
        },
        {
            id: 17,
            title: 'Interactive Quiz Platform',
            description: 'Create and take quizzes on various topics with real-time feedback.',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65d806fa?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Sophia Miller', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Educational assessments and interactive learning',
            tools: ['React', 'Firebase', 'Context API'],
            contact: { email: 'sophia.m@email.com', phone: '+1 (555) 666-7777', github: 'sophiam-quiz' }
        },
        {
            id: 18,
            title: 'Online Bookstore',
            description: 'Browse, purchase, and review books with a user-friendly interface.',
            image: 'https://images.unsplash.com/photo-1532012197267-da84dce9d017?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'William Davis', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Charlotte Green', role: 'UI/UX Designer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'E-commerce platform for selling books',
            tools: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
            contact: { email: 'william.d@email.com', phone: '+1 (555) 888-9999', github: 'williamd-books' }
        },
        {
            id: 19,
            title: 'Personal Blog Platform',
            description: 'Create and publish articles, manage categories, and engage with readers.',
            image: 'https://images.unsplash.com/photo-1457460866-bd0d65b1cd56?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Daniel Wilson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal blogging and content creation',
            tools: ['React', 'Markdown', 'Firebase'],
            contact: { email: 'daniel.w@email.com', phone: '+1 (555) 000-1111', github: 'danielw-blog' }
        },
        {
            id: 20,
            title: 'Expense Splitter App',
            description: 'Easily split bills and track shared expenses with friends and groups.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Emily Chen', role: 'Mobile Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Expense tracking and bill splitting for groups',
            tools: ['React Native', 'Node.js', 'MongoDB'],
            contact: { email: 'emily.c@email.com', phone: '+1 (555) 222-3333', github: 'emilyc-expenses' }
        }
    ],
    'Flutter': [
        {
            id: 1,
            title: 'Recipe App with Offline Mode',
            description: 'Discover and save recipes, with full functionality available offline.',
            image: 'https://images.unsplash.com/photo-1504712879367-ee6a67f70b4a?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Olivia Smith', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
                { name: 'Jack White', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Recipe discovery and offline access for cooking enthusiasts',
            tools: ['Flutter', 'Dart', 'Firebase', 'Hive'],
            contact: { email: 'olivia.smith@email.com', phone: '+1 (555) 111-2222', github: 'olivias-flutter' }
        },
        {
            id: 2,
            title: 'Smart Home Control App',
            description: 'Control smart devices, set routines, and monitor home security from your phone.',
            image: 'https://images.unsplash.com/photo-1588702517861-f095627a6e13?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Noah Davis', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
                { name: 'Sophie Turner', role: 'Hardware Integrator', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Centralized control for smart home devices',
            tools: ['Flutter', 'Dart', 'MQTT', 'Google Assistant API'],
            contact: { email: 'noah.davis@email.com', phone: '+1 (555) 333-4444', github: 'noahd-smarthome' }
        },
        {
            id: 3,
            title: 'Language Learning App',
            description: 'Interactive lessons, flashcards, and pronunciation practice for various languages.',
            image: 'https://images.unsplash.com/photo-1546740693-e4d3a24b1265?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Liam Hall', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Mobile language education and practice',
            tools: ['Flutter', 'Dart', 'Text-to-Speech API', 'Firebase'],
            contact: { email: 'liam.hall@email.com', phone: '+1 (555) 555-6666', github: 'liamh-lang' }
        },
        {
            id: 4,
            title: 'Personal Finance Manager',
            description: 'Track income, expenses, set budgets, and visualize financial health.',
            image: 'https://images.unsplash.com/photo-1508214751196-eedc559868f7?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Ava Miller', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal budgeting and expense tracking',
            tools: ['Flutter', 'Dart', 'SQFlite', 'Chart.js'],
            contact: { email: 'ava.miller@email.com', phone: '+1 (555) 777-8888', github: 'avam-finance' }
        },
        {
            id: 5,
            title: 'Fitness Coach App',
            description: 'Personalized workout plans, video demonstrations, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1594921503376-78b17b6a4a11?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Ethan Garcia', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Mobile fitness coaching and workout management',
            tools: ['Flutter', 'Dart', 'Firebase', 'Video Player'],
            contact: { email: 'ethan.garcia@email.com', phone: '+1 (555) 999-0000', github: 'ethang-fitness' }
        },
        {
            id: 6,
            title: 'Event Finder & Ticketing',
            description: 'Discover local events, purchase tickets, and manage your event calendar.',
            image: 'https://images.unsplash.com/photo-1470754877335-ad6925828734?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Chloe Rodriguez', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Event discovery and ticket purchasing',
            tools: ['Flutter', 'Dart', 'Stripe API', 'Google Maps API'],
            contact: { email: 'chloe.r@email.com', phone: '+1 (555) 123-4567', github: 'chloer-events' }
        },
        {
            id: 7,
            title: 'Meditation & Mindfulness App',
            description: 'Guided meditations, soothing sounds, and progress tracking for mental wellness.',
            image: 'https://images.unsplash.com/photo-1552068779-d10619865910?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Daniel Martinez', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Mental wellness and stress reduction',
            tools: ['Flutter', 'Dart', 'Audio Player', 'Firebase'],
            contact: { email: 'daniel.m@email.com', phone: '+1 (555) 234-5678', github: 'danielm-meditate' }
        },
        {
            id: 8,
            title: 'Notes & To-Do List App',
            description: 'Organize notes, create to-do lists, and set reminders with intuitive UI.',
            image: 'https://images.unsplash.com/photo-1457460866-bd0d65b1cd56?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Sophia Kim', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal organization and productivity',
            tools: ['Flutter', 'Dart', 'Hive', 'Provider'],
            contact: { email: 'sophia.k@email.com', phone: '+1 (555) 345-6789', github: 'sophiak-notes' }
        },
        {
            id: 9,
            title: 'Weather Forecast App',
            description: 'Get accurate weather updates, hourly forecasts, and severe weather alerts.',
            image: 'https://images.unsplash.com/photo-1501712217627-e4354c4e723d?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Lucas White', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Daily weather information and planning',
            tools: ['Flutter', 'Dart', 'OpenWeatherMap API', 'Geolocation'],
            contact: { email: 'lucas.w@email.com', phone: '+1 (555) 456-7890', github: 'lucasw-weather' }
        },
        {
            id: 10,
            title: 'E-Wallet & Payment App',
            description: 'Secure mobile wallet for sending/receiving money, bill payments, and transaction history.',
            image: 'https://images.unsplash.com/photo-1579547621113-e408544d6731?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Mia Johnson', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
                { name: 'Oliver Smith', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Secure mobile payments and financial management',
            tools: ['Flutter', 'Dart', 'Stripe API', 'Firebase'],
            contact: { email: 'mia.j@email.com', phone: '+1 (555) 567-8901', github: 'miaj-ewallet' }
        },
        {
            id: 11,
            title: 'News Aggregator App',
            description: 'Get personalized news feeds from various sources, saved articles, and topic customization.',
            image: 'https://images.unsplash.com/photo-1495020689067-95de64624f11?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Leo Brown', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personalized news consumption and topic management',
            tools: ['Flutter', 'Dart', 'News API', 'Provider'],
            contact: { email: 'leo.b@email.com', phone: '+1 (555) 678-9012', github: 'leob-news' }
        },
        {
            id: 12,
            title: 'Book Reading App',
            description: 'Read e-books, customize reading experience, and track reading progress.',
            image: 'https://images.unsplash.com/photo-1532012197267-da84dce9d017?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Grace Davies', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Mobile e-book reading and library management',
            tools: ['Flutter', 'Dart', 'EPUB Reader', 'Hive'],
            contact: { email: 'grace.d@email.com', phone: '+1 (555) 789-0123', github: 'graced-books' }
        },
        {
            id: 13,
            title: 'Habit Tracker',
            description: 'Build and track habits, set streaks, and get motivational reminders.',
            image: 'https://images.unsplash.com/photo-1517486804-0672e35b7193?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Harry Wilson', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal habit building and tracking',
            tools: ['Flutter', 'Dart', 'Local Notifications', 'SQFlite'],
            contact: { email: 'harry.w@email.com', phone: '+1 (555) 890-1234', github: 'harryw-habits' }
        },
        {
            id: 14,
            title: 'Inventory Management App',
            description: 'Track stock, manage products, and generate reports for small businesses.',
            image: 'https://images.unsplash.com/photo-1560473926-d18b631988b4?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Isabelle Taylor', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Inventory control for small and medium enterprises',
            tools: ['Flutter', 'Dart', 'Firebase', 'CSV Export'],
            contact: { email: 'isabelle.t@email.com', phone: '+1 (555) 012-3456', github: 'isabellet-inventory' }
        },
        {
            id: 15,
            title: 'Travel Planner App',
            description: 'Plan itineraries, book flights/hotels, and discover attractions.',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Jacob Moore', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal trip planning and travel booking',
            tools: ['Flutter', 'Dart', 'Google Maps API', 'API Integration'],
            contact: { email: 'jacob.m@email.com', phone: '+1 (555) 123-4567', github: 'jacobm-travel' }
        },
        {
            id: 16,
            title: 'Podcast Player',
            description: 'Discover, subscribe, and listen to podcasts with playback controls.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Katie King', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Podcast consumption and management',
            tools: ['Flutter', 'Dart', 'Podcast API', 'Audio Playback'],
            contact: { email: 'katie.k@email.com', phone: '+1 (555) 234-5678', github: 'katiek-podcast' }
        },
        {
            id: 17,
            title: 'Recipe & Grocery List Maker',
            description: 'Import recipes, create grocery lists, and plan meals for the week.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Lily Scott', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Meal planning and grocery shopping assistance',
            tools: ['Flutter', 'Dart', 'Edamam API', 'Hive'],
            contact: { email: 'lily.s@email.com', phone: '+1 (555) 345-6789', github: 'lilys-recipes' }
        },
        {
            id: 18,
            title: 'Digital Whiteboard App',
            description: 'Collaborative drawing and brainstorming tool with real-time syncing.',
            image: 'https://images.unsplash.com/photo-1627993074744-8849b291d906?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Max Turner', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online collaboration and brainstorming',
            tools: ['Flutter', 'Dart', 'WebSockets', 'Firebase'],
            contact: { email: 'max.t@email.com', phone: '+1 (555) 456-7890', github: 'maxt-whiteboard' }
        },
        {
            id: 19,
            title: 'Unit Converter',
            description: 'Convert between various units (length, weight, temperature, etc.) quickly.',
            image: 'https://images.unsplash.com/photo-1565431388059-0f2c45e5b6f3?w=400&h=300&fit=crop',
            rating: 4.4,
            team: [
                { name: 'Nora Hall', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Quick unit conversions for everyday use',
            tools: ['Flutter', 'Dart'],
            contact: { email: 'nora.h@email.com', phone: '+1 (555) 567-8901', github: 'norah-converter' }
        },
        {
            id: 20,
            title: 'Offline Dictionary App',
            description: 'Access definitions and synonyms without an internet connection.',
            image: 'https://images.unsplash.com/photo-1522881373574-89c0228d9c24?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Oscar Green', role: 'Flutter Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Offline word definitions and vocabulary building',
            tools: ['Flutter', 'Dart', 'SQFlite', 'Local Database'],
            contact: { email: 'oscar.g@email.com', phone: '+1 (555) 678-9012', github: 'oscarg-dictionary' }
        }
    ],
    'Vue.js': [
        {
            id: 1,
            title: 'Project Management Tool',
            description: 'Task assignments, progress tracking, and team collaboration features.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Sophia Miller', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Jack White', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Agile project management for development teams',
            tools: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
            contact: { email: 'sophia.m@email.com', phone: '+1 (555) 111-2222', github: 'sophiam-vue' }
        },
        {
            id: 2,
            title: 'Online Storefront',
            description: 'Beautiful and responsive e-commerce site with product listings and checkout.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Liam Garcia', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Emma Brown', role: 'UI/UX Designer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'E-commerce website for small businesses',
            tools: ['Vue.js', 'Nuxt.js', 'Stripe API', 'Firebase'],
            contact: { email: 'liam.g@email.com', phone: '+1 (555) 333-4444', github: 'liamg-shop' }
        },
        {
            id: 3,
            title: 'Interactive Data Dashboard',
            description: 'Visualize complex datasets with dynamic charts and filter options.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Noah Davis', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Business intelligence and data visualization',
            tools: ['Vue.js', 'Chart.js', 'D3.js', 'API Integration'],
            contact: { email: 'noah.d@email.com', phone: '+1 (555) 555-6666', github: 'noahd-dashboard' }
        },
        {
            id: 4,
            title: 'Forum / Community Platform',
            description: 'Engage with a community through discussions, posts, and user profiles.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Olivia Wilson', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online community building and discussion forums',
            tools: ['Vue.js', 'Laravel', 'MySQL', 'Pusher'],
            contact: { email: 'olivia.w@email.com', phone: '+1 (555) 777-8888', github: 'oliviaw-forum' }
        },
        {
            id: 5,
            title: 'Recipe & Meal Planner',
            description: 'Create meal plans, generate grocery lists, and discover new recipes.',
            image: 'https://images.unsplash.com/photo-1504712879367-ee6a67f70b4a?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Ethan Taylor', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Meal planning and recipe management for home cooks',
            tools: ['Vue.js', 'Vue Router', 'API Integration', 'Local Storage'],
            contact: { email: 'ethan.t@email.com', phone: '+1 (555) 999-0000', github: 'ethant-recipes' }
        },
        {
            id: 6,
            title: 'Booking & Reservation System',
            description: 'Manage appointments, rooms, or resources with real-time availability.',
            image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Mia Brown', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online booking for services and resources',
            tools: ['Vue.js', 'Node.js', 'PostgreSQL', 'Calendar API'],
            contact: { email: 'mia.b@email.com', phone: '+1 (555) 123-4567', github: 'miab-booking' }
        },
        {
            id: 7,
            title: 'Knowledge Base / Wiki',
            description: 'Create and manage articles, FAQs, and documentation for users.',
            image: 'https://images.unsplash.com/photo-1507925921958-8a8b13c32b5d?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Lucas Smith', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Internal documentation and customer support knowledge base',
            tools: ['Vue.js', 'Markdown', 'Firebase', 'Algolia'],
            contact: { email: 'lucas.s@email.com', phone: '+1 (555) 234-5678', github: 'lucass-wiki' }
        },
        {
            id: 8,
            title: 'Fitness Tracker Dashboard',
            description: 'Track workouts, nutrition, and progress with personalized metrics.',
            image: 'https://images.unsplash.com/photo-1594921503376-78b17b6a4a11?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Chloe Davies', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal health and fitness monitoring',
            tools: ['Vue.js', 'Vuex', 'Chart.js', 'REST API'],
            contact: { email: 'chloe.d@email.com', phone: '+1 (555) 345-6789', github: 'chloed-fitness' }
        },
        {
            id: 9,
            title: 'Job Search Portal',
            description: 'Search and apply for jobs, manage applications, and save job alerts.',
            image: 'https://images.unsplash.com/photo-1529126442037-33a87900b957?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Daniel White', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online job board and applicant tracking',
            tools: ['Vue.js', 'Node.js', 'MongoDB', 'Indeed API'],
            contact: { email: 'daniel.w@email.com', phone: '+1 (555) 456-7890', github: 'danielw-jobs' }
        },
        {
            id: 10,
            title: 'Course Management System',
            description: 'Manage courses, enroll students, and track progress for educational institutions.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Sophia King', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Oliver Green', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Learning management system for schools and academies',
            tools: ['Vue.js', 'Spring Boot', 'MySQL', 'Video.js'],
            contact: { email: 'sophia.k@email.com', phone: '+1 (555) 567-8901', github: 'sophiak-lms' }
        },
        {
            id: 11,
            title: 'Personal Portfolio Site Builder',
            description: 'Create and customize professional online portfolios with ease.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Emma Wilson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Easy website creation for personal branding',
            tools: ['Vue.js', 'Nuxt.js', 'Contentful', 'Tailwind CSS'],
            contact: { email: 'emma.w@email.com', phone: '+1 (555) 678-9012', github: 'emmaw-portfolio' }
        },
        {
            id: 12,
            title: 'Blog / Article Publishing Platform',
            description: 'Write, publish, and manage blog posts with rich text editing.',
            image: 'https://images.unsplash.com/photo-1457460866-bd0d65b1cd56?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'James Brown', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Content creation and management for bloggers',
            tools: ['Vue.js', 'Node.js', 'PostgreSQL', 'Quill.js'],
            contact: { email: 'james.b@email.com', phone: '+1 (555) 789-0123', github: 'jamesb-blog' }
        },
        {
            id: 13,
            title: 'Weather App with Forecasts',
            description: 'Get current weather and extended forecasts for any location.',
            image: 'https://images.unsplash.com/photo-1501712217627-e4354c4e723d?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Ava Garcia', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Daily weather updates and planning',
            tools: ['Vue.js', 'OpenWeatherMap API', 'Axios'],
            contact: { email: 'ava.g@email.com', phone: '+1 (555) 890-1234', github: 'avag-weather' }
        },
        {
            id: 14,
            title: 'Recipe & Ingredient Management',
            description: 'Store recipes, manage ingredients, and find new meal ideas.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'David Smith', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Home cooking and pantry management',
            tools: ['Vue.js', 'Firebase', 'Vuetify'],
            contact: { email: 'david.s@email.com', phone: '+1 (555) 012-3456', github: 'davids-recipes' }
        },
        {
            id: 15,
            title: 'Simple To-Do List App',
            description: 'A clean and efficient application to manage your daily tasks.',
            image: 'https://images.unsplash.com/photo-1457460866-bd0d65b1cd56?w=400&h=300&fit=crop',
            rating: 4.4,
            team: [
                { name: 'Sarah Johnson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Basic task management for personal use',
            tools: ['Vue.js', 'Vuex', 'Local Storage'],
            contact: { email: 'sarah.j@email.com', phone: '+1 (555) 123-4567', github: 'sarahj-todo' }
        },
        {
            id: 16,
            title: 'Event Calendar & Scheduler',
            description: 'Organize events, set reminders, and view schedules in a calendar format.',
            image: 'https://images.unsplash.com/photo-1470754877335-ad6925828734?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Chris Lee', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal and professional event organization',
            tools: ['Vue.js', 'Vue-Calendar', 'Firebase'],
            contact: { email: 'chris.l@email.com', phone: '+1 (555) 234-5678', github: 'chrisl-calendar' }
        },
        {
            id: 17,
            title: 'Simple Chat Application',
            description: 'Real-time messaging with individual and group chats.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Emily White', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Instant communication platform',
            tools: ['Vue.js', 'Socket.IO', 'Node.js', 'MongoDB'],
            contact: { email: 'emily.w@email.com', phone: '+1 (555) 345-6789', github: 'emilyw-chat' }
        },
        {
            id: 18,
            title: 'Currency Converter',
            description: 'Convert between different currencies with live exchange rates.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Michael King', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Quick currency conversions for travel and finance',
            tools: ['Vue.js', 'Exchange Rate API', 'Axios'],
            contact: { email: 'michael.k@email.com', phone: '+1 (555) 456-7890', github: 'michaelk-currency' }
        },
        {
            id: 19,
            title: 'Movie Database Browser',
            description: 'Browse movies, view details, trailers, and user reviews.',
            image: 'https://images.unsplash.com/photo-1485846460142-f947ee12ef6f?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Jessica Taylor', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Movie discovery and information',
            tools: ['Vue.js', 'The Movie Database API', 'Vue Router'],
            contact: { email: 'jessica.t@email.com', phone: '+1 (555) 567-8901', github: 'jessicat-movies' }
        },
        {
            id: 20,
            title: 'Simple Calculator App',
            description: 'A basic functional calculator for everyday arithmetic.',
            image: 'https://images.unsplash.com/photo-1607597116812-d9616d6101c7?w=400&h=300&fit=crop',
            rating: 4.3,
            team: [
                { name: 'Robert Hall', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Quick calculations for simple math operations',
            tools: ['Vue.js'],
            contact: { email: 'robert.h@email.com', phone: '+1 (555) 678-9012', github: 'roberth-calc' }
        }
    ],
    'Angular': [
        {
            id: 1,
            title: 'Enterprise CRM System',
            description: 'Manage customer relationships, sales pipelines, and support tickets.',
            image: 'https://images.unsplash.com/photo-1588702517861-f095627a6e13?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Daniel Clark', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Olivia Martin', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Customer relationship management for businesses',
            tools: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'RxJS'],
            contact: { email: 'daniel.c@email.com', phone: '+1 (555) 111-2222', github: 'danielc-crm' }
        },
        {
            id: 2,
            title: 'Healthcare Patient Portal',
            description: 'Secure platform for patients to access records, schedule appointments, and communicate with doctors.',
            image: 'https://images.unsplash.com/photo-1551076805-e0d5885017d8?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Sophia Rodriguez', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
                { name: 'Michael Lee', role: 'Security Specialist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Secure patient communication and record access for healthcare providers',
            tools: ['Angular', 'NgRx', 'ASP.NET Core', 'SQL Server'],
            contact: { email: 'sophia.r@email.com', phone: '+1 (555) 333-4444', github: 'sophiar-health' }
        },
        {
            id: 3,
            title: 'Financial Dashboard',
            description: 'Track investments, analyze market trends, and manage personal finances.',
            image: 'https://images.unsplash.com/photo-1508214751196-eedc559868f7?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Liam Wilson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal finance management and investment tracking',
            tools: ['Angular', 'Chart.js', 'Node.js', 'MongoDB', 'Financial APIs'],
            contact: { email: 'liam.w@email.com', phone: '+1 (555) 555-6666', github: 'liamw-finance' }
        },
        {
            id: 4,
            title: 'Learning Management System (LMS)',
            description: 'Create and manage courses, enroll students, and track their progress.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Emma Taylor', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online education and course delivery platform',
            tools: ['Angular', 'Spring Boot', 'MySQL', 'JWT Authentication'],
            contact: { email: 'emma.t@email.com', phone: '+1 (555) 777-8888', github: 'emmat-lms' }
        },
        {
            id: 5,
            title: 'Real-time Chat Application',
            description: 'Instant messaging with private and group conversations, and media sharing.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Noah Green', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Chloe Hall', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Secure and real-time communication platform',
            tools: ['Angular', 'Socket.IO', 'Node.js', 'MongoDB'],
            contact: { email: 'noah.g@email.com', phone: '+1 (555) 999-0000', github: 'noahg-chat' }
        },
        {
            id: 6,
            title: 'E-commerce Admin Panel',
            description: 'Manage products, orders, customers, and analytics for an online store.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Olivia Scott', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Backend administration for e-commerce websites',
            tools: ['Angular', 'Material Design', 'Node.js', 'PostgreSQL'],
            contact: { email: 'olivia.s@email.com', phone: '+1 (555) 123-4567', github: 'olivia-admin' }
        },
        {
            id: 7,
            title: 'Document Management System',
            description: 'Upload, organize, search, and share documents securely.',
            image: 'https://images.unsplash.com/photo-1507925921958-8a8b13c32b5d?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Ethan Evans', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Secure document storage and sharing for enterprises',
            tools: ['Angular', 'Node.js', 'AWS S3', 'Elasticsearch'],
            contact: { email: 'ethan.e@email.com', phone: '+1 (555) 234-5678', github: 'ethane-dms' }
        },
        {
            id: 8,
            title: 'Booking & Appointment Scheduler',
            description: 'Allow clients to book services and manage appointments online.',
            image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Mia Harris', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online scheduling for service-based businesses',
            tools: ['Angular', 'Calendar API', '.NET Core', 'SQL Server'],
            contact: { email: 'mia.h@email.com', phone: '+1 (555) 345-6789', github: 'miah-booking' }
        },
        {
            id: 9,
            title: 'Project Tracking System',
            description: 'Monitor project progress, allocate resources, and track milestones.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Lucas Turner', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Project portfolio management and team collaboration',
            tools: ['Angular', 'Node.js', 'GraphQL', 'MySQL'],
            contact: { email: 'lucas.t@email.com', phone: '+1 (555) 456-7890', github: 'lucast-project' }
        },
        {
            id: 10,
            title: 'User Management Dashboard',
            description: 'Admin panel for managing users, roles, permissions, and auditing.',
            image: 'https://images.unsplash.com/photo-1588702517861-f095627a6e13?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Chloe Baker', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Daniel Adams', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Centralized user administration for web applications',
            tools: ['Angular', 'Firebase Authentication', 'Node.js', 'Firestore'],
            contact: { email: 'chloe.b@email.com', phone: '+1 (555) 567-8901', github: 'chloeb-users' }
        },
        {
            id: 11,
            title: 'Customer Support Ticketing System',
            description: 'Manage customer queries, assign tickets, and track resolution status.',
            image: 'https://images.unsplash.com/photo-1516397281156-b3378b273c52?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Emma White', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Streamlined customer service and issue tracking',
            tools: ['Angular', 'Node.js', 'MongoDB', 'Socket.IO'],
            contact: { email: 'emma.w@email.com', phone: '+1 (555) 678-9012', github: 'emmaw-support' }
        },
        {
            id: 12,
            title: 'Expense Management Portal',
            description: 'Submit, approve, and track employee expenses with reporting features.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'James Evans', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Corporate expense tracking and approval workflow',
            tools: ['Angular', 'Spring Boot', 'PostgreSQL', 'PDF Generation'],
            contact: { email: 'james.e@email.com', phone: '+1 (555) 789-0123', github: 'jamese-expenses' }
        },
        {
            id: 13,
            title: 'Fleet Management System',
            description: 'Monitor vehicle locations, fuel consumption, and maintenance schedules.',
            image: 'https://images.unsplash.com/photo-1568605117036-f2c9e779836c?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Sophie Rodriguez', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Logistics and transportation management',
            tools: ['Angular', 'Google Maps API', 'Node.js', 'MongoDB'],
            contact: { email: 'sophie.r@email.com', phone: '+1 (555) 890-1234', github: 'sophier-fleet' }
        },
        {
            id: 14,
            title: 'Inventory & Stock Management',
            description: 'Track product quantities, manage suppliers, and automate reordering.',
            image: 'https://images.unsplash.com/photo-1560473926-d18b631988b4?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Oliver Martin', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Warehouse and retail inventory control',
            tools: ['Angular', 'NestJS', 'PostgreSQL', 'Barcode Scanner'],
            contact: { email: 'oliver.m@email.com', phone: '+1 (555) 012-3456', github: 'oliverm-inventory' }
        },
        {
            id: 15,
            title: 'Online Survey Builder',
            description: 'Create customizable surveys, collect responses, and analyze data.',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65d806fa?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Ava Davies', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Market research and feedback collection',
            tools: ['Angular', 'Node.js', 'MongoDB', 'Chart.js'],
            contact: { email: 'ava.d@email.com', phone: '+1 (555) 123-4567', github: 'avad-surveys' }
        },
        {
            id: 16,
            title: 'Property Management System',
            description: 'Manage rental properties, tenants, leases, and maintenance requests.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'William Smith', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Real estate and rental portfolio management',
            tools: ['Angular', 'Spring Boot', 'MySQL', 'Stripe API'],
            contact: { email: 'william.s@email.com', phone: '+1 (555) 234-5678', github: 'williams-property' }
        },
        {
            id: 17,
            title: 'Online Voting Platform',
            description: 'Secure and transparent online voting system for organizations.',
            image: 'https://images.unsplash.com/photo-1589998059174-878653f09a7e?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Charlotte Brown', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Digital voting for secure and accessible elections',
            tools: ['Angular', 'Node.js', 'Blockchain (optional)', 'Firebase'],
            contact: { email: 'charlotte.b@email.com', phone: '+1 (555) 345-6789', github: 'charlotteb-vote' }
        },
        {
            id: 18,
            title: 'Restaurant Management System',
            description: 'Manage tables, orders, menus, and staff for restaurants.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Jacob Wilson', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Point-of-sale and backend management for eateries',
            tools: ['Angular', 'Node.js', 'MongoDB', 'Socket.IO'],
            contact: { email: 'jacob.w@email.com', phone: '+1 (555) 456-7890', github: 'jacobw-restaurant' }
        },
        {
            id: 19,
            title: 'Medical Clinic Management',
            description: 'Manage patient appointments, medical records, and billing.',
            image: 'https://images.unsplash.com/photo-1551076805-e0d5885017d8?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Lily Chen', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Healthcare practice management',
            tools: ['Angular', 'ASP.NET Core', 'SQL Server', 'HL7 Integration'],
            contact: { email: 'lily.c@email.com', phone: '+1 (555) 567-8901', github: 'lilyc-clinic' }
        },
        {
            id: 20,
            title: 'Dashboard for IOT Devices',
            description: 'Monitor and control Internet of Things devices in real-time.',
            image: 'https://images.unsplash.com/photo-1616893605809-f64f89f2b8f8?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Max Taylor', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Remote monitoring and control of connected devices',
            tools: ['Angular', 'Node.js', 'MQTT', 'InfluxDB'],
            contact: { email: 'max.t@email.com', phone: '+1 (555) 678-9012', github: 'maxt-iot' }
        }
    ],
    'Node.js': [
        {
            id: 1,
            title: 'API Gateway & Microservices',
            description: 'Scalable backend infrastructure for multiple frontend applications.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'David Lee', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Sarah Chen', role: 'DevOps Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Building robust and scalable backend systems',
            tools: ['Node.js', 'Express.js', 'Kubernetes', 'Docker', 'MongoDB'],
            contact: { email: 'david.l@email.com', phone: '+1 (555) 111-2222', github: 'davidl-api' }
        },
        {
            id: 2,
            title: 'Real-time Analytics Backend',
            description: 'Process and analyze large streams of data for live dashboards.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Alex Johnson', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Real-time data processing and analytics',
            tools: ['Node.js', 'Kafka', 'Elasticsearch', 'Kibana'],
            contact: { email: 'alex.j@email.com', phone: '+1 (555) 333-4444', github: 'alexj-analytics' }
        },
        {
            id: 3,
            title: 'User Authentication Service',
            description: 'Secure and customizable authentication and authorization API.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Maria Garcia', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Centralized authentication for multiple applications',
            tools: ['Node.js', 'Express.js', 'Passport.js', 'JWT', 'PostgreSQL'],
            contact: { email: 'maria.g@email.com', phone: '+1 (555) 555-6666', github: 'mariag-auth' }
        },
        {
            id: 4,
            title: 'E-commerce Backend API',
            description: 'Robust API for product management, orders, carts, and payments.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Chris Wilson', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Backend services for online retail stores',
            tools: ['Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'GraphQL'],
            contact: { email: 'chris.w@email.com', phone: '+1 (555) 777-8888', github: 'chrisw-ecommerce' }
        },
        {
            id: 5,
            title: 'Content Management System (CMS) API',
            description: 'Headless CMS backend for managing content across various platforms.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Jessica Taylor', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Centralized content management for web and mobile apps',
            tools: ['Node.js', 'Strapi', 'PostgreSQL', 'AWS S3'],
            contact: { email: 'jessica.t@email.com', phone: '+1 (555) 999-0000', github: 'jessicat-cms' }
        },
        {
            id: 6,
            title: 'Notification Service',
            description: 'Send real-time notifications via email, SMS, and push notifications.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Kevin Brown', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated communication for user engagement',
            tools: ['Node.js', 'Socket.IO', 'Twilio', 'Nodemailer', 'Firebase Cloud Messaging'],
            contact: { email: 'kevin.b@email.com', phone: '+1 (555) 123-4567', github: 'kevinb-notify' }
        },
        {
            id: 7,
            title: 'Image Processing API',
            description: 'Backend service for image uploads, resizing, and transformations.',
            image: 'https://images.unsplash.com/photo-1542435503-92f725350c18?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Laura Miller', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'On-demand image manipulation for web applications',
            tools: ['Node.js', 'Sharp', 'Multer', 'AWS S3'],
            contact: { email: 'laura.m@email.com', phone: '+1 (555) 234-5678', github: 'lauram-imgproc' }
        },
        {
            id: 8,
            title: 'File Storage & Sharing Service',
            description: 'Secure cloud storage with file uploading, sharing, and versioning.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Paul Davis', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Cloud storage and collaboration for teams',
            tools: ['Node.js', 'Express.js', 'GridFS', 'MongoDB', 'Socket.IO'],
            contact: { email: 'paul.d@email.com', phone: '+1 (555) 345-6789', github: 'pauld-filestorage' }
        },
        {
            id: 9,
            title: 'Queue Management System',
            description: 'Manage tasks and jobs in a distributed system with message queues.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Samantha Clark', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Asynchronous task processing and workflow management',
            tools: ['Node.js', 'RabbitMQ', 'Redis', 'BullMQ'],
            contact: { email: 'samantha.c@email.com', phone: '+1 (555) 456-7890', github: 'samanthac-queue' }
        },
        {
            id: 10,
            title: 'IoT Data Ingestion Platform',
            description: 'Collect, process, and store data from various IoT devices.',
            image: 'https://images.unsplash.com/photo-1616893605809-f64f89f2b8f8?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Tom Harris', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Backend for smart home and industrial IoT solutions',
            tools: ['Node.js', 'MQTT', 'Kafka', 'InfluxDB', 'Grafana'],
            contact: { email: 'tom.h@email.com', phone: '+1 (555) 567-8901', github: 'tomh-iot' }
        },
        {
            id: 11,
            title: 'Payment Gateway Integration',
            description: 'API for processing payments with various providers (Stripe, PayPal, etc.).',
            image: 'https://images.unsplash.com/photo-1579547621113-e408544d6731?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Victor Green', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Centralized payment processing for web and mobile applications',
            tools: ['Node.js', 'Stripe API', 'PayPal API', 'Webhooks'],
            contact: { email: 'victor.g@email.com', phone: '+1 (555) 678-9012', github: 'victorg-payments' }
        },
        {
            id: 12,
            title: 'Email Automation Service',
            description: 'Automate sending transactional and marketing emails.',
            image: 'https://images.unsplash.com/photo-1543286386-71d532f22384?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Wendy Hall', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated email communication for user engagement and marketing',
            tools: ['Node.js', 'Nodemailer', 'SendGrid API', 'Cron Jobs'],
            contact: { email: 'wendy.h@email.com', phone: '+1 (555) 789-0123', github: 'wendyh-email' }
        },
        {
            id: 13,
            title: 'Geolocation API Service',
            description: 'Provide location-based services, geocoding, and reverse geocoding.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Xavier Kim', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Location-aware features for web and mobile applications',
            tools: ['Node.js', 'Express.js', 'Google Maps API', 'PostGIS'],
            contact: { email: 'xavier.k@email.com', phone: '+1 (555) 890-1234', github: 'xavierk-geo' }
        },
        {
            id: 14,
            title: 'Data Scraping Service',
            description: 'Extract data from websites for business intelligence or research.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Yara Lee', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated data collection from the web',
            tools: ['Node.js', 'Cheerio', 'Puppeteer', 'Cron Jobs'],
            contact: { email: 'yara.l@email.com', phone: '+1 (555) 012-3456', github: 'yaral-scraper' }
        },
        {
            id: 15,
            title: 'Video Streaming Backend',
            description: 'Backend infrastructure for live and on-demand video streaming.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Zack Evans', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Backend support for video platforms',
            tools: ['Node.js', 'FFmpeg', 'AWS S3', 'HLS'],
            contact: { email: 'zack.e@email.com', phone: '+1 (555) 123-4567', github: 'zacke-video' }
        },
        {
            id: 16,
            title: 'Serverless Function API',
            description: 'Scalable and cost-effective API using serverless functions.',
            image: 'https://images.unsplash.com/photo-1616893605809-f64f89f2b8f8?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Alice White', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Event-driven and highly scalable microservices',
            tools: ['Node.js', 'AWS Lambda', 'API Gateway', 'DynamoDB'],
            contact: { email: 'alice.w@email.com', phone: '+1 (555) 234-5678', github: 'alicew-serverless' }
        },
        {
            id: 17,
            title: 'GraphQL API for Blog',
            description: 'Flexible and efficient API for content-rich applications.',
            image: 'https://images.unsplash.com/photo-1457460866-bd0d65b1cd56?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Bob Johnson', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Modern API for dynamic content delivery',
            tools: ['Node.js', 'Apollo Server', 'GraphQL', 'MongoDB'],
            contact: { email: 'bob.j@email.com', phone: '+1 (555) 345-6789', github: 'bobj-graphql' }
        },
        {
            id: 18,
            title: 'Chatbot Backend',
            description: 'Intelligent backend for conversational AI agents.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Charlie Brown', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated customer service and virtual assistants',
            tools: ['Node.js', 'Dialogflow', 'Webhooks', 'Firebase'],
            contact: { email: 'charlie.b@email.com', phone: '+1 (555) 456-7890', github: 'charlieb-chatbot' }
        },
        {
            id: 19,
            title: 'CSV/Excel Export Service',
            description: 'Generate and export data into various file formats.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Diana Green', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Reporting and data integration for business applications',
            tools: ['Node.js', 'csv-parser', 'xlsx', 'Express.js'],
            contact: { email: 'diana.g@email.com', phone: '+1 (555) 567-8901', github: 'dianag-export' }
        },
        {
            id: 20,
            title: 'Web Scraping Microservice',
            description: 'Dedicated service for scraping specific website data regularly.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Eve Black', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated data acquisition for market research and competitive analysis',
            tools: ['Node.js', 'Cheerio', 'Puppeteer', 'Cron Jobs', 'Redis'],
            contact: { email: 'eve.b@email.com', phone: '+1 (555) 678-9012', github: 'eveb-scraper' }
        }
    ],
    'Python': [
        {
            id: 1,
            title: 'AI-Powered Chatbot',
            description: 'Intelligent conversational agent for customer support and lead generation.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Dr. Anya Sharma', role: 'AI/ML Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' },
                { name: 'Ben Carter', role: 'Backend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated customer service and virtual assistants',
            tools: ['Python', 'TensorFlow', 'Keras', 'Flask', 'NLTK'],
            contact: { email: 'anya.s@email.com', phone: '+1 (555) 111-2222', github: 'anyas-ai' }
        },
        {
            id: 2,
            title: 'Machine Learning Model Deployment API',
            description: 'REST API to serve trained machine learning models for predictions.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Dr. Chen Wei', role: 'Data Scientist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Integrating AI models into production applications',
            tools: ['Python', 'Flask', 'Scikit-learn', 'Docker', 'AWS SageMaker'],
            contact: { email: 'chen.w@email.com', phone: '+1 (555) 333-4444', github: 'chenw-mlops' }
        },
        {
            id: 3,
            title: 'Automated Data Analysis Pipeline',
            description: 'End-to-end pipeline for data extraction, cleaning, analysis, and reporting.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Dr. Emily Turner', role: 'Data Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated business intelligence and data insights',
            tools: ['Python', 'Pandas', 'NumPy', 'Airflow', 'SQLAlchemy'],
            contact: { email: 'emily.t@email.com', phone: '+1 (555) 555-6666', github: 'emilyt-data' }
        },
        {
            id: 4,
            title: 'Web Scraper for E-commerce Prices',
            description: 'Extracts product data and prices from competitor websites for market analysis.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Frank Lee', role: 'Data Analyst', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Competitive pricing analysis for online businesses',
            tools: ['Python', 'BeautifulSoup', 'Scrapy', 'Selenium', 'PostgreSQL'],
            contact: { email: 'frank.l@email.com', phone: '+1 (555) 777-8888', github: 'frankl-scraper' }
        },
        {
            id: 5,
            title: 'Sentiment Analysis Tool',
            description: 'Analyzes text data to determine sentiment (positive, negative, neutral).',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Grace Wilson', role: 'NLP Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Customer feedback analysis and social media monitoring',
            tools: ['Python', 'NLTK', 'TextBlob', 'Flask', 'Docker'],
            contact: { email: 'grace.w@email.com', phone: '+1 (555) 999-0000', github: 'gracew-sentiment' }
        },
        {
            id: 6,
            title: 'Image Classification System',
            description: 'Identifies objects in images using deep learning models.',
            image: 'https://images.unsplash.com/photo-1542435503-92f725350c18?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Harry Potter', role: 'Computer Vision Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated image tagging and content moderation',
            tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'FastAPI'],
            contact: { email: 'harry.p@email.com', phone: '+1 (555) 123-4567', github: 'harryp-imageai' }
        },
        {
            id: 7,
            title: 'Recommendation Engine',
            description: 'Suggests personalized items to users based on their preferences and behavior.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Isabella Garcia', role: 'Machine Learning Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personalized product/content recommendations for e-commerce and media',
            tools: ['Python', 'Pandas', 'Surprise', 'Flask', 'Redis'],
            contact: { email: 'isabella.g@email.com', phone: '+1 (555) 234-5678', github: 'isabellag-reco' }
        },
        {
            id: 8,
            title: 'Fraud Detection System',
            description: 'Identifies suspicious transactions using machine learning algorithms.',
            image: 'https://images.unsplash.com/photo-1579547621113-e408544d6731?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Jack Taylor', role: 'Data Scientist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Real-time fraud prevention for financial institutions',
            tools: ['Python', 'Scikit-learn', 'XGBoost', 'Kafka', 'PostgreSQL'],
            contact: { email: 'jack.t@email.com', phone: '+1 (555) 345-6789', github: 'jackt-fraud' }
        },
        {
            id: 9,
            title: 'Automated Reporting Tool',
            description: 'Generates customizable reports from various data sources on a schedule.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Karen Lee', role: 'Python Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated business reporting and analytics',
            tools: ['Python', 'Pandas', 'Jinja2', 'APScheduler', 'SMTP'],
            contact: { email: 'karen.l@email.com', phone: '+1 (555) 456-7890', github: 'karenl-reports' }
        },
        {
            id: 10,
            title: 'Web Application Vulnerability Scanner',
            description: 'Identifies common security vulnerabilities in web applications.',
            image: 'https://images.unsplash.com/photo-1588702517861-f095627a6e13?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Leo Chen', role: 'Security Researcher', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated security testing for web applications',
            tools: ['Python', 'Scapy', 'Requests', 'OWASP ZAP (integration)'],
            contact: { email: 'leo.c@email.com', phone: '+1 (555) 567-8901', github: 'leoc-vulnscan' }
        },
        {
            id: 11,
            title: 'Natural Language Processing (NLP) Toolkit',
            description: 'A suite of tools for text analysis, entity recognition, and summarization.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Mia Davis', role: 'NLP Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Advanced text analysis for research and business applications',
            tools: ['Python', 'SpaCy', 'NLTK', 'Transformers'],
            contact: { email: 'mia.d@email.com', phone: '+1 (555) 678-9012', github: 'miad-nlp' }
        },
        {
            id: 12,
            title: 'Predictive Maintenance System',
            description: 'Predicts equipment failures using sensor data and machine learning.',
            image: 'https://images.unsplash.com/photo-1616893605809-f64f89f2b8f8?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Noah Adams', role: 'Data Scientist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Optimized maintenance schedules for industrial equipment',
            tools: ['Python', 'Pandas', 'Scikit-learn', 'InfluxDB', 'TensorFlow'],
            contact: { email: 'noah.a@email.com', phone: '+1 (555) 789-0123', github: 'noaha-predictive' }
        },
        {
            id: 13,
            title: 'Automated Image Tagging',
            description: 'Automatically tags images with relevant keywords using computer vision.',
            image: 'https://images.unsplash.com/photo-1542435503-92f725350c18?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Oliver King', role: 'Computer Vision Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Efficient image organization and search for digital asset management',
            tools: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'Faiss'],
            contact: { email: 'oliver.k@email.com', phone: '+1 (555) 890-1234', github: 'oliverk-imagetag' }
        },
        {
            id: 14,
            title: 'Financial Market Prediction Model',
            description: 'Predicts stock prices and market trends using time series data and ML.',
            image: 'https://images.unsplash.com/photo-1508214751196-eedc559868f7?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Penelope Scott', role: 'Quantitative Analyst', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Algorithmic trading and investment strategy',
            tools: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'Prophet'],
            contact: { email: 'penelope.s@email.com', phone: '+1 (555) 012-3456', github: 'penelopes-finance' }
        },
        {
            id: 15,
            title: 'Personalized Learning Path Generator',
            description: 'Creates customized learning paths based on user skills and goals.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Quinn Taylor', role: 'AI in Education Specialist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Adaptive learning and skill development platforms',
            tools: ['Python', 'NetworkX', 'Scikit-learn', 'Django'],
            contact: { email: 'quinn.t@email.com', phone: '+1 (555) 123-4567', github: 'quinnt-learning' }
        },
        {
            id: 16,
            title: 'Automated PDF Report Generator',
            description: 'Converts data into well-formatted PDF reports.',
            image: 'https://images.unsplash.com/photo-1507925921958-8a8b13c32b5d?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Rachel Green', role: 'Python Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated document generation for business and finance',
            tools: ['Python', 'ReportLab', 'Pandas', 'Flask'],
            contact: { email: 'rachel.g@email.com', phone: '+1 (555) 234-5678', github: 'rachelg-pdf' }
        },
        {
            id: 17,
            title: 'Smart City Traffic Prediction',
            description: 'Predicts traffic congestion using real-time sensor data and ML.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Sam Turner', role: 'Urban Data Scientist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Optimized urban planning and smart transportation systems',
            tools: ['Python', 'TensorFlow', 'Keras', 'Kafka', 'PostGIS'],
            contact: { email: 'sam.t@email.com', phone: '+1 (555) 345-6789', github: 'samt-traffic' }
        },
        {
            id: 18,
            title: 'Voice Assistant Backend',
            description: 'Backend logic for a custom voice assistant application.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Tina Brown', role: 'Voice AI Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Custom voice-activated devices and applications',
            tools: ['Python', 'Flask', 'SpeechRecognition', 'gTTS', 'Dialogflow'],
            contact: { email: 'tina.b@email.com', phone: '+1 (555) 456-7890', github: 'tinab-voiceai' }
        },
        {
            id: 19,
            title: 'Custom CRM with AI Insights',
            description: 'CRM system enhanced with AI-powered sales predictions and customer insights.',
            image: 'https://images.unsplash.com/photo-1588702517861-f095627a6e13?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Uma Krishnan', role: 'CRM Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
                { name: 'Vivek Singh', role: 'AI Specialist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Enhanced customer relationship management with predictive analytics',
            tools: ['Python', 'Django', 'PostgreSQL', 'Scikit-learn', 'Salesforce API'],
            contact: { email: 'uma.k@email.com', phone: '+1 (555) 567-8901', github: 'umak-crmai' }
        },
        {
            id: 20,
            title: 'Automated Stock Trading Bot',
            description: 'Executes trades automatically based on predefined strategies and market data.',
            image: 'https://images.unsplash.com/photo-1621360172102-1a42f65a12a7?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Walter White', role: 'Algorithmic Trader', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated investment and trading strategies',
            tools: ['Python', 'Pandas', 'NumPy', 'Alpaca API', 'Backtrader'],
            contact: { email: 'walter.w@email.com', phone: '+1 (555) 678-9012', github: 'walterw-trading' }
        }
    ],
    'JavaScript': [
        {
            id: 1,
            title: 'Interactive Web Portfolio',
            description: 'Showcase projects and skills with stunning animations and responsiveness.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Alex Johnson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal online resume and project showcase',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Figma'],
            contact: { email: 'alex.j@email.com', phone: '+1 (555) 111-2222', github: 'alexj-portfolio' }
        },
        {
            id: 2,
            title: 'Dynamic Quiz Application',
            description: 'Create and take engaging quizzes with scoring and progress tracking.',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65d806fa?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Sarah Kim', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Educational assessments and interactive learning',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'JSON'],
            contact: { email: 'sarah.k@email.com', phone: '+1 (555) 333-4444', github: 'sarahk-quiz' }
        },
        {
            id: 3,
            title: 'Interactive To-Do List with Drag & Drop',
            description: 'Manage tasks efficiently with drag-and-drop functionality and local storage.',
            image: 'https://images.unsplash.com/photo-1457460866-bd0d65b1cd56?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Mike Brown', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal productivity and task management',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'localStorage API'],
            contact: { email: 'mike.b@email.com', phone: '+1 (555) 555-6666', github: 'mikeb-todo' }
        },
        {
            id: 4,
            title: 'Weather Dashboard Application',
            description: 'Displays current weather and 5-day forecast for any city using a public API.',
            image: 'https://images.unsplash.com/photo-1501712217627-e4354c4e723d?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Emily Wilson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Daily weather updates and travel planning',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
            contact: { email: 'emily.w@email.com', phone: '+1 (555) 777-8888', github: 'emilyw-weather' }
        },
        {
            id: 5,
            title: 'JavaScript Game: Space Invaders Clone',
            description: 'A classic arcade game rebuilt using pure JavaScript and HTML Canvas.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'David Lee', role: 'Game Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Showcasing game development skills and logic',
            tools: ['HTML Canvas', 'JavaScript', 'CSS3'],
            contact: { email: 'david.l@email.com', phone: '+1 (555) 999-0000', github: 'davidl-game' }
        },
        {
            id: 6,
            title: 'Recipe Search Application',
            description: 'Search for recipes by ingredients, dietary preferences, and cuisines.',
            image: 'https://images.unsplash.com/photo-1504712879367-ee6a67f70b4a?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Laura Garcia', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Meal planning and culinary inspiration',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'Edamam API'],
            contact: { email: 'laura.g@email.com', phone: '+1 (555) 123-4567', github: 'laurag-recipes' }
        },
        {
            id: 7,
            title: 'Image Gallery with Lightbox',
            description: 'Responsive image gallery with smooth lightbox transitions.',
            image: 'https://images.unsplash.com/photo-1542435503-92f725350c18?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Kevin Brown', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Displaying image collections for photographers and designers',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'Intersection Observer API'],
            contact: { email: 'kevin.b@email.com', phone: '+1 (555) 234-5678', github: 'kevinb-gallery' }
        },
        {
            id: 8,
            title: 'Simple Calculator App',
            description: 'A fully functional calculator with basic arithmetic operations.',
            image: 'https://images.unsplash.com/photo-1607597116812-d9616d6101c7?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Jessica Davis', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Basic calculation tool for everyday use',
            tools: ['HTML5', 'CSS3', 'JavaScript'],
            contact: { email: 'jessica.d@email.com', phone: '+1 (555) 345-6789', github: 'jessicad-calc' }
        },
        {
            id: 9,
            title: 'Sticky Notes Application',
            description: 'Create, edit, and manage virtual sticky notes on a web page.',
            image: 'https://images.unsplash.com/photo-1457460866-bd0d65b1cd56?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Chris Evans', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Quick note-taking and reminders',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'localStorage API'],
            contact: { email: 'chris.e@email.com', phone: '+1 (555) 456-7890', github: 'chrise-notes' }
        },
        {
            id: 10,
            title: 'Countdown Timer / Stopwatch',
            description: 'Versatile timer application with countdown, stopwatch, and alarm features.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Olivia Martin', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Time management and productivity',
            tools: ['HTML5', 'CSS3', 'JavaScript'],
            contact: { email: 'olivia.m@email.com', phone: '+1 (555) 567-8901', github: 'oliviam-timer' }
        },
        {
            id: 11,
            title: 'Interactive Form Validation',
            description: 'Client-side form validation with real-time feedback for user input.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Robert Wilson', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Improving user experience in web forms',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'Regular Expressions'],
            contact: { email: 'robert.w@email.com', phone: '+1 (555) 678-9012', github: 'robertw-form' }
        },
        {
            id: 12,
            title: 'Dynamic Landing Page',
            description: 'A modern, animated landing page with responsive design.',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Sophia Miller', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Marketing and promotional websites',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'ScrollReveal.js'],
            contact: { email: 'sophia.m@email.com', phone: '+1 (555) 789-0123', github: 'sophiam-landing' }
        },
        {
            id: 13,
            title: 'Currency Converter with Live Rates',
            description: 'Convert between different currencies using up-to-date exchange rates.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'William Jones', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Travel and personal finance utility',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'ExchangeRate-API'],
            contact: { email: 'william.j@email.com', phone: '+1 (555) 890-1234', github: 'williamj-currency' }
        },
        {
            id: 14,
            title: 'Drawing Application (Canvas)',
            description: 'Draw and sketch freely on a web-based canvas.',
            image: 'https://images.unsplash.com/photo-1627993074744-8849b291d906?w=400&h=300&fit=crop',
            rating: 4.5,
            team: [
                { name: 'Ava Garcia', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Digital art and simple graphic design',
            tools: ['HTML Canvas', 'JavaScript', 'CSS3'],
            contact: { email: 'ava.g@email.com', phone: '+1 (555) 012-3456', github: 'avag-drawing' }
        },
        {
            id: 15,
            title: 'Interactive Slider / Carousel',
            description: 'A customizable image and content slider with navigation controls.',
            image: 'https://images.unsplash.com/photo-1542435503-92f725350c18?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Ethan Rodriguez', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Showcasing images or promotions on websites',
            tools: ['HTML5', 'CSS3', 'JavaScript'],
            contact: { email: 'ethan.r@email.com', phone: '+1 (555) 123-4567', github: 'ethanr-slider' }
        },
        {
            id: 16,
            title: 'Expense Tracker (Local Storage)',
            description: 'Track income and expenses, stored directly in the browser.',
            image: 'https://images.unsplash.com/photo-1551854371-4b13a525492d?w=400&h=300&fit=crop',
            rating: 4.4,
            team: [
                { name: 'Chloe Hall', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Personal budgeting and expense logging',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'localStorage API'],
            contact: { email: 'chloe.h@email.com', phone: '+1 (555) 234-5678', github: 'chloeh-expenses' }
        },
        {
            id: 17,
            title: 'Password Generator',
            description: 'Generates strong, random passwords with customizable criteria.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Daniel Scott', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Enhancing online security with strong passwords',
            tools: ['HTML5', 'CSS3', 'JavaScript'],
            contact: { email: 'daniel.s@email.com', phone: '+1 (555) 345-6789', github: 'daniels-passgen' }
        },
        {
            id: 18,
            title: 'Simple Music Player',
            description: 'A basic web-based music player with play, pause, and volume controls.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Mia King', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Basic audio playback on websites',
            tools: ['HTML5 Audio API', 'CSS3', 'JavaScript'],
            contact: { email: 'mia.k@email.com', phone: '+1 (555) 456-7890', github: 'miak-musicplayer' }
        },
        {
            id: 19,
            title: 'Color Flipper',
            description: 'Generates random background colors with hex code display.',
            image: 'https://images.unsplash.com/photo-1542435503-92f725350c18?w=400&h=300&fit=crop',
            rating: 4.3,
            team: [
                { name: 'Noah Green', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Learning and experimenting with CSS colors',
            tools: ['HTML5', 'CSS3', 'JavaScript'],
            contact: { email: 'noah.g@email.com', phone: '+1 (555) 567-8901', github: 'noahg-colorflipper' }
        },
        {
            id: 20,
            title: 'Analog Clock',
            description: 'A dynamic analog clock displaying real-time.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.4,
            team: [
                { name: 'Lily Brown', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Displaying current time in a classic format',
            tools: ['HTML5', 'CSS3', 'JavaScript'],
            contact: { email: 'lily.b@email.com', phone: '+1 (555) 678-9012', github: 'lilyb-analogclock' }
        }
    ],
    'TypeScript': [
        {
            id: 1,
            title: 'Scalable CRM Application',
            description: 'A robust CRM with advanced features for contact, lead, and deal management.',
            image: 'https://images.unsplash.com/photo-1588702517861-f095627a6e13?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Dr. John Doe', role: 'Lead Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
                { name: 'Jane Smith', role: 'Frontend Architect', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Enterprise-level customer relationship management',
            tools: ['TypeScript', 'Angular', 'NestJS', 'PostgreSQL', 'RxJS'],
            contact: { email: 'john.doe@email.com', phone: '+1 (555) 123-4567', github: 'johndoe-crm' }
        },
        {
            id: 2,
            title: 'Type-Safe API Backend with GraphQL',
            description: 'A GraphQL API providing strong type checking for both schema and resolvers.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Alice Wonderland', role: 'Backend Engineer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Building robust and self-documenting APIs',
            tools: ['TypeScript', 'Node.js', 'Apollo Server', 'TypeORM', 'GraphQL'],
            contact: { email: 'alice.w@email.com', phone: '+1 (555) 987-6543', github: 'alicew-graphql' }
        },
        {
            id: 3,
            title: 'Enterprise Dashboard with Data Visualization',
            description: 'Interactive and robust dashboard for complex data analytics and reporting.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Bob The Builder', role: 'Frontend Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Business intelligence and operational insights',
            tools: ['TypeScript', 'React', 'D3.js', 'Redux', 'Material-UI'],
            contact: { email: 'bob.b@email.com', phone: '+1 (555) 456-7890', github: 'bob-dashboard' }
        },
        {
            id: 4,
            title: 'Microservices Communication with gRPC',
            description: 'Building efficient inter-service communication using gRPC and Protocol Buffers.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Charlie Chaplin', role: 'Distributed Systems Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'High-performance communication for distributed applications',
            tools: ['TypeScript', 'Node.js', 'gRPC', 'Protocol Buffers', 'Docker'],
            contact: { email: 'charlie.c@email.com', phone: '+1 (555) 234-5678', github: 'charliec-grpc' }
        },
        {
            id: 5,
            title: 'Real-time Collaborative Whiteboard',
            description: 'A web-based whiteboard supporting real-time drawing and collaboration.',
            image: 'https://images.unsplash.com/photo-1627993074744-8849b291d906?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Diana Prince', role: 'Full Stack Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Online meetings and brainstorming sessions',
            tools: ['TypeScript', 'React', 'Socket.IO', 'Node.js', 'Konva.js'],
            contact: { email: 'diana.p@email.com', phone: '+1 (555) 345-6789', github: 'dianap-whiteboard' }
        },
        {
            id: 6,
            title: 'Type-Safe ORM for Database Interactions',
            description: 'An ORM providing strong typing for database queries and models.',
            image: 'https://images.unsplash.com/photo-1507925921958-8a8b13c32b5d?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Ethan Hunt', role: 'Backend Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Building reliable and maintainable database applications',
            tools: ['TypeScript', 'TypeORM', 'PostgreSQL', 'Node.js', 'Express.js'],
            contact: { email: 'ethan.h@email.com', phone: '+1 (555) 456-7890', github: 'ethanh-orm' }
        },
        {
            id: 7,
            title: 'WebAssembly (Wasm) Integration Example',
            description: 'Demonstrates integrating a high-performance Wasm module into a web app.',
            image: 'https://images.unsplash.com/photo-1542435503-92f725350c18?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'Fiona Apple', role: 'Web Performance Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Boosting web application performance for compute-intensive tasks',
            tools: ['TypeScript', 'WebAssembly', 'Rust/C++', 'Webpack'],
            contact: { email: 'fiona.a@email.com', phone: '+1 (555) 567-8901', github: 'fionaa-wasm' }
        },
        {
            id: 8,
            title: 'Automated Testing Framework for UI',
            description: 'A comprehensive framework for end-to-end UI testing of web applications.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'George Clooney', role: 'QA Automation Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Ensuring quality and reliability of web interfaces',
            tools: ['TypeScript', 'Playwright', 'Jest', 'CI/CD Pipelines'],
            contact: { email: 'george.c@email.com', phone: '+1 (555) 678-9012', github: 'georgec-qa' }
        },
        {
            id: 9,
            title: 'Real-time Stock Ticker Dashboard',
            description: 'Displays live stock prices and market data with interactive charts.',
            image: 'https://images.unsplash.com/photo-1621360172102-1a42f65a12a7?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Hannah Montana', role: 'FinTech Developer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Financial market monitoring and analysis',
            tools: ['TypeScript', 'React', 'Socket.IO', 'Node.js', 'Finnhub API'],
            contact: { email: 'hannah.m@email.com', phone: '+1 (555) 789-0123', github: 'hannahm-stocks' }
        },
        {
            id: 10,
            title: 'Secure File Upload & Storage System',
            description: 'A system for secure file uploads, encryption, and access control.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Indiana Jones', role: 'Security Architect', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Secure document management for sensitive data',
            tools: ['TypeScript', 'Node.js', 'AWS S3', 'KMS', 'Express.js'],
            contact: { email: 'indiana.j@email.com', phone: '+1 (555) 890-1234', github: 'indianaj-securefiles' }
        },
        {
            id: 11,
            title: 'Event-Driven Microservices Architecture',
            description: 'Demonstrates a scalable microservices setup using message queues.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Jack Sparrow', role: 'Backend Architect', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Building highly scalable and resilient distributed systems',
            tools: ['TypeScript', 'Node.js', 'Kafka', 'RabbitMQ', 'Docker'],
            contact: { email: 'jack.s@email.com', phone: '+1 (555) 012-3456', github: 'jacks-events' }
        },
        {
            id: 12,
            title: 'GraphQL Subscription Service',
            description: 'Real-time data updates using GraphQL subscriptions for live applications.',
            image: 'https://images.unsplash.com/photo-1510915367652-320498b8-b11b-4179-883a-d68a91a92d4f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Katniss Everdeen', role: 'Frontend Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Live data updates for chat apps, dashboards, and real-time feeds',
            tools: ['TypeScript', 'Apollo Client', 'Apollo Server', 'WebSockets'],
            contact: { email: 'katniss.e@email.com', phone: '+1 (555) 123-4567', github: 'katnisse-graphql' }
        },
        {
            id: 13,
            title: 'Automated Code Generation CLI',
            description: 'A command-line tool to scaffold new projects or components with best practices.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Luke Skywalker', role: 'Tooling Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Accelerating development workflow and enforcing code standards',
            tools: ['TypeScript', 'Node.js', 'Commander.js', 'Handlebars.js'],
            contact: { email: 'luke.s@email.com', phone: '+1 (555) 234-5678', github: 'lukes-codegen' }
        },
        {
            id: 14,
            title: 'Type-Safe State Management Library (Custom)',
            description: 'A custom state management solution built with TypeScript for large-scale apps.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Morpheus', role: 'Software Architect', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Predictable and maintainable state in complex web applications',
            tools: ['TypeScript', 'RxJS', 'React/Vue (integration example)'],
            contact: { email: 'morpheus@email.com', phone: '+1 (555) 345-6789', github: 'morpheus-state' }
        },
        {
            id: 15,
            title: 'WebRTC Video Conferencing Demo',
            description: 'A basic peer-to-peer video conferencing application using WebRTC.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Neo Anderson', role: 'Real-time Communication Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Integrating real-time video and audio into web applications',
            tools: ['TypeScript', 'WebRTC', 'Socket.IO', 'Node.js'],
            contact: { email: 'neo.a@email.com', phone: '+1 (555) 456-7890', github: 'neo-webrtc' }
        },
        {
            id: 16,
            title: 'Container Orchestration with Kubernetes API',
            description: 'Interacting with Kubernetes API using TypeScript for deployment automation.',
            image: 'https://images.unsplash.com/photo-1616893605809-f64f89f2b8f8?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Obi-Wan Kenobi', role: 'DevOps Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Automated infrastructure management and application deployment',
            tools: ['TypeScript', 'Node.js', 'Kubernetes API', 'kubectl'],
            contact: { email: 'obiwan.k@email.com', phone: '+1 (555) 567-8901', github: 'obiwan-kube' }
        },
        {
            id: 17,
            title: 'Server-Side Rendering (SSR) with Next.js & TypeScript',
            description: 'Building performant web applications with SSR for better SEO and user experience.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
            rating: 4.8,
            team: [
                { name: 'Princess Leia', role: 'Full Stack Engineer', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2a1?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Building modern web applications with enhanced performance',
            tools: ['TypeScript', 'Next.js', 'React', 'Styled Components'],
            contact: { email: 'leia.p@email.com', phone: '+1 (555) 678-9012', github: 'leia-ssr' }
        },
        {
            id: 18,
            title: 'WebSocket-based Notification System',
            description: 'A real-time notification system for web and mobile applications.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d491c529?w=400&h=300&fit=crop',
            rating: 4.7,
            team: [
                { name: 'Qui-Gon Jinn', role: 'Backend Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Instant user notifications for various application events',
            tools: ['TypeScript', 'Socket.IO', 'Node.js', 'Redis'],
            contact: { email: 'quigon.j@email.com', phone: '+1 (555) 789-0123', github: 'quigon-notify' }
        },
        {
            id: 19,
            title: 'Custom VS Code Extension',
            description: 'A simple VS Code extension providing helpful features for developers.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
            rating: 4.6,
            team: [
                { name: 'R2-D2', role: 'Developer Tools Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Enhancing developer productivity and workflow within VS Code',
            tools: ['TypeScript', 'Node.js', 'VS Code API'],
            contact: { email: 'r2d2@email.com', phone: '+1 (555) 890-1234', github: 'r2d2-vscode' }
        },
        {
            id: 20,
            title: 'Decentralized Application (dApp) Frontend',
            description: 'A frontend for interacting with smart contracts on a blockchain.',
            image: 'https://images.unsplash.com/photo-1621360172102-1a42f65a12a7?w=400&h=300&fit=crop',
            rating: 4.9,
            team: [
                { name: 'Satoshi Nakamoto', role: 'Blockchain Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
            ],
            useCase: 'Building blockchain-powered applications with secure interactions',
            tools: ['TypeScript', 'React', 'Web3.js', 'Ethereum', 'Smart Contracts'],
            contact: { email: 'satoshi.n@email.com', phone: '+1 (555) 012-3456', github: 'satoshi-dapp' }
        }
    ]
};

const welcomeSection = document.getElementById('welcomeSection');
const projectsSection = document.getElementById('projectsSection');
const projectsGrid = document.getElementById('projectsGrid');
const projectsTitle = document.getElementById('projectsTitle');
const techModal = document.getElementById('techModal');
const projectModal = document.getElementById('projectModal');
const projectTitle = document.getElementById('projectTitle');
const projectTech = document.getElementById('projectTech');
const projectRating = document.getElementById('projectRating');
const projectImage = document.getElementById('projectImage');
const projectDescription = document.getElementById('projectDescription');
const projectUseCase = document.getElementById('projectUseCase');
const projectTools = document.getElementById('projectTools');
const projectEmail = document.getElementById('projectEmail');
const projectPhone = document.getElementById('projectPhone');
const projectGithub = document.getElementById('projectGithub');
const teamMembersDiv = document.getElementById('teamMembers');

function openTechModal() {
    techModal.classList.add('show');
}

function closeTechModal() {
    techModal.classList.remove('show');
}

function openProjectModal() {
    projectModal.classList.add('show');
}

function closeProjectModal() {
    projectModal.classList.remove('show');
}

function showWelcome() {
    welcomeSection.style.display = 'block';
    projectsSection.style.display = 'none';
    projectsGrid.innerHTML = ''; // Clear projects when going back
}

function selectTechnology(tech) {
    closeTechModal();
    projectsTitle.textContent = `${tech} Projects`;
    projectsGrid.innerHTML = ''; // Clear previous projects
    welcomeSection.style.display = 'none';
    projectsSection.style.display = 'block';
    loadProjects(tech);
}

function loadProjects(technology) {
    const projects = projectsData[technology];
    if (projects) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.onclick = () => showProjectDetails(project);

            // Determine team display
            let teamAvatarsHtml = '';
            if (project.team.length > 0) {
                const visibleAvatars = project.team.slice(0, 3); // Show max 3 avatars
                visibleAvatars.forEach(member => {
                    teamAvatarsHtml += `<img src="${member.avatar}" alt="${member.name}" class="avatar">`;
                });
                if (project.team.length > 3) {
                    teamAvatarsHtml += `<div class="avatar-count">+${project.team.length - 3}</div>`;
                }
            }

            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <span class="tech-badge">${technology}</span>
                    <div class="rating">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                        </svg>
                        <span>${project.rating.toFixed(1)}</span>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-footer">
                        <div class="team-avatars">
                            ${teamAvatarsHtml}
                        </div>
                        <button class="connect-btn">Connect</button>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    } else {
        projectsGrid.innerHTML = '<p>No projects found for this technology.</p>';
    }
}

function showProjectDetails(project) {
    projectTitle.textContent = project.title;
    projectTech.textContent = getTechNameFromId(project.id); // Assuming you have a way to get tech name
    projectTech.textContent = projectTech.textContent; // Update tech badge
    
    // Set color of tech-badge based on data-color from modal tech-card
    const techCard = document.querySelector(`.tech-card[onclick*="selectTechnology('${getTechNameFromId(project.id)}')"]`);
    if (techCard) {
        projectTech.style.backgroundColor = techCard.dataset.color;
    } else {
        projectTech.style.backgroundColor = '#6c11b6'; // Default if not found
    }

    projectRating.textContent = project.rating.toFixed(1);
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectDescription.textContent = project.description;
    projectUseCase.textContent = project.useCase;

    projectTools.innerHTML = '';
    project.tools.forEach(tool => {
        const toolTag = document.createElement('span');
        toolTag.classList.add('tool-tag');
        toolTag.textContent = tool;
        projectTools.appendChild(toolTag);
    });

    projectEmail.textContent = project.contact.email;
    projectPhone.textContent = project.contact.phone;
    projectGithub.textContent = project.contact.github;

    teamMembersDiv.innerHTML = '';
    project.team.forEach(member => {
        const teamMemberDiv = document.createElement('div');
        teamMemberDiv.classList.add('team-member');
        teamMemberDiv.innerHTML = `
            <img src="${member.avatar}" alt="${member.name}">
            <div class="member-info">
                <h5>${member.name}</h5>
                <p>${member.role}</p>
            </div>
        `;
        teamMembersDiv.appendChild(teamMemberDiv);
    });

    openProjectModal();
}

// Helper to get tech name from project ID (this is a simplified example)
// In a real application, you'd likely pass the tech name along with the project object
function getTechNameFromId(projectId) {
    for (const tech in projectsData) {
        if (projectsData[tech].some(project => project.id === projectId)) {
            return tech;
        }
        
    }
    return 'Unknown'; // Default if tech not found
}