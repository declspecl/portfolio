import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

const clashDisplay = localFont({
	src: [
		{
			path: "./fonts/ClashDisplay-Variable.woff2"
		},
		{
			path: "./fonts/ClashDisplay-Variable.woff"
		},
		{
			path: "./fonts/ClashDisplay-Variable.ttf"
		}
	],
	variable: "--font-clash-display",
	weight: "200 700"
});

const satoshi = localFont({
	src: [
		{
			path: "./fonts/Satoshi-Variable.woff2"
		},
		{
			path: "./fonts/Satoshi-Variable.woff"
		},
		{
			path: "./fonts/Satoshi-Variable.ttf"
		}
	],
	variable: "--font-satoshi",
	weight: "300 900"
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<body className={`${clashDisplay.variable} ${satoshi.variable} antialiased`}>{children}</body>
		</html>
	);
}
