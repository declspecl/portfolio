import clsx from "clsx";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	clsx(
		"relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		"disabled:pointer-events-none",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0"
	),
	{
		variants: {
			variant: {
				default: clsx(
					"bg-background text-primary stroke-primary border-2 border-primary",
					"hover:bg-primary hover:text-background hover:stroke-primary-foreground",
					"disabled:border-primary-foreground"
				)
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
				"icon-sm": "h-8 w-8"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";

	return (
		<div className="relative inline-flex before:absolute before:left-0 before:top-0 before:h-[calc(100%+0.15rem)] before:w-[calc(100%+0.15rem)] before:rounded-md before:bg-primary before:content-['']">
			<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		</div>
	);
});
Button.displayName = "Button";
