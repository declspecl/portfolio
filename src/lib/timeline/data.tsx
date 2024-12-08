import { Month, TimelineEntryInformation } from "./model";

export const experiences: TimelineEntryInformation[] = [
	{
		header: "Amazon",
		subheader: "Junior Software Engineer",
		dateRange: [{ year: 2024, month: Month.April }, null],
		location: "Detroit, Michigan",
		type: "bullets",
		bullets: ["bullet1", "bullet2", "bullet3"]
	}
];

export const educations: TimelineEntryInformation[] = [
	{
		header: "Oakland University",
		subheader: "Bachelor of Science in Computer Science",
		dateRange: [{ year: 2023, month: Month.September }, null],
		location: "Rochester, Michigan",
		type: "bullets",
		bullets: ["bullet1", "bullet2", "bullet3"]
	}
];
