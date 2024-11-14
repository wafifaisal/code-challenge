import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Arrow icon component with customizable size and color
const ArrowRight = ({
  size = 20,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${size} w-${size} ml-2`} // dynamic size and margin
    viewBox="0 0 20 20"
    fill={color}
  >
    <path
      fillRule="evenodd"
      d="M10 18a1 1 0 01-.707-1.707l5.293-5.293H2a1 1 0 110-2h12.586l-5.293-5.293A1 1 0 0110 2a1 1 0 011 1v14a1 1 0 01-1 1z"
      clipRule="evenodd"
    />
  </svg>
);

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  rightArrow?: boolean; // New prop to control arrow visibility
  arrowSize?: number; // Optional prop for custom arrow size
  arrowColor?: string; // Optional prop for custom arrow color
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      rightArrow = false,
      arrowSize = 20,
      arrowColor = "currentColor",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.children} {/* Render button text/children */}
        {rightArrow && <ArrowRight size={arrowSize} color={arrowColor} />}{" "}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
