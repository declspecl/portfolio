import { TimelineEntry } from "@/components/timeline/timeline-entry";
import { TimelineSwitcher } from "@/components/timeline/timeline-switcher";
import { Card, CardContent } from "@/components/ui/card";
import { educationEntries, experienceEntries } from "@/lib/timeline/data";

export function TimelineView() {
    return (
        <TimelineSwitcher
            experienceContent={
                <TimelineSection>
                    {experienceEntries.map((experience) => (
                        <TimelineEntry key={experience.header} entry={experience} className="grow" />
                    ))}
                </TimelineSection>
            }
            educationContent={
                <TimelineSection>
                    {educationEntries.map((education) => (
                        <TimelineEntry key={education.header} entry={education} className="grow" />
                    ))}
                </TimelineSection>
            }
        />
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
