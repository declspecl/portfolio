import clsx from "clsx";
import { jbMono } from "@/Fonts";

interface SectionTextProps {
    id: string,
    className?: string
    children: React.ReactNode,
}

export default function SectionText({ id, className, children }: SectionTextProps) {
    return (
        <div className="flex flex-row justify-center">
            <h1
                id={id}
                className={clsx(
                    "py-6 inline-block bg-gradient-to-r from-secondary to-accent-500 text-text font-medium text-opacity-0 bg-clip-text text-center transition-[opacity,transform]",
                    "text-4xl",
                    "xl:text-[3.4rem]",
                    jbMono.className,
                    className
                )}
            >
                {children}
            </h1>
        </div>
    );
}
