import { projects } from "@/lib/projects/data";
import { Separator } from "@/components/ui/Separator";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export function ProjectsView() {
	return (
		<section id="projects">
			<SectionTitle text="Projects" />

			<Card>
				<CardContent className="flex flex-col gap-8 p-6">
					{projects.map((project, i) => (
						<>
							<ProjectShowcase key={project.name} project={project} direction={i % 2 === 0 ? "row-reverse" : "row"} />

							{i !== projects.length - 1 && <Separator key={`${project.name}-separator`} />}
						</>
					))}
				</CardContent>
			</Card>
		</section>
	);
}
