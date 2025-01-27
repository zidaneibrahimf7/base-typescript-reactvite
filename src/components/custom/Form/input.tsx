import { Input as InputUI } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { forwardRef, InputHTMLAttributes } from "react"

// Props untuk Input
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};


const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props}, ref) => {
  return (
    <InputUI
      className={cn(
        "w-full",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

export { Input }