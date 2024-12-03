import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import clsx from "clsx";

const buttonVariants = cva(
	clsx(
		"relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		"disabled:pointer-events-none disabled:opacity-50",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0"
	),
	{
		variants: {
			variant: {
				default: clsx(
					"bg-primary-foreground text-primary stroke-primary border-2 border-primary",
					"before:content-[''] before:-z-10 before:absolute before:top-0 before:left-0 before:w-[calc(100%+0.25rem)] before:h-[calc(100%+0.25rem)] before:bg-primary before:rounded-md",
					"hover:bg-primary hover:text-primary-foreground hover:stroke-primary-foreground"
				)
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10"
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
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
