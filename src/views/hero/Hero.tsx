import { Button } from "@/components/ui/Button";
import { HeroButtons } from "./HeroButtons";

export function HeroSection() {
	return (
		<section id="hero" className="mx-auto max-w-[40rem]">
			<h1 className="font-clash-display text-5xl font-semibold mb-4">Hi, I&apos;m Gavin D&apos;Hondt.</h1>

			<div className="text-base text-muted-foreground mb-4">
				<p className="mb-2">I&apos;m a Jr. SDE at Amazon and Computer Science student at Oakland University</p>
				<p className="mb-2">
					I&apos;ve been programming for over seven years, and I am obsessed with learning. I&apos;m currently focused on building full-stack web
					solutions, particularly using cloud technologies, but I&apos;m always dipping my toes into various branches of Computer Science!
				</p>
				<p>Outside of programming, I love exploring other cultures, learning how things work, and playing video games!</p>
			</div>

			<div className="flex flex-col gap-4 xs:flex-row xs:items-center">
				<div className="flex flex-row gap-4">
					<Button asChild>
						<a href="#experience">Learn more</a>
					</Button>
					<Button asChild>
						<a href="/resume.pdf" target="_blank">
							Resumé
						</a>
					</Button>
				</div>

				<HeroButtons />
			</div>
		</section>
	);
}