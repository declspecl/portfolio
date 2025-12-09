"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { IconContext } from "react-icons";
import { FaSpotify } from "react-icons/fa6";
import { LuUtensils, LuFolderSearch } from "react-icons/lu";
import { LuArrowUpRight } from "react-icons/lu";

export function HeroBadges() {
    return (
        <div className="flex flex-row flex-wrap items-center gap-2">
            <HeroBadge
                text="Building: UniFit"
                href="https://www.unifit.me"
                icon={
                    <IconContext.Provider value={{ size: "1rem" }}>
                        <LuUtensils />
                    </IconContext.Provider>
                }
                className="border-red-800 bg-orange-950/50 text-orange-100 hover:bg-orange-800/50"
            />

            <HeroBadge
                text="Building: Fouseion"
                href="https://www.fouseion.com"
                icon={
                    <IconContext.Provider value={{ size: "1rem" }}>
                        <LuFolderSearch />
                    </IconContext.Provider>
                }
                className="border-yellow-800 bg-yellow-950/40 text-yellow-100 hover:bg-yellow-800/50"
            />

            <HeroBadge
                text="Listening to: Mystery"
                href="https://open.spotify.com/track/41ZPPTp7Hj9Bhy361OKtfK"
                icon={
                    <IconContext.Provider value={{ size: "1rem" }}>
                        <FaSpotify />
                    </IconContext.Provider>
                }
                className="bg-[#137736] hover:bg-[#1c9245]"
            />
        </div>
    );
}

interface HeroBadgeProps {
    icon: React.ReactNode;
    text: string;
    href: string;
    className?: string;
}

export function HeroBadge({ icon, text, href, className }: HeroBadgeProps) {
    return (
        <a
            href={href}
            target="_blank"
            className={cn(
                "bg-background text-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-sm font-semibold transition-colors",
                className,
            )}
            rel="noreferrer"
        >
            {icon}

            {text}

            <IconContext.Provider value={{ size: "1rem" }}>
                <LuArrowUpRight />
            </IconContext.Provider>
        </a>
    );
}
