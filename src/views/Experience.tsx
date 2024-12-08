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
							<h2 className="font-clash-display text-4xl font-semibold">Experience</h2>
						</CardHeader>

						<CardContent className="relative flex flex-col">
							{experiences.map((experience) => (
								<ExperienceEntry key={experience.company} experience={experience} className="grow" />
							))}
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="education">
					<h2 className="font-clash-display text-4xl font-semibold">Education</h2>
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
		<div className={cn("flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", className)}>
			<div className="sm:w-0 sm:grow">
				<p className="text-2xl font-medium">
					{formatExperienceDate(dateRange[0])} - {formatExperienceDate(dateRange[1])}
				</p>
				<p className="text-lg text-muted-foreground">{location}</p>
			</div>

			<div className="sm:w-0 sm:grow">
				<h3 className="font-clash-display text-3xl font-medium">{company}</h3>
				<p className="mb-2 text-2xl font-medium text-muted-foreground">{position}</p>

				<ul>
					{bullets.map((bullet, i) => (
						<li key={`${company}-${position}-bullet-${i}`} className="list-inside list-disc">
							{bullet}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
