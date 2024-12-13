import { Card, CardContent } from "@/components/ui/Card";
import { TimelineEntry } from "@/components/timeline/TimelineEntry";
import { educationEntries, experienceEntries } from "@/lib/timeline/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { SectionTitle } from "@/components/typography/SectionTitle";

interface TimelineViewProps {
	selectedView?: "experience" | "education";
}

export function TimelineView({ selectedView }: TimelineViewProps) {
	// TODO: implement URL hash to select the correct tab
	console.log(selectedView);

	return (
		<section className="w-full" id="timeline">
			{/* TODO: make this dynamic on selected tab */}
			<SectionTitle text="Experience" />

			<Tabs defaultValue="experience" id="education">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="experience">Experience</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>

				<TabsContent value="experience">
					<TimelineSection>
						{experienceEntries.map((experience) => (
							<TimelineEntry key={experience.header} entry={experience} className="grow" />
						))}
					</TimelineSection>
				</TabsContent>

				<TabsContent value="education">
					<TimelineSection>
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
	children: React.ReactNode;
}

function TimelineSection({ children }: TimelineSectionProps) {
	return (
		<Card>
			<CardContent className="relative flex flex-col p-6">{children}</CardContent>
		</Card>
	);
}
