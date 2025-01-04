import { Month, monthByNumber, MonthNumber, TimelineEntryDate } from "./model";

export function formatTimelineEntryDate(date: TimelineEntryDate | null): string {
	if (!date) {
		return "Present";
	}

	const month = getMonthFromMonthNumber(date.monthNumber);

	return `${month} ${date.year}`;
}

export function formatDateRangeDifference(start: TimelineEntryDate, end: TimelineEntryDate): string {
	let monthDifference = end.monthNumber - start.monthNumber;
	let yearDifference = end.year - start.year;
	while (monthDifference < 0) {
		monthDifference += 12;
		yearDifference -= 1;
	}

	const yearUnit = yearDifference === 1 ? "year" : "years";
	const monthUnit = monthDifference === 1 ? "month" : "months";

	if (yearDifference === 0) {
		return `${Math.max(monthDifference, 1)} ${monthUnit}`;
	} else if (monthDifference === 0) {
		return `${yearDifference} ${yearUnit}`;
	}

	return `${yearDifference} ${yearUnit}, ${monthDifference} ${monthUnit}`;
}

export function getMonthFromMonthNumber(monthNumber: MonthNumber): Month {
	return monthByNumber[monthNumber];
}
