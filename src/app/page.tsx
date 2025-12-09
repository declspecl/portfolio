import { HeroSection } from "@/views/hero";
import { ProjectsView } from "@/views/projects";
import { TimelineView } from "@/views/timeline";

export default function Home() {
    return (
        <>
            <HeroSection />

            <div className="my-24" />

            <TimelineView />

            <div className="my-24" />

            <ProjectsView />
        </>
    );
}
