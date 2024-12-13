import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { SectionTitle } from "@/components/typography/SectionTitle";

export function HeroSection() {
	return (
		<section id="hero" className="mx-auto max-w-[40rem]">
			<SectionTitle text="Hi, I'm Gavin D'Hondt." />

			<div className="mb-2 text-base">
				<p className="mb-2">I&apos;m a Jr. SDE at Amazon and Computer Science student at Oakland University</p>
				<p className="mb-2">
					I&apos;ve been programming for over seven years, and I am obsessed with learning. I&apos;m currently focused on building full-stack web
					solutions, particularly using cloud technologies, but I&apos;m always deep diving various branches of Computer Science.
				</p>
				<p>Outside of programming, I love learning new things, listening to music, and playing video games!</p>
			</div>

			<div className="mb-4 text-base">
				<p className="mb-2">This is what I&apos;m currently up to:</p>

				<HeroBadges />
			</div>

			<HeroButtons />
		</section>
	);
}
