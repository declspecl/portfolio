"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { IconContext } from "react-icons";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuGlobe } from "react-icons/lu";
import ClassNames from "embla-carousel-class-names";
import { TechnologyBadge } from "./TechnologyBadges";
import { Project, Screenshot } from "@/lib/projects/model";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";

interface ProjectShowcaseProps {
	project: Project;
	direction?: "row" | "row-reverse";
}

export function ProjectShowcase({ project, direction = "row-reverse" }: ProjectShowcaseProps) {
	const { name, summary, technologies, links, screenshots, ...rest } = project;

	const [magnifiedScreenshot, setMagnifiedScreenshot] = useState<Screenshot | null>(null);

	return (
		<Dialog open={magnifiedScreenshot !== null}>
			<div
				className={cn("flex flex-col gap-4 md:items-center md:gap-8", {
					"md:flex-row": direction === "row",
					"md:flex-row-reverse": direction === "row-reverse"
				})}
			>
				<div className="md:grow md:basis-0">
					<span className="mb-2 inline-flex flex-col gap-2 xs:mb-0 xs:flex-row xs:flex-wrap xs:items-center xs:gap-4">
						<h2 className="font-clash-display text-3xl font-semibold xs:text-4xl">{name}</h2>

						<span className="inline-flex flex-row items-center gap-2">
							<IconContext.Provider value={{ size: "1.25rem" }}>
								{links?.github && (
									<Button size="icon-sm" variant="default" asChild>
										<a href={links.github} target="_blank">
											<LuGithub />
										</a>
									</Button>
								)}
								{links?.live && (
									<Button size="icon-sm" asChild>
										<a href={links.live} target="_blank">
											<LuGlobe />
										</a>
									</Button>
								)}
							</IconContext.Provider>
						</span>
					</span>
					<p className="mb-2 text-base text-muted-foreground">{summary}</p>

					{rest.type === "bullets" ? (
						<ul className="list-inside list-disc">
							{rest.bullets.map((bullet, i) => (
								<li key={`project-${name}-bullet-${i}`}>{bullet}</li>
							))}
						</ul>
					) : (
						rest.content
					)}

					<div className="my-4" />

					<div className="flex flex-row flex-wrap gap-2">
						{technologies.map((technology) => (
							<TechnologyBadge key={`project-${name}-technology-${technology}`} technology={technology} />
						))}
					</div>
				</div>

				<Carousel
					className="md:grow md:basis-0"
					opts={{ loop: true }}
					plugins={[
						ClassNames({
							inView: "opacity-30",
							snapped: "!opacity-100"
						})
					]}
				>
					<CarouselContent className="mb-2">
						{screenshots.map((screenshot) => (
							<CarouselItem key={`project-${name}-screenshot-${screenshot.src}`} className="basis-3/4 opacity-30 transition-opacity duration-300">
								<DialogTrigger
									className="cursor-zoom-in"
									aria-roledescription="magnify image"
									onClick={() => setMagnifiedScreenshot(screenshot)}
								>
									<img loading="eager" src={screenshot.src} alt={screenshot.alt} className="rounded border" />
								</DialogTrigger>
							</CarouselItem>
						))}
					</CarouselContent>

					<div className="flex flex-row items-center justify-center gap-2">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
			</div>

			<DialogContent xButtonOnClick={() => setMagnifiedScreenshot(null)}>
				<DialogHeader>
					<DialogTitle className="font-clash-display text-xl font-semibold xs:text-2xl">{magnifiedScreenshot?.alt}</DialogTitle>
				</DialogHeader>

				<img loading="eager" src={magnifiedScreenshot?.src} alt={magnifiedScreenshot?.alt} srcSet={magnifiedScreenshot?.src} />

				<DialogFooter>
					<DialogClose asChild>
						<Button size="sm" onClick={() => setMagnifiedScreenshot(null)}>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
