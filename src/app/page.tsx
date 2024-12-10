import { Navbar } from "@/views/Navbar";
import { HeroSection } from "@/views/Hero";
import { TimelineView } from "@/views/Timeline";
import { ProjectsView } from "@/views/Projects";
import { GridBackground } from "@/components/graphics/GridBackground";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";

export default function Home() {
	return (
		<main className="relative p-8 font-satoshi">
			<GridBackground className="absolute inset-0 h-[110vh] w-screen" />

			<Navbar />

			<div className="my-8 sm:my-24" />

			<HeroSection />

			<div className="my-24" />

			<ResponsiveContainer>
				<TimelineView />

				<div className="my-24" />

				<ProjectsView />
			</ResponsiveContainer>
		</main>
	);
}
