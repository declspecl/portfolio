import { cn } from "@/lib/utils";
import { formatDateRangeDifference, formatTimelineEntryDate, TimelineEntryInformation } from "@/lib/timeline/model";

interface TimelineEntryProps {
	className?: string;
	entry: TimelineEntryInformation;
}

export function TimelineEntry({ className, entry }: TimelineEntryProps) {
	const { header, subheader, dateRange, location, ...rest } = entry;

	return (
		<div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8", className)}>
			{/* LHS: Date and Location */}
			<div className="sm:grow sm:basis-0">
				<p className="text-2xl font-medium">
					{formatTimelineEntryDate(dateRange[0])} - {formatTimelineEntryDate(dateRange[1])} ({formatDateRangeDifference(dateRange[0], dateRange[1])})
				</p>
				<p className="text-lg text-muted-foreground">{location}</p>
			</div>

			{/* RHS: Header, Subheader, and Bullets/Content */}
			<div className="sm:grow sm:basis-0">
				<h2 className="font-clash-display text-4xl font-medium">{header}</h2>
				<h3 className="mb-2 text-2xl text-muted-foreground">{subheader}</h3>

				{rest.type === "content" ? (
					<>{rest.content}</>
				) : (
					<ul>
						{rest.bullets.map((bullet, i) => (
							<li key={`${header}-${subheader}-bullet-${i}`} className="list-inside list-disc">
								{bullet}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
