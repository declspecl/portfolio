import { cn } from "@/lib/utils";

interface SectionTitleProps {
	text: string;
	className?: string;
}

export function SectionTitle({ text, className }: SectionTitleProps) {
	return <h1 className={cn("mb-2 font-clash-display text-4xl font-semibold xs:text-5xl", className)}>{text}</h1>;
}
