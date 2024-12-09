import { cn } from "@/lib/utils";
import { FaReact } from "react-icons/fa";
import { Technology } from "@/lib/common";
import { SiCplusplus, SiNextdotjs, SiNginx, SiPostgresql, SiSpringboot, SiTailwindcss, SiTypescript, SiVercel, SiVite } from "react-icons/si";
import { FaAws, FaFigma, FaJava, FaPython, FaRust } from "react-icons/fa6";

interface StaticBadgeProps {
	name: string;
	icon?: React.ReactNode | null;
	className?: string;
}

export function StaticBadge({ name, icon, className }: StaticBadgeProps) {
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
	return <StaticBadge name={Technology.React} icon={<FaReact />} className="bg-[#0e2442]" />;
}

export function TypeScriptBadge() {
	return <StaticBadge name={Technology.TypeScript} icon={<SiTypescript />} className="bg-[#00375c]" />;
}

export function ViteBadge() {
	return <StaticBadge name={Technology.Vite} icon={<SiVite />} className="bg-[#2c063d]" />;
}

export function NextJSBadge() {
	return <StaticBadge name={Technology.NextJS} icon={<SiNextdotjs />} className="bg-black" />;
}

export function TailwindCSSBadge() {
	return <StaticBadge name={Technology.TailwindCSS} icon={<SiTailwindcss />} className="bg-[#162144]" />;
}

export function PostgreSQLBadge() {
	return <StaticBadge name={Technology.PostgreSQL} icon={<SiPostgresql />} className="bg-[#211b63]" />;
}

export function PythonBadge() {
	return <StaticBadge name={Technology.Python} icon={<FaPython />} className="bg-[#7f720a]" />;
}

export function RustBadge() {
	return <StaticBadge name={Technology.Rust} icon={<FaRust />} className="bg-black" />;
}

export function CPPBadge() {
	return <StaticBadge name={Technology.CPP} icon={<SiCplusplus />} className="bg-[#004181]" />;
}

export function VercelBadge() {
	return <StaticBadge name={Technology.Vercel} icon={<SiVercel />} className="bg-black" />;
}

export function FigmaBadge() {
	return <StaticBadge name={Technology.Figma} icon={<FaFigma />} className="bg-[#5e0202]" />;
}

export function JavaBadge() {
	return <StaticBadge name={Technology.Java} icon={<FaJava />} className="bg-[#4b2b03]" />;
}

export function SpringBootBadge() {
	return <StaticBadge name={Technology.SpringBoot} icon={<SiSpringboot />} className="bg-[#2b4719]" />;
}

export function AWSBadge() {
	return <StaticBadge name={Technology.AWS} icon={<FaAws />} className="bg-[#141f2e]" />;
}

export function NginxBadge() {
	return <StaticBadge name={Technology.Nginx} icon={<SiNginx />} className="bg-[#0c5a29]" />;
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
		case Technology.Python:
			return <PythonBadge />;
		case Technology.Rust:
			return <RustBadge />;
		case Technology.CPP:
			return <CPPBadge />;
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
