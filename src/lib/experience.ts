export enum Month {
	January = "January",
	February = "February",
	March = "March",
	April = "April",
	May = "May",
	June = "June",
	July = "July",
	August = "August",
	September = "September",
	October = "October",
	November = "November",
	December = "December"
}

export interface ExperienceDate {
	year: number;
	month: Month;
}

export function formatExperienceDate(date: ExperienceDate | null) {
	if (!date) {
		return "Present";
	}

	return `${date.month} ${date.year}`;
}

export interface Experience {
	company: string;
	position: string;
	dateRange: [ExperienceDate, ExperienceDate | null];
	location: string;
	bullets: string[];
}

export const experiences: Experience[] = [
	{
		company: "Amazon",
		position: "Junior Software Engineer",
		dateRange: [{ year: 2024, month: Month.April }, null],
		location: "Detroit, Michigan",
		bullets: ["bullet1", "bullet2", "bullet3"]
	}
];
