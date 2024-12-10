"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface MobileNavbarProps {
	className?: string;
}

export function MobileNavbar({ className }: MobileNavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sticky top-8 z-10">
			<button
				className={cn(
					"mx-auto flex w-full flex-col items-center justify-center rounded-lg border border-muted bg-background/90 py-3.5 text-lg font-medium backdrop-blur-sm",
					{ "rounded-lg border": !isOpen },
					{ "rounded-lg rounded-b-none border border-b-0": isOpen },
					className
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				Gavin D&apos;Hondt
			</button>

			<nav
				className={cn(
					"absolute flex h-auto w-full flex-col items-center gap-2 rounded-b-lg border border-t-0 bg-background/90 py-4 backdrop-blur-sm transition-[height]",
					{ "hidden h-0": !isOpen }
				)}
			>
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
		</div>
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
