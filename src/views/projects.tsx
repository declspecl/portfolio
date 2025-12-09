import { ProjectShowcase } from "@/components/projects/project-showcase";
import { SectionTitle } from "@/components/typography/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects/data";

export function ProjectsView() {
    return (
        <section id="projects">
            <SectionTitle text="Projects" />

            <Card>
                <CardContent className="flex flex-col gap-8 p-6">
                    {projects.map((project, i) => (
                        <div key={`project-${project.name}`} className="flex flex-col gap-8">
                            <ProjectShowcase project={project} direction={i % 2 === 0 ? "row-reverse" : "row"} />

                            {i !== projects.length - 1 && <Separator />}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
}
