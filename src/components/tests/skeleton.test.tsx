import { render } from "@testing-library/react"

import { Skeleton } from "../skeleton"

describe("<Skeleton/>", () => {
  it("should be able to render the component correctly", () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toHaveClass(
      "bg-zinc-500/10 animate-pulse rounded-md"
    )
  })

  it("should be able to pass new className", () => {
    const { container } = render(<Skeleton className="h-3 w-8" />)
    expect(container.firstChild).toHaveClass("w-8 h-3")
  })
})
