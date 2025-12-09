import { cn } from "@/lib/utils";

interface SectionTitleProps {
    text: string;
    className?: string;
}

export function SectionTitle({ text, className }: SectionTitleProps) {
    return <h1 className={cn("font-clash-display xs:text-5xl mb-2 text-4xl font-semibold", className)}>{text}</h1>;
}
