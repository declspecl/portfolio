import type { TimelineEntryInformation } from "./model";
import { Technology } from "@/lib/common";

export const experienceEntries: TimelineEntryInformation[] = [
    {
        header: "Amazon",
        subheader: "Junior Software Engineer",
        dateRange: [{ year: 2024, monthNumber: 4 }, null],
        location: "Detroit, Michigan",
        type: "bullets",
        bullets: [
            "Primary developer on a greenfield seller experience (now org-wide top priority): designed and built backend service and frontend end-to-end, launching pilot to 100+ sellers",
            "Built a 10k+ LOC diagnostic tool within first 90 days that cut Seller Support ticket contacts by 50%+; monitored via custom dashboards",
            "Built a novel internal AI agent on AWS Bedrock AgentCore with MCP to accelerate debugging and migrations; led cross-team knowledge transfer",
            "Designed and implemented high-concurrency pipeline processing 10k+ listings per workflow with thousands of bounded parallel API calls and production-grade observability",
            "Led cross-org tiger team initiative to migrate 12+ services across 3 EU AWS regions, architecting VPC, PrivateLink, and DNS/service-discovery networking",
        ],
        badges: [
            Technology.AWS,
            Technology.Java,
            Technology.React,
            Technology.TypeScript,
            Technology.Rust,
            Technology.Python,
            Technology.GenAI,
            "Agile",
            "Leadership",
            "Teamwork",
        ],
    },
];

export const educationEntries: TimelineEntryInformation[] = [
    {
        header: "Oakland University",
        subheader: "Bachelor of Science in Computer Science",
        dateRange: [{ year: 2023, monthNumber: 9 }, null],
        location: "Rochester, Michigan",
        type: "bullets",
        bullets: [
            "4.0 GPA, 87 credits completed",
            "Member of the Honors College",
            "President's list for Fall 2023 Winter 2024, and Fall 2024",
            "Relevant coursework: Data Structures and Algorithms, Intro to Computer Networks, C Programming and Unix, Object-Oriented Programming",
        ],
        badges: [Technology.Java, Technology.React, Technology.TypeScript, Technology.CPP, "Leadership", "Teamwork"],
    },
];
