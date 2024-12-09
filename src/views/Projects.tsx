import { projects } from "@/lib/projects/data";
import { Card, CardContent } from "@/components/ui/Card";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export function ProjectsView() {
	return (
		<div>
			<h2 className="mb-2 font-clash-display text-4xl font-semibold">Projects</h2>

			<Card>
				{/* TODO: revisit and see if i like this more */}
				{/* <CardHeader>
                    <h2 className="font-clash-display text-4xl font-semibold">Projects</h2>
                </CardHeader> */}

				<CardContent className="p-6">
					{projects.map((project) => (
						<ProjectShowcase key={project.name} project={project} />
					))}
				</CardContent>
			</Card>
		</div>
	);
}
