"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MobileNavbarProps {
	className?: string;
}

export function MobileNavbar({ className }: MobileNavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={cn("sticky top-4 z-10", className)}>
			<button
				className={cn(
					"border-primary/40 bg-background hover:border-primary mx-auto flex w-full flex-col items-center justify-center border py-3.5 text-lg font-medium backdrop-blur-xs transition-[border-color]",
					{ "rounded-2xl": !isOpen },
					{ "border-b-primary/40 rounded-2xl rounded-b-none": isOpen }
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				Gavin D&apos;Hondt
			</button>

			<nav
				className={cn(
					"border-primary/40 bg-background absolute flex w-full flex-col items-center gap-2 rounded-b-2xl border border-t-0 py-4 backdrop-blur-xs",
					{ hidden: !isOpen }
				)}
			>
				<NavbarLink href="/" setIsOpen={setIsOpen} useClientSideRouting>
					Home
				</NavbarLink>
				<NavbarLink href="/#about" setIsOpen={setIsOpen} useClientSideRouting>
					About
				</NavbarLink>
				<NavbarLink href="/#timeline" setIsOpen={setIsOpen} useClientSideRouting>
					Experience/Education
				</NavbarLink>
				<NavbarLink href="/#projects" setIsOpen={setIsOpen} useClientSideRouting>
					Projects
				</NavbarLink>
				<NavbarLink href="/blog" setIsOpen={setIsOpen} useClientSideRouting>
					Blog
				</NavbarLink>
				<NavbarLink href="/resume.pdf" setIsOpen={setIsOpen} openInNewTab>
					Resumé
				</NavbarLink>
			</nav>
		</div>
	);
}

interface NavbarLinkProps {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
	href: string;
	openInNewTab?: boolean;
	useClientSideRouting?: boolean;
	children: React.ReactNode;
}

function NavbarLink({ setIsOpen, href, openInNewTab = false, useClientSideRouting, children }: NavbarLinkProps) {
	const Comp = useClientSideRouting ? Link : "a";

	return (
		<Comp href={href} target={openInNewTab ? "_blank" : "_self"} className="hover:underline" onClick={() => setIsOpen && setIsOpen(false)}>
			{children}
		</Comp>
	);
}
