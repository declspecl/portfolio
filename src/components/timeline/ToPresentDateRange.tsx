"use client";

import { useEffect, useState } from "react";
import { MonthNumber, TimelineEntryDate } from "@/lib/timeline/model";
import { formatDateRangeDifference, formatTimelineEntryDate } from "@/lib/timeline/server";

interface ToPresentDateRange {
	start: TimelineEntryDate;
}

export function ToPresentDateRange({ start }: ToPresentDateRange) {
	const [end, setEnd] = useState<TimelineEntryDate | null>(null);

	useEffect(() => {
		const today = new Date();
		setEnd({ year: today.getFullYear(), monthNumber: (today.getMonth() + 1) as MonthNumber });
	}, []);

	return (
		<span>
			{formatTimelineEntryDate(start)} - Present {end && "(" + formatDateRangeDifference(start, end) + ")"}
		</span>
	);
}
