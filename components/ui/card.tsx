import * as React from "react"
import { cn } from "@/lib/utils"

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
      {...props}
    />
  )
}
