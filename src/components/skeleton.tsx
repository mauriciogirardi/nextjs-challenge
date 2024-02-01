import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("animate-pulse rounded-md bg-zinc-500/10", className)}
      {...props}
    />
  )
}
