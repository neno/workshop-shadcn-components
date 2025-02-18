import { Button, ButtonProps } from "./button"
import { cn } from "@/lib/utils"
import * as React from "react"

// ✅ Extend the variant type
interface SuccessButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "success" | ButtonProps["variant"] // Add "success" while keeping existing variants
}

const SuccessButton = React.forwardRef<HTMLButtonElement, SuccessButtonProps>(
  ({ className, variant = "success", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant as ButtonProps["variant"]} // Ensure compatibility
        className={cn(variant === "success" && "bg-success text-success-foreground hover:bg-success/90", className)}
        {...props}
      />
    )
  }
)

SuccessButton.displayName = "SuccessButton"

export { SuccessButton }
