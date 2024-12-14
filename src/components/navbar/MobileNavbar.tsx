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
					"mx-auto flex w-full flex-col items-center justify-center border border-primary/40 bg-background py-3.5 text-lg font-medium backdrop-blur-sm transition-[border-color] hover:border-primary",
					{ "rounded-2xl": !isOpen },
					{ "rounded-2xl rounded-b-none border-b-primary/40": isOpen }
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				Gavin D&apos;Hondt
			</button>

			<nav
				className={cn(
					"absolute flex w-full flex-col items-center gap-2 rounded-b-2xl border border-t-0 border-primary/40 bg-background py-4 backdrop-blur-sm",
					{ hidden: !isOpen }
				)}
			>
				<NavbarLink setIsOpen={setIsOpen} href="#about">
					About
				</NavbarLink>
				<NavbarLink setIsOpen={setIsOpen} href="#timeline">
					Education/Education
				</NavbarLink>
				<NavbarLink setIsOpen={setIsOpen} href="#projects">
					Projects
				</NavbarLink>
				<NavbarLink href="/resume.pdf" openInNewTab>
					Resumé
				</NavbarLink>
				<NavbarLink href="/blog" useClientSideRouting>
					Blog
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
