import { GridBackground } from "@/components/graphics/GridBackground";
import { ExperienceView } from "@/views/Experience";
import { HeroSection } from "@/views/hero/Hero";
import { Navbar } from "@/views/Navbar";

export default function Home() {
	return (
		<main className="relative p-8 font-satoshi">
			<GridBackground className="absolute inset-0 h-screen w-screen" />

			<Navbar />
			<div className="my-24" />
			<HeroSection />
			<div className="my-24" />
			<ExperienceView />
		</main>
	);
}
