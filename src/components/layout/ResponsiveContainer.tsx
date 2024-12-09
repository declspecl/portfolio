import { cn } from "@/lib/utils";

interface ResponsiveContainerProps {
	children: React.ReactNode;
	className?: string;
}

export function ResponsiveContainer({ children, className }: ResponsiveContainerProps) {
	return <div className={cn("mx-auto max-w-[64rem]", className)}>{children}</div>;
}
