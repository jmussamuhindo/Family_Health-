import { Loader } from "@/components/Loader"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[8px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-white text-[#212121] hover:bg-white/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 p-2",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string
  icon?: React.ReactElement
  iconPosition?: "right" | "left"
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      text,
      icon,
      iconPosition = "right",
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          iconPosition === "left" && "flex-row-reverse",
          icon && "gap-2"
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {!text ? (
              <>{children}</>
            ) : (
              <>
                <span className="px-2 py-[2px] text-white">{text}</span>
                <span>{icon}</span>
              </>
            )}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
