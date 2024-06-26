import clsx from "clsx";
import { inter, jbMono } from "@/Fonts";
import Section from "@/components/Layout/Section";
import SectionText from "@/components/Typography/SectionText";
import Image from "next/image";

export default function About() {
    return (
        <Section>
            <SectionText id="about">About</SectionText>

            <div className={clsx(
                "flex flex-col-reverse gap-4",
                "md:flex-row md:justify-center"
            )}>
                <div className={clsx(
                    "my-auto flex flex-col gap-5",
                    "md:flex-1"
                )}>
                    <div className={clsx(
                        "flex flex-col gap-3",
                        jbMono.className
                    )}>
                        <h2 className="text-4xl text-primary-200 font-medium">
                            Hello!
                        </h2>

                        <h3 className={clsx(
                            "text-2xl text-text"
                        )}>
                            I&apos;m Gavin, a student and software engineer.
                        </h3>
                    </div>

                    <div className={clsx(
                        "grow flex flex-col gap-3 text-text text-base",
                        "lg:text-lg",
                        inter.className
                    )}>
                        <p>
                            I am currently a sophomore at Oakland University for Computer Science.
                            I have a 4.0 GPA after completing 41 credits, and I am expected to graduate in April 2026.
                        </p>

                        <p>
                            I have been programming for over 6 years, and it is by far my greatest passion.
                            I love sharing this passion with others, be it through tutoring, mentorship, or forcing my friends to build projects with me.
                        </p>

                        <p>
                            Outside of academics, I enjoy playing video games, playing instruments, and, generally, learning.
                            I love to chat with people and learn about their interests, so please, feel free to <a href="#contact" className="underline">contact me</a>!
                        </p>

                        <p>
                            Also, if you would like to learn more about me, check out my <a href="https://blog.gavindhondt.com" target="_blank" className="underline">blog website</a>!
                        </p>
                    </div>
                </div>

                <div className="md:relative md:flex-1 md:min-h-[575px]">
                    <Image
                        src="/senior-pic.webp"
                        alt="My senior picture"
                        width={917}
                        height={1157}
                        loading="eager"
                        className={clsx(
                            "md:absolute md:w-full md:h-full md:object-cover md:object-top"
                        )}
                    />
                </div>
            </div>
        </Section>
    );
}
