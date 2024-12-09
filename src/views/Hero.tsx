import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";

export function HeroSection() {
	return (
		<section id="hero" className="mx-auto max-w-[40rem]">
			<h1 className="mb-4 font-clash-display text-5xl font-semibold">Hi, I&apos;m Gavin D&apos;Hondt.</h1>

			<div className="mb-2 text-base text-muted-foreground">
				<p className="mb-2">I&apos;m a Jr. SDE at Amazon and Computer Science student at Oakland University</p>
				<p className="mb-2">
					I&apos;ve been programming for over seven years, and I am obsessed with learning. I&apos;m currently focused on building full-stack web
					solutions, particularly using cloud technologies, but I&apos;m always dipping my toes into various branches of Computer Science!
				</p>
				<p>Outside of programming, I love learning new things, listening to music, and playing video games!</p>
			</div>

			<div className="mb-4 text-base text-muted-foreground">
				<p className="mb-2">This is what I&apos;m currently up to:</p>

				<HeroBadges />
			</div>

			<HeroButtons />
		</section>
	);
}
