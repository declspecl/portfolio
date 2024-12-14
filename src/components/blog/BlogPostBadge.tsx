import { cn } from "@/lib/utils";
import { BlogPostTag } from "@/lib/blog/model";
import { LuBook, LuBrain, LuCode, LuDroplet, LuPersonStanding } from "react-icons/lu";

interface StaticBadgeProps {
	tag: string;
	icon?: React.ReactNode | null;
	className?: string;
}

function StaticBadge({ tag, icon, className }: StaticBadgeProps) {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-2 rounded-full border bg-background px-3.5 py-1 text-sm font-semibold text-foreground transition-colors",
				className
			)}
		>
			{icon}
			{tag}
		</div>
	);
}

export function TechnicalBadge() {
	return <StaticBadge tag={BlogPostTag.Technical} icon={<LuCode />} className="bg-[#262626]" />;
}

export function PersonalBadge() {
	return <StaticBadge tag={BlogPostTag.Personal} icon={<LuPersonStanding />} className="bg-[#380d49]" />;
}

export function EducationalBadge() {
	return <StaticBadge tag={BlogPostTag.Educational} icon={<LuBook />} className="bg-[#362312]" />;
}

export function SadBadge() {
	return <StaticBadge tag="Sad" icon={<LuDroplet />} className="bg-[#0f365a]" />;
}

export function PhilosophicalBadge() {
	return <StaticBadge tag="Philosophical" icon={<LuBrain />} className="bg-[#470b38]" />;
}

interface BlogPostBadgeProps {
	tag: BlogPostTag;
}

export function BlogPostBadge({ tag }: BlogPostBadgeProps) {
	switch (tag) {
		case BlogPostTag.Technical:
			return <TechnicalBadge />;
		case BlogPostTag.Personal:
			return <PersonalBadge />;
		case BlogPostTag.Educational:
			return <EducationalBadge />;
		case BlogPostTag.Sad:
			return <SadBadge />;
		case BlogPostTag.Philosophical:
			return <PhilosophicalBadge />;
	}
}
