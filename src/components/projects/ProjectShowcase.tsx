import { Project } from "@/lib/projects/model";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuGlobe } from "react-icons/lu";
import { TechnologyBadge } from "./TechnologyBadge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";

interface ProjectShowcaseProps {
	project: Project;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
	const { name, summary, technologies, links, screenshots, ...rest } = project;

	return (
		<div className="flex flex-col gap-4 md:flex-row-reverse md:items-center md:gap-8">
			<div className="md:w-0 md:grow">
				<h3 className="font-clash-display text-3xl font-semibold">{name}</h3>
				<p className="text-base text-muted-foreground">{summary}</p>

				{links?.github && (
					<Button size="icon" asChild>
						<a href={links.github} target="_blank">
							<LuGithub />
						</a>
					</Button>
				)}

				{links?.live && (
					<Button size="icon" asChild>
						<a href={links.live} target="_blank">
							<LuGlobe />
						</a>
					</Button>
				)}

				{rest.type === "bullets" ? (
					<ul className="list-inside list-disc">
						{rest.bullets.map((bullet, i) => (
							<li key={`project-${name}-bullet-${i}`}>{bullet}</li>
						))}
					</ul>
				) : (
					rest.content
				)}

				<div className="flex flex-row flex-wrap gap-2">
					{technologies.map((technology) => (
						<TechnologyBadge key={technology.name} technology={technology} />
					))}
				</div>
			</div>

			<Carousel className="md:w-0 md:grow" opts={{ loop: true }}>
				<CarouselContent className="mb-2">
					{screenshots.map((screenshot) => (
						<CarouselItem key={`project-${name}-screenshot-${screenshot.src}`}>
							<img loading="eager" src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} />
						</CarouselItem>
					))}
				</CarouselContent>

				<div className="flex flex-row items-center justify-center">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</div>
	);
}
