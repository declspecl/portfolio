import React from "react";

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

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const monthByNumber: Record<MonthNumber, Month> = {
	1: Month.January,
	2: Month.February,
	3: Month.March,
	4: Month.April,
	5: Month.May,
	6: Month.June,
	7: Month.July,
	8: Month.August,
	9: Month.September,
	10: Month.October,
	11: Month.November,
	12: Month.December
};

export function getMonthFromMonthNumber(monthNumber: MonthNumber): Month {
	return monthByNumber[monthNumber];
}

export interface TimelineEntryDate {
	year: number;
	monthNumber: MonthNumber;
}

export function formatTimelineEntryDate(date: TimelineEntryDate | null): string {
	if (!date) {
		return "Present";
	}

	const month = getMonthFromMonthNumber(date.monthNumber);

	return `${month} ${date.year}`;
}

export function formatDateRangeDifference(start: TimelineEntryDate, maybeEnd: TimelineEntryDate | null): string {
	const today = new Date();
	const end: TimelineEntryDate = maybeEnd ?? { year: today.getFullYear(), monthNumber: (today.getMonth() + 1) as MonthNumber };

	const yearDifference = end.year - start.year;
	const monthDifference = (end.monthNumber - start.monthNumber + 12) % 12;

	const yearUnit = yearDifference === 1 ? "year" : "years";
	const monthUnit = monthDifference === 1 ? "month" : "months";

	if (yearDifference === 0) {
		return `${Math.max(monthDifference, 1)} ${monthUnit}`;
	} else if (monthDifference === 0) {
		return `${yearDifference} ${yearUnit}`;
	}

	return `${yearDifference} ${yearUnit}, ${monthDifference} ${monthUnit}`;
}

export interface TimelineEntryDetails {
	header: string;
	subheader: string;
	dateRange: [TimelineEntryDate, TimelineEntryDate | null];
	location: string;
}

interface BulletedTimelineEntryDetails extends TimelineEntryDetails {
	type: "bullets";
	bullets: string[];
}

interface ContentTimelineEntryDetails extends TimelineEntryDetails {
	type: "content";
	content: React.ReactNode;
}

export type TimelineEntryInformation = BulletedTimelineEntryDetails | ContentTimelineEntryDetails;
