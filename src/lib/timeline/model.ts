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

export interface TimelineEntryDate {
	year: number;
	month: Month;
}

export function formatTimelineEntryDate(date: TimelineEntryDate | null) {
	if (!date) {
		return "Present";
	}

	return `${date.month} ${date.year}`;
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
