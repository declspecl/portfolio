import clsx from "clsx";

interface MdxLayoutProps {
	children: React.ReactNode;
}

export default function MdxLayout({ children }: MdxLayoutProps) {
	return (
		<div
			className={clsx(
				"prose mx-auto font-satoshi text-foreground prose-strong:text-foreground",
				"prose-headings:mb-2 prose-headings:font-clash-display prose-headings:font-semibold prose-headings:text-foreground",
				"prose-h1:text-5xl",
				"prose-h2:text-4xl",
				"prose-h3:text-3xl",
				"prose-h4:text-2xl",
				"prose-h5:text-xl",
				"prose-h6:text-lg"
			)}
		>
			{children}
		</div>
	);
}
