import { cn } from "@/lib/utils";

interface GridBackgroundProps {
	className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
	return <div className={cn("bg-gridlines -z-10 [--line-color:var(--muted)/0.5] [--line-size:20px]", className)} />;
}
