export function Navbar() {
	return (
		<nav className="sticky top-8 z-10 mx-auto flex w-fit items-center justify-center gap-8 rounded-full border border-muted bg-background/80 px-8 py-3.5 backdrop-blur-sm">
			<NavbarLink href="#hero">About</NavbarLink>
			<NavbarLink href="#timeline">Education/Education</NavbarLink>
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
			className={
				"relative before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-0 before:-translate-x-1/2 before:bg-primary before:transition-[width] before:duration-200 before:content-[''] hover:before:w-full"
			}
		>
			{children}
		</a>
	);
}
