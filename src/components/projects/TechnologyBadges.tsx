import { cn } from "@/lib/utils";
import { FaReact } from "react-icons/fa";
import { Technology } from "@/lib/projects/model";
import { SiNextdotjs, SiNginx, SiPostgresql, SiSpringboot, SiTailwindcss, SiTypescript, SiVercel, SiVite } from "react-icons/si";
import { FaAws, FaFigma, FaJava, FaRust } from "react-icons/fa6";

interface BadgeProps {
	name: string;
	icon: React.ReactNode;
	className?: string;
}

function Badge({ name, icon, className }: BadgeProps) {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-2 rounded-full border bg-background px-3.5 py-1 text-sm font-semibold text-foreground transition-colors",
				className
			)}
		>
			{icon}
			{name}
		</div>
	);
}

export function ReactBadge() {
	return <Badge name={Technology.React} icon={<FaReact />} className="bg-[#0e2442]" />;
}

export function TypeScriptBadge() {
	return <Badge name={Technology.TypeScript} icon={<SiTypescript />} className="bg-[#00375c]" />;
}

export function ViteBadge() {
	return <Badge name={Technology.Vite} icon={<SiVite />} className="bg-[#2c063d]" />;
}

export function NextJSBadge() {
	return <Badge name={Technology.NextJS} icon={<SiNextdotjs />} className="bg-black" />;
}

export function TailwindCSSBadge() {
	return <Badge name={Technology.TailwindCSS} icon={<SiTailwindcss />} className="bg-[#162144]" />;
}

export function PostgreSQLBadge() {
	return <Badge name={Technology.PostgreSQL} icon={<SiPostgresql />} className="bg-[#211b63]" />;
}

export function RustBadge() {
	return <Badge name={Technology.Rust} icon={<FaRust />} className="bg-black" />;
}

export function VercelBadge() {
	return <Badge name={Technology.Vercel} icon={<SiVercel />} className="bg-black" />;
}

export function FigmaBadge() {
	return <Badge name={Technology.Figma} icon={<FaFigma />} className="bg-[#5e0202]" />;
}

export function JavaBadge() {
	return <Badge name={Technology.Java} icon={<FaJava />} className="bg-[#4b2b03]" />;
}

export function SpringBootBadge() {
	return <Badge name={Technology.SpringBoot} icon={<SiSpringboot />} className="bg-[#2b4719]" />;
}

export function AWSBadge() {
	return <Badge name={Technology.AWS} icon={<FaAws />} className="bg-[#141f2e]" />;
}

export function NginxBadge() {
	return <Badge name={Technology.Nginx} icon={<SiNginx />} className="bg-[#0c5a29]" />;
}

interface TechnologyBadgeProps {
	technology: Technology;
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
	switch (technology) {
		case Technology.React:
			return <ReactBadge />;
		case Technology.TypeScript:
			return <TypeScriptBadge />;
		case Technology.Vite:
			return <ViteBadge />;
		case Technology.NextJS:
			return <NextJSBadge />;
		case Technology.TailwindCSS:
			return <TailwindCSSBadge />;
		case Technology.PostgreSQL:
			return <PostgreSQLBadge />;
		case Technology.Rust:
			return <RustBadge />;
		case Technology.Vercel:
			return <VercelBadge />;
		case Technology.Figma:
			return <FigmaBadge />;
		case Technology.Java:
			return <JavaBadge />;
		case Technology.SpringBoot:
			return <SpringBootBadge />;
		case Technology.AWS:
			return <AWSBadge />;
		case Technology.Nginx:
			return <NginxBadge />;
	}
}
