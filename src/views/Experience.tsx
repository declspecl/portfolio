import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Experience, experiences, formatExperienceDate } from "@/lib/experience";
import { cn } from "@/lib/utils";

export function ExperienceView() {
	return (
		<div className="mx-auto max-w-[64rem]">
			<Tabs defaultValue="experience">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="experience">Experience</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>

				<TabsContent value="experience">
					<Card>
						<CardHeader>
							<h2 className="text-4xl font-clash-display font-semibold">Experience</h2>
						</CardHeader>

						<CardContent className="relative flex flex-col">
							{experiences.map((experience) => (
								<ExperienceEntry key={experience.company} experience={experience} className="grow" />
							))}
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="education">
					<h2 className="text-4xl font-clash-display font-semibold">Education</h2>
				</TabsContent>
			</Tabs>
		</div>
	);
}

interface ExperienceEntryProps {
	className?: string;
	experience: Experience;
}

function ExperienceEntry({ className, experience }: ExperienceEntryProps) {
	const { company, position, dateRange, location, bullets } = experience;

	return (
		<div className={cn("flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center", className)}>
			<div>
				<p className="text-2xl font-medium">
					{formatExperienceDate(dateRange[0])} - {formatExperienceDate(dateRange[1])}
				</p>
				<p className="text-lg text-muted-foreground">{location}</p>
			</div>

			<div>
				<h3 className="text-3xl font-medium font-clash-display">{company}</h3>
				<p className="text-2xl font-medium text-muted-foreground">{position}</p>

				<ul>
					{bullets.map((bullet, i) => (
						<li key={`${company}-${position}bullet-${i}`} className="list-disc list-inside">
							{bullet}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
