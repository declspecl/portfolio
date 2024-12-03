import { cn } from "@/lib/utils";

interface GridBackgroundProps {
	className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
	return <div className={cn("[--line-size:20px] [--line-color:var(--muted)/0.5] bg-gridlines -z-10", className)} />;
}
