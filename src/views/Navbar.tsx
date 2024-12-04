import clsx from "clsx";

export function Navbar() {
	return (
		<nav className="mx-auto py-2 px-8 w-fit flex justify-center items-center gap-4 bg-background rounded-full border border-muted">
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
			className={clsx("py-1.5 px-4 rounded-lg transition-colors", "hover:bg-foreground hover:text-background hover:underline")}
		>
			{children}
		</a>
	);
}
