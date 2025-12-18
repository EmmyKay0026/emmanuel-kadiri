import { ProjectDetailType } from "@/types";

const projects: ProjectDetailType[] = [
  {
    jobDone: "Web Development",
    overview:
      "The project's core idea was to solve the problem of manually entering student data, payment information, task information, and other essential details students need throughout their program. We developed both the front-end and back-end to manage this information, display periodic tasks, handle payments, manage support tickets, and facilitate event announcements.",
    description:
      "A comprehensive digital solution developed to eliminate manual data entry, providing students and administrators with real-time management of student information, tasks, and payments throughout their program.",
    shortDes:
      "Collaborated with UI designers to build a student dashboard that track student learning, display financial details and more. ",

    cardCtaText: "Read more",
    slug: "dyen-student-dashboard",
    title: "DYEN Student Dashboard",
    coverImage: "/images/dyen_student_dashboard.png",

    technologies: ["React (with Vite)", "Express (Node.js)", "MongoDB"],
    features: [
      "Student Data Management",
      "Payment Management",
      "Task Display and Tracking",
      "Support Ticket Creation and Management",
      "Events Management and Notifications",
    ],
    client: "DYEN",
    timeline: "3 months",
    role: "Lead for the project and Front-end Developer",
    images: [
      "/images/dyen_dashboard_1.png",
      "/images/dyen_dashboard_2.png",
      "/images/dyen_dashboard_3.png",
      "/images/dyen_dashboard_4.png",
    ],
    moreImages: [
      "/images/dyen_dashboard_7.png",
      "/images/dyen_dashboard_5.png",
      "/images/dyen_dashboard_6.png",
      // "/images/dyen_dashboard_8.png",
    ],
    website: "https://students.dyen.org/",
    ctaText: "View Website",
    learnings: [
      "Enhanced skills in full-stack development using React, Express, and MongoDB.",
      "Gained experience in building user-friendly dashboards and interfaces.",
      "Improved understanding of data management and real-time updates.",
    ],
    challenges:
      "The DYEN faced significant operational inefficiencies due to the manual and decentralized management of core student data, including academic records, payment tracking, task assignments, and support requests. This manual process led to:",
    challengesList: [
      "Data Inconsistency and Errors",
      "Administrative Overhead",
      "Poor Student Experience",
    ],
    solution:
      "We developed the DYEN Student Dashboard, a centralized, full-stack digital platform built with React, Express, and MongoDB, to fully automate and digitize the student management lifecycle. The solution proffers the following key benefits:",
    solutionList: [
      "Centralized Data Management",
      "Automated Program Tracking",
      "Integrated Financial Management",
      "Enhanced Support & Communication",
      "Improved Student Empowerment",
    ],
    featured: true,
  },
  {
    jobDone: "Website Redesign, SEO, Lead Automation",
    shortDes:
      "A strategic WordPress redesign integrated with Zoho automation to boost client conversion.",
    description:
      "Redesigned Kaego's digital platform to align with their brand identity while integrating automated CRM notifications and on-page SEO to streamline client communication and improve organic reach.",
    overview:
      "As the Lead Web Designer, I refreshed Kaego's online presence by essentializing their brand colors and redesigning service displays for better UX. To solve communication delays, I integrated Zoho for automated 'on-click' notifications for contact form submissions and implemented a foundational SEO strategy to improve search visibility.",
    technologies: [
      "WordPress",
      "Zoho Mail and Cliq",
      "CSS/HTML",
      "Elementor/Gutenberg",
    ],
    features: [
      "Service Offering Portfolio",
      "Brand Color Essentialization",
      "Automated Zoho Notifications on Cliq",
      "On-page SEO Optimization",
      "High-Conversion Contact Forms",
      "Responsive User Experience",
    ],
    client: "Kaego",
    timeline: "2 months",
    role: "Lead Web Designer",
    challenges:
      "Kaego lacked a cohesive brand identity and a fast way to respond to leads, resulting in a low visitor-to-client conversion rate and missed opportunities.",
    challengesList: [
      "Ineffective display of core services",
      "Inconsistent brand color usage",
      "Manual and slow lead tracking process",
      "Low search engine visibility",
      "High lead drop-off due to delayed follow-ups",
    ],
    solution:
      "I executed a full UI/UX redesign on WordPress and bridged the gap between inquiry and response by integrating Zoho for instant automated notifications.",
    solutionList: [
      "Redesigned the UI to highlight core services clearly",
      "Standardized brand colors for professional consistency",
      "Integrated Zoho for instant 'on-click' lead notifications",
      "Applied on-page SEO best practices to boost rankings",
      "Simplified the user journey to increase turnover",
    ],
    learnings: [
      "Impact of instant CRM notifications on business turnover",
      "How brand consistency directly influences user trust and conversion",
      "The synergy between SEO structure and user experience design",
      "Streamlining WordPress-Zoho integrations for automated workflows",
    ],
    featured: false,
    slug: "kaego",
    title: "Kaego Website Redesign & Automation",
    coverImage: "/images/kaego_mockup.png",
    images: [
      "/images/kaego/image 502.png",
      "/images/kaego/image 503.png",
      "/images/kaego/image 504.png",
      "/images/kaego/image 520.png",
    ],
    moreImages: ["/images/kaego/image 501.png", "/images/kaego/image 507.png"],
    website: "https://trykaego.com",
    ctaText: "View Website",
    cardCtaText: "Read more",
    problemImg: "/images/kaego/kaego_old.png",
    solutionImg: "/images/kaego/image 506.png",
  },
  {
    jobDone: "Full-stack Website Redesign & Infrastructure Deployment",
    shortDes:
      "A modern, responsive web overhaul with automated application systems and robust DevOps hosting.",
    description:
      "Transformed a legacy, static site into a high-performance platform featuring community engagement modules, automated data collection, and a professional-grade CI/CD deployment pipeline.",
    overview:
      "The project involved transforming a 'stale' website into a dynamic hub for the DYEN community. As the Team Leader, I guided the team in creating mobile-responsive designs and high-converting copy. We implemented interactive features such as an application form that feeds directly into a database, an About page, and a Gallery to showcase brand experiences.",
    technologies: [
      "Nextjs",
      "Nginx",
      "Docker",
      "CI/CD Pipelines (GitHub Actions)",
      "VPS Hosting",
      "Database (Management)",
    ],
    features: [
      "Mobile-First Responsive Design",
      "Database-Integrated Application Form",
      "Community Event Management Page",
      "Brand Gallery and Media Display",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Converting Marketing Copy",
    ],
    client: "DYEN",
    timeline: "3 months",
    role: "Team Leader & Lead Front-end Developer",
    challenges:
      "The organization was limited by an outdated, non-responsive website that lacked interactive functionality and a way to capture applicant data, leading to manual bottlenecks and poor user engagement.",
    challengesList: [
      "Static and non-responsive legacy architecture",
      "Manual processing of student/applicant data",
      "Lack of centralized information for community events",
      "Inefficient manual deployment and hosting processes",
    ],
    solution:
      "We rebuilt the site with a focus on UX/UI and automation. I personally architected the deployment pipeline and backend integration to ensure that data collection was seamless and the site was easily updated through automation.",
    solutionList: [
      "Redesigned the UI for full mobile responsiveness",
      "Integrated a functional application form with database storage",
      "Built dynamic pages for Events and Brand Experience",
      "Deployed containerized environment using Docker and Nginx on a VPS",
      "Established a CI/CD pipeline for automated updates",
    ],
    learnings: [
      "Orchestrating containerized deployments with Docker and Nginx",
      "Setting up automated CI/CD pipelines for production environments",
      "Leading a cross-functional team of designers and copywriters",
      "Optimizing user journeys for high-conversion application forms",
    ],

    images: [
      "/images/dyen_website/image 513.png",
      "/images/dyen_website/image 515.png",
      "/images/dyen_website/image 516.png",
      "/images/dyen_website/image 514.png",
    ],
    coverImage: "/images/dyen_website.png",
    problemImg: "/images/dyen_website/dyen_website_old.png",
    solutionImg: "/images/dyen_website/dyen_website_new.png",
    moreImages: [
      "/images/dyen_website/image 517.png",
      "/images/dyen_website/image 518.png",
      "/images/dyen_website/image 519.png",
    ],
    featured: true,
    cardCtaText: "Read more",
    ctaText: "View website",
    slug: "dyen-website",
    website: "https://dyen.org",
    title: "DYEN's website redesign",
  },
  {
    jobDone: "WordPress Website Development & SEO",
    shortDes:
      "A clean, responsive WordPress platform for a Christian non-profit to reach a global audience.",
    description:
      "Established the first digital presence for a non-profit organization, moving their community interaction from WhatsApp to a professional hub for podcasts, articles, and events.",
    overview:
      "I built a website for a Christian community-based non-profit dedicated to sharing spiritual content with young people. Collaborating with a UI designer, I developed an aesthetically clean and fully responsive WordPress site. This allowed the organization to centralize their writings and podcasts, host events, and run digital ads to reach audiences both within and outside Nigeria.",
    technologies: ["WordPress", "On-page SEO", "Domain Hosting"],
    features: [
      "Responsive Design",
      "Podcast Integration",
      "Articles & Writing Section",
      "Events Management Module",
      "On-page SEO Optimization",
      "Ad-ready Landing Pages",
    ],
    client: "Charisfolks (Non-profit)",
    timeline: "1 month",
    role: "Lead WordPress Developer",
    challenges:
      "The organization had no previous web presence, relying entirely on WhatsApp for communication. This restricted their reach to local groups and prevented them from scaling their impact or running professional marketing campaigns.",
    challengesList: [
      "Total lack of a digital footprint",
      "Communication restricted to local WhatsApp groups",
      "No centralized platform for hosting podcasts and articles",
      "Inability to run digital ads to a wider audience",
    ],
    solution:
      "I developed a comprehensive WordPress site that serves as a media hub. By creating a professional, SEO-optimized platform, the organization can now host their content globally and use the site as a destination for ad traffic to increase their turnover and influence.",
    solutionList: [
      "Developed a custom WordPress site from scratch",
      "Collaborated with a UI designer for a 'clean' aesthetic",
      "Implemented on-page SEO to improve discoverability",
      "Integrated multimedia sections for writing and podcasts",
      "Deployed the site on domain hosting for global access",
    ],
    learnings: [
      "Mastering WordPress development from start to finish",
      "Translating UI designs into responsive web structures",
      "Understanding the digital infrastructure needs of non-profit organizations",
      "Executing on-page SEO strategies for new websites",
    ],
    featured: false,
    images: [
      "/images/charisfolks/image 526.png",
      "/images/charisfolks/image 529.png",
      "/images/charisfolks/image 527.png",
      "/images/charisfolks/image 528.png",
    ],
    moreImages: [
      "/images/charisfolks/image 525.png",
      "/images/charisfolks/image 523.png",
      "/images/charisfolks/image 524.png",
    ],
    problemImg: "",
    solutionImg: "/images/charisfolks/image 521.png",
    coverImage: "/images/charisfolks_mockup.png",
    title: "Charisfolks website",
    ctaText: "View website",
    cardCtaText: "Read more",
    slug: "charisfolks",
    website: "https://charisfolks.org",
  },
  {
    jobDone: "Mobile Application Development",
    shortDes:
      "A comprehensive React Native event management app featuring ticketing, social follows, and real-time reviews.",
    description:
      "Developed a high-fidelity mobile application focused on the end-to-end event experience, from discovery and ticket purchasing to organizer engagement and user feedback. Design credits goes to Prelook Studio.",
    overview:
      "Created as a personal project to master React Native, Event Hub bridges the gap between event organizers and attendees. The app provides a seamless interface for users to search for events, follow their favorite organizers, and manage their own profiles, all while maintaining a clean, high-performance mobile UI.",
    technologies: [
      "React Native",
      "JavaScript",
      "React Navigation",
      "Mobile UI/UX Implementation",
    ],
    features: [
      "Event Discovery & Search",
      "In-App Ticket Purchasing",
      "Event Uploading & Management",
      "Organizer Following System",
      "User Profile & Settings Customization",
      "Live Review & Rating System",
    ],
    client: "Personal Project (Skill Development)",
    timeline: "45 days",
    role: "Lead Mobile Developer",
    challenges:
      "The main challenge was translating a complex, multi-feature UI design into a functional mobile application within a rapid two-week development cycle while ensuring smooth performance across various mobile components.",
    challengesList: [
      "Implementing a multi-faceted search and filter system",
      "Managing complex state for following/unfollowing organizers",
      "Creating a responsive layout based on pre-existing UI designs",
      "Developing a user-friendly event upload workflow",
    ],
    solution:
      "I utilized a modular component architecture in React Native to ensure code reusability and maintainability. By focusing on core mobile navigation patterns and clean state management, I was able to deliver a polished experience that supports both attendee and organizer workflows.",
    solutionList: [
      "Architected modular React Native components for faster development",
      "Integrated robust navigation for seamless transitions between event lists and profiles",
      "Focused on 'clean design' principles to ensure a professional look and feel",
      "Iteratively tested UI components to ensure responsiveness",
    ],
    learnings: [
      "Advanced proficiency in React Native component lifecycles",
      "Effective translation of static high-fidelity UI designs into functional code",
      "Optimizing mobile applications for high-performance user interactions",
      "Managing rapid development sprints for feature-heavy projects",
    ],
    title: "Event Hub",
    featured: true,
    images: [
      "/images/event_hub/1.png",
      "/images/event_hub/2.png",
      "/images/event_hub/3.png",
      "/images/event_hub/4.png",
    ],
    // moreImages: ["/images/event_hub/5.png", "/images/event_hub/6.png"],
    problemImg: "/images/event_hub/design.webp",
    ctaText: "",
    cardCtaText: "Read more",
    website: "",
    coverImage: "/images/event_hub.gif",
    slug: "event-hub",
  },
];

export default projects;
