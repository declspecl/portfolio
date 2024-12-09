import { cn } from "@/lib/utils";
import { Technology } from "@/lib/projects/model";

interface TechnologyBadgeProps {
	technology: Technology;
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
	const { name, icon, className } = technology;

	return (
		<div
			className={cn(
				"inline-flex items-center gap-2 rounded-full border bg-background px-3.5 py-1 text-sm font-semibold text-foreground transition-colors",
				className
			)}
		>
			{icon}
			{name}
		</div>
	);
}
