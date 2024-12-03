import { GridBackground } from "@/components/graphics/GridBackground";
import { HeroSection } from "@/views/Hero";
import { Navbar } from "@/views/Navbar";

export default function Home() {
	return (
		<main className="relative font-satoshi p-8">
			<GridBackground className="absolute inset-0 w-screen h-screen" />

			<Navbar />
			<div className="my-24" />
			<HeroSection />
		</main>
	);
}
