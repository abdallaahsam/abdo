const siteData = {
    skills: [
        { name: "Photoshop", icon: "ri-image-edit-line", color: "primary" },
        { name: "HTML & CSS", icon: "ri-code-s-slash-line", color: "secondary" },
        { name: "Microsoft Office", icon: "ri-file-word-line", color: "accent" },
        { name: "Teamwork", icon: "ri-team-line", color: "primary" },
        { name: "Communication", icon: "ri-chat-3-line", color: "secondary" },
        { name: "Problem-Solving", icon: "ri-lightbulb-line", color: "accent" },
        { name: "Research", icon: "ri-search-line", color: "primary" },
        { name: "Adaptability", icon: "ri-refresh-line", color: "secondary" }
    ],
    experience: [
        {
            title: "Education",
            icon: "ri-checkbox-circle-fill",
            items: [
                "Faculty of Commerce – Ain Shams University (Arabic section)",
                "2023–2028"
            ]
        },
        {
            title: "Training & Courses",
            icon: "ri-checkbox-circle-fill",
            items: [
                "Graphic Design Course at First Step (Jan–May 2023)"
            ]
        },
        {
            title: "Organizations",
            icon: "ri-checkbox-circle-fill",
            items: [
                "AIBE – Marketing Team",
                "Project X – Entrepreneurship",
                "YLY Cairo – Social Media Committee"
            ]
        },
        {
            title: "Volunteer Work",
            icon: "ri-checkbox-circle-fill",
            items: [
                "Life Makers Foundation (Social Media Committee)",
                "Resala Foundation – Maadi branch (6 months training)",
                "Hayah Karima initiative – Dar Al Salam"
            ]
        }
    ],
    services: [
        {
            title: "Social Media Designs",
            icon: "ri-instagram-line",
            color: "primary",
            desc: "Eye-catching posts, stories, and cover designs for Instagram, Facebook, and LinkedIn that boost engagement and brand visibility.",
            features: ["Post Designs", "Story Templates", "Cover Images", "Ad Creatives"]
        },
        {
            title: "Branding Basics",
            icon: "ri-palette-line",
            color: "secondary",
            desc: "Professional logo design, color palettes, and brand identity elements that make your business stand out.",
            features: ["Logo Design", "Color Schemes", "Brand Guidelines", "Business Cards"]
        },
        {
            title: "Front-End Landing Pages",
            icon: "ri-code-s-slash-line",
            color: "primary",
            desc: "Responsive, pixel-perfect landing pages built with HTML and CSS that convert visitors into customers.",
            features: ["Responsive Design", "Clean Code", "Fast Loading", "Cross-Browser"]
        },
        {
            title: "Corporate Presentations",
            icon: "ri-presentation-line",
            color: "secondary",
            desc: "Professional PowerPoint and presentation designs with compelling visuals and clear data visualization.",
            features: ["Slide Design", "Infographics", "Charts & Graphs", "Templates"]
        },
        {
            title: "Custom Graphics",
            icon: "ri-pencil-ruler-2-line",
            color: "accent",
            desc: "Tailored graphic design solutions for any project including posters, flyers, banners, and digital assets.",
            features: ["Posters", "Flyers", "Banners", "Digital Assets"]
        }
    ],
    portfolio: [
        {
            title: "Brand Identity Design",
            category: "graphic-design",
            image: "./assets/images/project-brand-identity.jpg",
            desc: "Complete brand identity package including logo, color palette, and brand guidelines for a modern tech startup.",
            longDescription: "A comprehensive brand identity project for TechFlow, a rising startup in the AI sector. The project involved deep market research to create a logo that embodies innovation and reliability. Deliverables included a full brand book, stationery design, and digital assets.",
            client: "TechFlow Startup",
            year: "2024",
            link: "#",
            tags: ["Branding", "Logo Design", "Identity", "Illustrator"]
        },
        {
            title: "Social Media Campaign",
            category: "graphic-design",
            image: "./assets/images/project-social-media.jpg",
            desc: "Eye-catching social media graphics for Instagram and Facebook marketing campaign with consistent visual theme.",
            longDescription: "A high-engagement social media campaign for a fashion retailer. The goal was to increase brand awareness and drive sales through visually striking posts and stories. The campaign resulted in a 40% increase in engagement over 3 months.",
            client: "Fashion Nova",
            year: "2023",
            link: "#",
            tags: ["Social Media", "Marketing", "Graphics", "Photoshop"]
        },
        {
            title: "Corporate Presentation",
            category: "graphic-design",
            image: "./assets/images/project-presentation.jpg",
            desc: "Professional PowerPoint presentation design with modern layouts, infographics, and data visualization.",
            longDescription: "Designed a pitch deck for a Series A funding round. The focus was on clarity and impact, transforming complex data into easy-to-understand infographics and clean slides. The client successfully secured funding.",
            client: "Global Corp",
            year: "2024",
            link: "#",
            tags: ["Presentation", "Corporate", "Infographics", "PowerPoint"]
        },
        {
            title: "Restaurant Landing Page",
            category: "front-end",
            image: "./assets/images/project-restaurant.jpg",
            desc: "Responsive landing page for a restaurant with menu showcase, reservation system, and elegant animations.",
            longDescription: "A delicious digital experience for La Piazza. This responsive landing page features a mouth-watering hero section, a filterable menu, and a seamless table reservation form. Built with semantic HTML5 and modern CSS3.",
            client: "La Piazza",
            year: "2024",
            link: "#",
            tags: ["HTML", "CSS", "Responsive", "JavaScript"]
        },
        {
            title: "Portfolio Website",
            category: "front-end",
            image: "./assets/images/project-portfolio.jpg",
            desc: "Personal portfolio website with smooth animations, dark mode, and interactive project gallery.",
            longDescription: "My own personal portfolio, showcasing my journey as a designer and developer. It features a custom dark mode, performant animations using AOS, and a dynamic project filtering system. It serves as a playground for my latest frontend experiments.",
            client: "Personal Project",
            year: "2025",
            link: "#",
            tags: ["Portfolio", "Animation", "Dark Mode", "Tailwind"]
        },
        {
            title: "E-commerce Product Page",
            category: "front-end",
            image: "./assets/images/project-ecommerce.jpg",
            desc: "Product detail page with image gallery, size selector, and add to cart functionality.",
            longDescription: "A high-conversion product page template. Key features include an interactive image gallery, color/size selection logic, and a sticky 'Add to Cart' bar for mobile users. Optimized for speed and accessibility.",
            client: "Shopify Store",
            year: "2023",
            link: "#",
            tags: ["E-commerce", "UI/UX", "Interactive", "JavaScript"]
        },
        {
            title: "Event Poster Design",
            category: "graphic-design",
            image: "./assets/images/project-poster.jpg",
            desc: "Creative poster design for university event with bold typography and vibrant color scheme.",
            longDescription: "Promotional material for the Annual Arts Festival. The design uses bold typography and a vibrant color palette to capture the energy of the event. Printed in various sizes and adapted for social media headers.",
            client: "University Arts Club",
            year: "2023",
            link: "#",
            tags: ["Poster", "Event", "Typography", "Print Design"]
        },
        {
            title: "Business Dashboard",
            category: "front-end",
            image: "./assets/images/project-dashboard.jpg",
            desc: "Admin dashboard interface with charts, data tables, and responsive sidebar navigation.",
            longDescription: "A clean and intuitive admin dashboard UI. It visualizes key business metrics using charts (Chart.js) and includes sortable data tables. The sidebar navigation is fully responsive, collapsing gracefully on smaller screens.",
            client: "SaaS Analytics",
            year: "2024",
            link: "#",
            tags: ["Dashboard", "Data Viz", "Admin", "Chart.js"]
        }
    ],
    testimonials: [
        {
            name: "Mohamed farmawy",
            role: "Graphic Designer",
            company: "Ottroja CO",
            image: "./assets/images/testimonial-mohamed.jpg",
            color: "primary",
            quote: "Abdullah is a quick and easy person who can handle anything and is proficient in multiple skills, and I was happy to work with him."
        },
        {
            name: "Sara Mohamed",
            role: "Startup Founder",
            company: "GreenTech Innovations",
            image: "./assets/images/testimonial-sara.jpg",
            color: "secondary",
            quote: "The brand identity package was exactly what we needed. Abdallah understood our vision and brought it to life beautifully."
        },
        {
            name: "Omar Khalil",
            role: "Restaurant Owner",
            company: "Cairo Bites",
            image: "./assets/images/testimonial-omar.jpg",
            color: "accent",
            quote: "Our new website looks amazing and works perfectly on all devices. Great attention to detail and quick turnaround time."
        },
        {
            name: "Layla Ibrahim",
            role: "Event Coordinator",
            company: "Elite Events",
            image: "./assets/images/testimonial-layla.jpg",
            color: "primary",
            quote: "The event posters and promotional materials were stunning. Abdallah has a great eye for design and understands client needs."
        },
        {
            name: "Youssef Ali",
            role: "E-commerce Manager",
            company: "Digital Market Hub",
            image: "./assets/images/testimonial-youssef.jpg",
            color: "secondary",
            quote: "Working with Abdallah was a pleasure. He created stunning product visuals that boosted our online sales significantly."
        },
        {
            name: "Nour Mahmoud",
            role: "Content Creator",
            company: "Creative Studio",
            image: "./assets/images/testimonial-nour.jpg",
            color: "accent",
            quote: "The social media templates are exactly what I needed. Professional, modern, and easy to customize. Highly recommended!"
        }
    ]
};
