import { cn } from "@/lib/utils";
import { Technology } from "@/lib/common";
import { ToPresentDateRange } from "./ToPresentDateRange";
import { TimelineEntryInformation } from "@/lib/timeline/model";
import { StaticBadge, TechnologyBadge } from "@/components/projects/TechnologyBadges";
import { formatDateRangeDifference, formatTimelineEntryDate } from "@/lib/timeline/server";

interface TimelineEntryProps {
	className?: string;
	entry: TimelineEntryInformation;
}

export function TimelineEntry({ className, entry }: TimelineEntryProps) {
	const { header, subheader, dateRange, location, badges, ...rest } = entry;

	return (
		<div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8", className)}>
			{/* LHS: Date and Location */}
			<div className="sm:grow sm:basis-0">
				<p className="text-2xl font-medium">
					{dateRange[1] ? (
						<span>
							{formatTimelineEntryDate(dateRange[0])} - {formatTimelineEntryDate(dateRange[1])} (
							{formatDateRangeDifference(dateRange[0], dateRange[1])})
						</span>
					) : (
						<ToPresentDateRange start={dateRange[0]} />
					)}
				</p>
				<p className="text-lg text-muted-foreground">{location}</p>
			</div>

			{/* RHS: Header, Subheader, and Bullets/Content */}
			<div className="sm:grow sm:basis-0">
				<h2 className="font-clash-display text-3xl font-medium xs:text-4xl">{header}</h2>
				<h3 className="mb-2 text-xl text-muted-foreground xs:text-2xl">{subheader}</h3>

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

				<div className="mt-2 flex flex-row flex-wrap items-center gap-2">
					{badges.map((badge) =>
						Object.values(Technology).includes(badge as Technology) ? (
							<TechnologyBadge key={badge} technology={badge as Technology} />
						) : (
							<StaticBadge key={badge} name={badge as string} />
						)
					)}
				</div>
			</div>
		</div>
	);
}
