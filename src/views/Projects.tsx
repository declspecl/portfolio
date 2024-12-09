import { projects } from "@/lib/projects/data";
import { Separator } from "@/components/ui/Separator";
import { Card, CardContent } from "@/components/ui/Card";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export function ProjectsView() {
	return (
		<section id="projects">
			<h1 className="mb-2 font-clash-display text-5xl font-semibold">Projects</h1>

			<Card>
				{/* TODO: revisit and see if i like this more */}
				{/* <CardHeader>
                    <h2 className="font-clash-display text-4xl font-semibold">Projects</h2>
                </CardHeader> */}

				<CardContent className="flex flex-col gap-8 p-6">
					{projects.map((project, i) => (
						<>
							<ProjectShowcase key={project.name} project={project} direction={i % 2 === 0 ? "row-reverse" : "row"} />

							{i !== projects.length - 1 && <Separator />}
						</>
					))}
				</CardContent>
			</Card>
		</section>
	);
}
