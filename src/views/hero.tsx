import { HeroBadges } from "@/components/hero/hero-badges";
import { HeroButtons } from "@/components/hero/hero-buttons";
import { SectionTitle } from "@/components/typography/section-title";

export function HeroSection() {
    return (
        <section id="about" className="mx-auto max-w-160">
            <SectionTitle text="Hi, I'm Gavin D'Hondt." />

            <div className="mb-2 text-base">
                <p className="mb-2">I&apos;m a Jr. SDE at Amazon and Computer Science student at Oakland University</p>
                <p className="mb-2">
                    I&apos;ve been programming for over seven years, and I am obsessed with learning. I&apos;m currently focused on building
                    full-stack web solutions, particularly using cloud technologies, but I&apos;m always deep diving various branches of
                    Computer Science.
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
