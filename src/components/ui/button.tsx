import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[hsl(258_90%_66%)] via-[hsl(332_80%_65%)] to-[hsl(14_100%_67%)] text-white hover:shadow-[0_0_60px_hsl(258_90%_66%/0.6)] transform hover:scale-105 transition-all duration-300 font-semibold relative overflow-hidden",
        glass: "glass text-foreground hover:bg-white/8 border border-white/15 backdrop-blur-xl transition-all duration-300",
        glow: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-[0_0_30px_hsl(258_90%_66%/0.4)] hover:shadow-[0_0_60px_hsl(258_90%_66%/0.8)] transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
        hero: "h-16 px-12 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
