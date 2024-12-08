import { formatTimelineEntryDate, TimelineEntryInformation } from "@/lib/timeline/model";
import { cn } from "@/lib/utils";

interface TimelineEntryProps {
	className?: string;
	entry: TimelineEntryInformation;
}

export function TimelineEntry({ className, entry }: TimelineEntryProps) {
	const { header, subheader, dateRange, location, ...rest } = entry;

	return (
		<div className={cn("flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", className)}>
			{/* LHS: Date and Location */}
			<div className="sm:w-0 sm:grow">
				<p className="text-2xl font-medium">
					{formatTimelineEntryDate(dateRange[0])} - {formatTimelineEntryDate(dateRange[1])}
				</p>
				<p className="text-lg text-muted-foreground">{location}</p>
			</div>

			{/* RHS: Header, Subheader, and Bullets/Content */}
			<div className="sm:w-0 sm:grow">
				<h3 className="font-clash-display text-3xl font-medium">{header}</h3>
				<p className="mb-2 text-2xl font-medium text-muted-foreground">{subheader}</p>

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
