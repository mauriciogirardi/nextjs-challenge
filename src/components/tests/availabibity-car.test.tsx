import { render, screen } from "@testing-library/react"

import { AvailabilityCar } from "../availability-car"

describe("<AvailabilityCar/>", () => {
  it("should be able to render the component correctly as available", () => {
    render(<AvailabilityCar availability />)
    expect(screen.getByText(/disponível/i)).toBeInTheDocument()
    expect(screen.getByText(/disponível/i)).toHaveClass("bg-green-200")
  })

  it("should be able to render the component correctly as unavailable", () => {
    render(<AvailabilityCar availability={false} />)
    expect(screen.getByText(/indisponível/i)).toBeInTheDocument()
    expect(screen.getByText(/indisponível/i)).toHaveClass("bg-red-200")
  })
})
