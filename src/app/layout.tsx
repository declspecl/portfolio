import "./globals.css";
import { GridBackground } from "@/components/graphics/grid-background";
import { ResponsiveContainer } from "@/components/layout/responsive-container";
import { Navbar } from "@/views/navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import type { Person, WebSite, WithContext } from "schema-dts";

const clashDisplay = localFont({
    src: "./fonts/ClashDisplay-Variable.woff2",
    variable: "--font-clash-display",
    weight: "200 700",
});

const satoshi = localFont({
    src: "./fonts/Satoshi-Variable.woff2",
    variable: "--font-satoshi",
    weight: "300 900",
});

export const metadata: Metadata = {
    title: "Gavin D'Hondt",
    category: "software engineer",
    description: "I'm Gavin D'Hondt. I'm a Jr. SDE at Amazon and Computer Science student at Oakland University",
    authors: { name: "Gavin D'Hondt" },
    keywords: ["Gavin D'Hondt", "Software engineer", "SWE", "Developer", "Full stack", "Amazon", "Oakland University", "Student"],
    metadataBase: new URL("https://www.gavindhondt.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: "https://www.gavindhondt.com",
        title: "Gavin D'Hondt",
        siteName: "Gavin D'Hondt",
        description: "I'm Gavin D'Hondt. I'm a Jr. SDE at Amazon and Computer Science student at Oakland University",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Gavin D'Hondt Portfolio" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gavin D'Hondt",
        description: "I'm Gavin D'Hondt. I'm a Jr. SDE at Amazon and Computer Science student at Oakland University",
        site: "@gavindhondt",
        creator: "@gavindhondt",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Gavin D'Hondt Portfolio" }],
    },
    icons: { icon: "/favicon.ico" },
    manifest: "/manifest.webmanifest",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

const personalJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gavin D'Hondt",
    url: "https://www.gavindhondt.com",
    image: "/icon.png",
};

const webSiteJsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gavin D'Hondt",
    url: "https://www.gavindhondt.com",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <head>
                {process.env.NODE_ENV === "development" && (
                    <>
                        <Script src="//unpkg.com/react-grab/dist/index.global.js" crossOrigin="anonymous" strategy="beforeInteractive" />
                        <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
                    </>
                )}
            </head>

            <body className={`${clashDisplay.variable} ${satoshi.variable} relative antialiased`}>
                <GridBackground className="absolute inset-0 h-full min-h-screen w-full" />

                <ResponsiveContainer>
                    <main className="font-satoshi p-8">
                        <Navbar />

                        <div className="my-8 sm:my-24" />

                        {children}
                    </main>
                </ResponsiveContainer>

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalJsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
            </body>
        </html>
    );
}
