import clsx from "clsx";

export function Navbar() {
	return (
		<nav className="sticky top-8 z-10 mx-auto flex w-fit items-center justify-center gap-4 rounded-full border border-muted bg-background/80 px-8 py-2 backdrop-blur-sm">
			<NavbarLink href="#hero">About</NavbarLink>
			<NavbarLink href="#experience">Experience</NavbarLink>
			<NavbarLink href="#education">Education</NavbarLink>
			<NavbarLink href="#projects">Projects</NavbarLink>
			<NavbarLink href="/resume.pdf" openInNewTab>
				Resumé
			</NavbarLink>
			<NavbarLink href="https://blog.gavindhondt.com" openInNewTab>
				Blog
			</NavbarLink>
		</nav>
	);
}

interface NavbarLinkProps {
	href: string;
	openInNewTab?: boolean;
	children: React.ReactNode;
}

function NavbarLink({ href, openInNewTab = false, children }: NavbarLinkProps) {
	return (
		<a
			href={href}
			target={openInNewTab ? "_blank" : "_self"}
			className={clsx("rounded-lg px-4 py-1.5 transition-colors", "hover:bg-foreground hover:text-background hover:underline")}
		>
			{children}
		</a>
	);
}
