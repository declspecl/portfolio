import { TimelineEntry } from "@/components/timeline/TimelineEntry";
import { educationEntries, experienceEntries } from "@/lib/timeline/data";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

interface TimelineViewProps {
	selectedView?: "experience" | "education";
}

export function TimelineView({ selectedView }: TimelineViewProps) {
	// TODO: implement URL hash to select the correct tab
	console.log(selectedView);

	return (
		<section className="w-full" id="experience">
			<Tabs defaultValue="experience" id="education">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="experience">Experience</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>

				<TabsContent value="experience">
					<TimelineSection title="Experience">
						{experienceEntries.map((experience) => (
							<TimelineEntry key={experience.header} entry={experience} className="grow" />
						))}
					</TimelineSection>
				</TabsContent>

				<TabsContent value="education">
					<TimelineSection title="Education">
						{educationEntries.map((education) => (
							<TimelineEntry key={education.header} entry={education} className="grow" />
						))}
					</TimelineSection>
				</TabsContent>
			</Tabs>
		</section>
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
				<h1 className="font-clash-display text-5xl font-semibold">{title}</h1>
			</CardHeader>

			<CardContent className="relative flex flex-col">{children}</CardContent>
		</Card>
	);
}
