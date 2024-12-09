"use client";

import { IconContext } from "react-icons";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export function HeroButtons() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-4">
			<Button asChild>
				<a href="#experience">Learn more</a>
			</Button>
			<Button asChild>
				<a href="/resume.pdf" target="_blank">
					Resumé
				</a>
			</Button>

			<IconContext.Provider value={{ size: "1.5rem" }}>
				<Button size="icon" asChild>
					<a href="https://github.com/declspecl" target="_blank">
						<LuGithub />
					</a>
				</Button>
				<Button size="icon" asChild>
					<a href="https://www.linkedin.com/in/gavindhondt/" target="_blank">
						<LuLinkedin />
					</a>
				</Button>
				<Button size="icon" asChild>
					<a href="mailto:gavindhondt@hotmail.com">
						<LuMail />
					</a>
				</Button>
			</IconContext.Provider>
		</div>
	);
}