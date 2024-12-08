import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { educations, experiences } from "@/lib/timeline/data";
import { TimelineEntry } from "@/components/TimelineEntry";

export function TimelineView() {
	return (
		<div className="mx-auto max-w-[64rem]">
			<Tabs defaultValue="experience">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="experience">Experience</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>

				<TabsContent value="experience">
					<TimelineSection title="Experience">
						{experiences.map((experience) => (
							<TimelineEntry key={experience.header} entry={experience} className="grow" />
						))}
					</TimelineSection>
				</TabsContent>

				<TabsContent value="education">
					<TimelineSection title="Education">
						{educations.map((education) => (
							<TimelineEntry key={education.header} entry={education} className="grow" />
						))}
					</TimelineSection>
				</TabsContent>
			</Tabs>
		</div>
	);
}

interface TimelineSectionProps {
	title: string;
	children: React.ReactNode;
}

function TimelineSection({ title, children }: TimelineSectionProps) {
	return (
		<Card>
			<CardHeader>
				<h2 className="font-clash-display text-4xl font-semibold">{title}</h2>
			</CardHeader>

			<CardContent className="relative flex flex-col">{children}</CardContent>
		</Card>
	);
}
