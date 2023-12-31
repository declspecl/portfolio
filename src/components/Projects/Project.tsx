import clsx from "clsx";
import React from "react";
import { jbMono } from "@/Fonts";
import { useAnimate } from "framer-motion";
import ProjectContent from "./ProjectContent";
import { ChevronDownIcon } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

interface ProjectProps {
    name: string,
    imagePath: string,
    imageDimensions: { width: number, height: number },
    description: string,
    technologies: string[],
    repoLink?: string,
    siteLink?: string,
    animationDelay?: number
}

export default function Project({ name, imagePath, imageDimensions, description, technologies, repoLink, siteLink, animationDelay = 0 }: ProjectProps) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [scope, animate] = useAnimate();

    return (
        <Accordion.Item value={name.toLowerCase().replace(" ", "-")} className="w-full group">
            <Accordion.Trigger
                onClick={() => {
                    if (isExpanded)
                        animate(scope.current, { opacity: 0, height: 0, marginTop: 0 });
                    else
                        animate(scope.current, { opacity: 1, height: "auto", marginTop: "12px" });

                    setIsExpanded(!isExpanded);
                }}
                className={clsx(
                    "w-full flex flex-row justify-between items-center text-3xl",
                    "md:text-4xl"
                )}
            >
                <h2
                    className={clsx(
                        "text-background-700 transition-[color] text-left",
                        "group-hover:text-background-600",
                        "group-data-state-open:text-text",
                        jbMono.className
                    )}
                >
                    {name}
                </h2>

                <ChevronDownIcon
                    strokeWidth={1.5}
                    className={clsx(
                        "w-[1em] h-[1em] text-text transition-[transform] animate-pulse",
                        "group-data-state-open:-rotate-180 group-data-state-open:animate-none"
                    )}
                    style={{ animationDelay: animationDelay.toString() + "ms", animationDuration: "2.5s" }}
                />
            </Accordion.Trigger>

            <Accordion.Content forceMount>
                <ProjectContent
                    scope={scope}
                    name={name}
                    imagePath={imagePath}
                    imageDimensions={imageDimensions}
                    description={description}
                    technologies={technologies}
                    repoLink={repoLink}
                    siteLink={siteLink}
                />
            </Accordion.Content>
        </Accordion.Item>
    );
}
