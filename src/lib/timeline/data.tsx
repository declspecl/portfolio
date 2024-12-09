import { Technology } from "@/lib/common";
import { TimelineEntryInformation } from "./model";

export const experienceEntries: TimelineEntryInformation[] = [
	{
		header: "Amazon",
		subheader: "Junior Software Engineer",
		dateRange: [{ year: 2024, monthNumber: 4 }, null],
		location: "Detroit, Michigan",
		type: "bullets",
		bullets: [
			"Enable over 13 million sellers to sell goods globally on Amazon",
			"Conduct numerous large-scale migrations and code changes to modernize services",
			"Develop a novel tool to diagnose Seller Support issues, facilitating easier debugging for engineering teams",
			"Reduce maintenance overhead by aiding in deprecating and distributing responsibilities of legacy services"
		],
		badges: [Technology.AWS, Technology.Java, Technology.React, Technology.TypeScript, Technology.Rust, Technology.Python, "Agile"]
	}
];

export const educationEntries: TimelineEntryInformation[] = [
	{
		header: "Oakland University",
		subheader: "Bachelor of Science in Computer Science",
		dateRange: [{ year: 2023, monthNumber: 9 }, null],
		location: "Rochester, Michigan",
		type: "bullets",
		bullets: [
			"4.0 GPA, 71 credits completed",
			"Member of the Honors College",
			"President's list for Fall 2023 and Winter 2024",
			"Relevant coursework: Data Structures, Intro to Computer Networks, C Programming and Unix, Object-Oriented Programming"
		],
		badges: [Technology.Java, Technology.React, Technology.TypeScript, Technology.CPP]
	}
];
