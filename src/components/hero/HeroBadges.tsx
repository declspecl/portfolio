"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconContext } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import { FaRust, FaSpotify, FaSteam } from "react-icons/fa6";

export function HeroBadges() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-2">
			<HeroBadge
				text="Building: PliteDB"
				href="https://github.com/declspecl/plitedb"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaRust />
					</IconContext.Provider>
				}
				className="border-[#6b5b4e] bg-[#5a493d] hover:bg-[#6b5b4e]"
			/>

			<HeroBadge
				text="Playing: Elin"
				href="https://store.steampowered.com/app/2135150/Elin/"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSteam />
					</IconContext.Provider>
				}
				className="border-[#27395a] bg-[#05173b] hover:bg-[#27395a]"
			/>

			<HeroBadge
				text="Listening to: Louise - TV Girl"
				href="https://open.spotify.com/track/263KsGZODTZouh3RFGNaLX"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSpotify />
					</IconContext.Provider>
				}
				className="border-[#11af53] bg-[#06e262] text-background hover:bg-[#11af53]"
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
				"inline-flex items-center gap-2 rounded-full border bg-background px-3.5 py-1 text-sm font-semibold text-foreground transition-colors",
				className
			)}
		>
			{icon}

			{text}

			<IconContext.Provider value={{ size: "1rem" }}>
				<LuArrowUpRight />
			</IconContext.Provider>
		</a>
	);
}
