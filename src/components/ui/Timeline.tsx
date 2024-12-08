"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineProps {
	className?: string;
}

export function Timeline({ className }: TimelineProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.clientHeight);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({ target: ref, offset: ["start 10%", "90% end"] });
	const scrollY = useTransform(scrollYProgress, [0, 1], [0, height]);

	return (
		<div ref={ref} className={cn("relative h-auto w-2 rounded-full bg-muted", className)}>
			<motion.div style={{ height: scrollY }} className="absolute top-0 z-10 w-full rounded-full bg-primary" />
		</div>
	);
}
