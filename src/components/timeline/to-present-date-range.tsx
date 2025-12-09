"use client";

import type { MonthNumber, TimelineEntryDate } from "@/lib/timeline/model";
import { formatDateRangeDifference, formatTimelineEntryDate } from "@/lib/timeline/server";
import { useMemo } from "react";

interface ToPresentDateRange {
    start: TimelineEntryDate;
}

export function ToPresentDateRange({ start }: ToPresentDateRange) {
    const end = useMemo(() => {
        const today = new Date();
        return { year: today.getFullYear(), monthNumber: (today.getMonth() + 1) as MonthNumber };
    }, []);

    return (
        <span>
            {formatTimelineEntryDate(start)} - Present ({formatDateRangeDifference(start, end)})
        </span>
    );
}
