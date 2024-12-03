export function Navbar() {
	return (
		<nav className="mx-auto py-4 px-12 w-fit flex justify-center items-center gap-8 rounded-full border border-muted">
			<NavbarLink href="#hero">About</NavbarLink>
			<NavbarLink href="#experience">Experience</NavbarLink>
			<NavbarLink href="#education">Education</NavbarLink>
			<NavbarLink href="#projects">Projects</NavbarLink>
			<NavbarLink href="/resume.pdf" openInNewTab>
				Resume
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
		<a href={href} target={openInNewTab ? "_blank" : "_self"} className="hover:underline">
			{children}
		</a>
	);
}
