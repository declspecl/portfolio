import type { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
    {
        name: "UniFit",
        summary: "Full-stack automated university meal planning platform",
        technologies: [
            Technology.React,
            Technology.TypeScript,
            Technology.NextJS,
            Technology.Expo,
            Technology.TailwindCSS,
            Technology.PostgreSQL,
            Technology.Vercel,
            Technology.Figma,
            Technology.TRPC,
            Technology.Turborepo,
            Technology.GenAI,
            Technology.Playwright,
            Technology.AWS,
        ],
        links: {
            live: "https://www.unifit.me",
        },
        screenshots: [
            {
                name: "UniFit landing page",
                mobile: {
                    src: "/images/unifit/hero-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/hero-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/hero-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit live demo walkthrough",
                mobile: {
                    src: "/images/unifit/landing-builder-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/landing-builder-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/landing-builder-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit pricing page",
                mobile: {
                    src: "/images/unifit/pricing-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/pricing-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/pricing-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit daily meal plans",
                mobile: {
                    src: "/images/unifit/plans-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/plans-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/plans-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit meal plan builder",
                mobile: {
                    src: "/images/unifit/builder-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/builder-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/builder-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit nutritional goal presets",
                mobile: {
                    src: "/images/unifit/preferences-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/preferences-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/preferences-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit meal plan history",
                mobile: {
                    src: "/images/unifit/history-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/history-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/history-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
        ],
        type: "bullets",
        bullets: [
            "Co-founded UniFit and led the product from zero to production, reaching 100 peak DAU in the first month",
            "Architected a cross-platform TypeScript system (Next.js web + Expo mobile + tRPC + Neon Postgres) with end-to-end type-safe APIs, auth, and analytics",
            "Built a constraint-based meal plan engine and automated multi-university menu data pipelines (scheduled Playwright parsing + scraping) with GenAI ranking and data enrichment",
        ],
    },
    {
        name: "Personle!",
        summary: "Full-stack daily guessing game for characters from the Persona video game series",
        technologies: [
            Technology.React,
            Technology.TypeScript,
            Technology.TailwindCSS,
            Technology.Java,
            Technology.SpringBoot,
            Technology.AWS,
            Technology.Rust,
            Technology.Nginx,
            Technology.Figma,
        ],
        links: {
            github: "https://github.com/declspecl/personle",
            live: "https://www.personle.app",
        },
        screenshots: [
            {
                name: "Personle! home page",
                mobile: {
                    src: "/images/personle/home-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/personle/home-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/personle/home-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
            {
                name: "Personle! daily play page",
                mobile: {
                    src: "/images/personle/daily-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/personle/daily-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/personle/daily-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
            {
                name: "Personle! daily play correct guess",
                mobile: {
                    src: "/images/personle/daily-correct-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/personle/daily-correct-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/personle/daily-correct-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
            {
                name: "Personle! compendium page",
                mobile: {
                    src: "/images/personle/compendium-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/personle/compendium-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/personle/compendium-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
        ],
        type: "bullets",
        bullets: [
            "Scaled from launch to 600 peak DAU with 99.9% uptime via automated CDK IaC pipelines on a self-hosted VPS",
            "Applied creative and accessible UI styling techniques to mimic the complex art style of Persona 5",
        ],
    },
    {
        name: "Fouseion",
        summary: "Local-first AI-native tag based file management desktop app",
        technologies: [
            Technology.React,
            Technology.TypeScript,
            Technology.Rust,
            Technology.TailwindCSS,
            Technology.Tauri,
            Technology.TRPC,
            Technology.Turborepo,
            Technology.GenAI,
            Technology.Vite,
        ],
        links: {
            live: "https://www.fouseion.com",
        },
        screenshots: [
            {
                name: "Fouseion hero page",
                mobile: {
                    src: "/images/fouseion/hero-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/fouseion/hero-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/fouseion/hero-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "Fouseion features overview",
                mobile: {
                    src: "/images/fouseion/features-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/fouseion/features-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/fouseion/features-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "Fouseion workbench demo",
                mobile: {
                    src: "/images/fouseion/workbench-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/fouseion/workbench-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/fouseion/workbench-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "Fouseion waitlist and footer",
                mobile: {
                    src: "/images/fouseion/waitlist-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/fouseion/waitlist-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/fouseion/waitlist-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
        ],
        type: "bullets",
        bullets: [
            "Designed and built a local-first desktop application using Tauri with semantic file search and automatic tagging",
            "Implemented AI-native workflows for intelligent file organization without cloud uploads or privacy compromises",
            "Utilized AI to generate tags for files based on their content, allowing for more accurate and efficient file organization",
        ],
    },
    {
        name: "O.U. Bookmarket",
        summary: "Full-stack textbook resale marketplace for Oakland University students",
        technologies: [
            Technology.React,
            Technology.TypeScript,
            Technology.Java,
            Technology.SpringBoot,
            Technology.SQLite,
            Technology.GCP,
            Technology.Figma,
            Technology.Vite,
        ],
        links: {
            github: "https://github.com/declspecl/bookmarket",
        },
        screenshots: [
            {
                name: "O.U. Bookmarket shop page",
                mobile: {
                    src: "/images/bookmarket/shop-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/bookmarket/shop-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/bookmarket/shop-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
            {
                name: "O.U. Bookmarket comments page",
                mobile: {
                    src: "/images/bookmarket/comments-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/bookmarket/comments-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/bookmarket/comments-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
            {
                name: "O.U. Bookmarket create listing page",
                mobile: {
                    src: "/images/bookmarket/create-listing-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/bookmarket/create-listing-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/bookmarket/create-listing-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
            {
                name: "O.U. Bookmarket signup page",
                mobile: {
                    src: "/images/bookmarket/signup-460w.webp",
                    width: 460,
                    height: 367,
                },
                desktop: {
                    src: "/images/bookmarket/signup-350w.webp",
                    width: 350,
                    height: 279,
                },
                magnified: {
                    src: "/images/bookmarket/signup-740w.webp",
                    width: 740,
                    height: 590,
                },
            },
        ],
        type: "bullets",
        bullets: [
            "Led a team of 4 student developers to deliver and deploy a production application in 10 weeks",
            "Designated tasks using Agile methodologies and Kanban",
            "Organized weekly scrum meetings to ensure timely completion of features",
            "Created numerous reports and diagrams documenting the application's design, business requirements, and implementation",
        ],
    },
];
