import type { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
    {
        name: "UniFit",
        summary: "Full-stack meal planning solution for university students",
        technologies: [
            Technology.React,
            Technology.TypeScript,
            Technology.NextJS,
            Technology.TailwindCSS,
            Technology.PostgreSQL,
            Technology.Rust,
            Technology.Vercel,
            Technology.Figma,
            Technology.TRPC,
            Technology.Turborepo,
            Technology.GenAI,
        ],
        links: {
            live: "https://www.unifit.me",
        },
        screenshots: [
            {
                name: "UniFit hero page",
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
                name: "UniFit meal plan demo",
                mobile: {
                    src: "/images/unifit/demo-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/demo-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/demo-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit features overview",
                mobile: {
                    src: "/images/unifit/features-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/features-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/features-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
            {
                name: "UniFit FAQ and waitlist",
                mobile: {
                    src: "/images/unifit/faq-460w.webp",
                    width: 460,
                    height: 368,
                },
                desktop: {
                    src: "/images/unifit/faq-350w.webp",
                    width: 350,
                    height: 280,
                },
                magnified: {
                    src: "/images/unifit/faq-740w.webp",
                    width: 740,
                    height: 592,
                },
            },
        ],
        type: "bullets",
        bullets: [
            "Engineered an optimal meal plan generation algorithm using dynamic programming, reducing computation time and memory footprint both by over 90% compared to brute force approaches",
            "Architected a REST API to efficiently query ~800k meal plans considering various user preferences",
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
            "Scaled application from launch to 600 peak DAU with a performant REST API and NoSQL database",
            "Achieved 99.9% uptime through automated CDK IaC pipelines on a self-hosted VPS",
            "Applied creative and accessible UI styling techniques to mimic the complex art style of Persona 5",
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
