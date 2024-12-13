import React from "react";
import { Technology } from "@/lib/common";

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

export const monthByNumber: Record<MonthNumber, Month> = {
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

export interface TimelineEntryDate {
	year: number;
	monthNumber: MonthNumber;
}

export interface TimelineEntryDetails {
	header: string;
	subheader: string;
	dateRange: [TimelineEntryDate, TimelineEntryDate | null];
	location: string;
	badges: (Technology | string)[];
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
