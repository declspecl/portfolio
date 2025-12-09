import Link from "next/link";
import { cn } from "@/lib/utils";

interface DesktopNavbarProps {
	className?: string;
}

export function DesktopNavbar({ className }: DesktopNavbarProps) {
	return (
		<nav
			className={cn(
				"bg-background/80 sticky top-4 z-10 mx-auto flex w-fit items-center justify-center gap-8 rounded-full border px-8 py-3.5 backdrop-blur-xs",
				className
			)}
		>
			<NavbarLink href="/" useClientSideRouting>
				Home
			</NavbarLink>
			<NavbarLink href="/#about" useClientSideRouting>
				About
			</NavbarLink>
			<NavbarLink href="/#timeline" useClientSideRouting>
				Experience/Education
			</NavbarLink>
			<NavbarLink href="/#projects" useClientSideRouting>
				Projects
			</NavbarLink>
			<NavbarLink href="/blog" useClientSideRouting>
				Blog
			</NavbarLink>
			<NavbarLink href="/resume.pdf" openInNewTab>
				Resumé
			</NavbarLink>
		</nav>
	);
}

interface NavbarLinkProps {
	href: string;
	openInNewTab?: boolean;
	useClientSideRouting?: boolean;
	children: React.ReactNode;
}

function NavbarLink({ href, openInNewTab = false, useClientSideRouting, children }: NavbarLinkProps) {
	const Comp = useClientSideRouting ? Link : "a";

	return (
		<Comp
			href={href}
			target={openInNewTab ? "_blank" : "_self"}
			className={
				"before:bg-primary relative before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-0 before:-translate-x-1/2 before:transition-[width] before:duration-200 before:content-[''] hover:before:w-full"
			}
		>
			{children}
		</Comp>
	);
}
