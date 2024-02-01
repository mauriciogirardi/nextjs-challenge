import { render, screen } from "@testing-library/react"

import { Header } from "../header"

describe("<Header/>", () => {
  it("should be able to render the logo", () => {
    render(<Header />)
    expect(screen.getByText(/stand/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/car/i)).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "/")
  })

  it("should be able to render the profile", () => {
    render(<Header />)
    expect(screen.getByText(/mauricio girardi/i)).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /mauricio/i })).toBeInTheDocument()
    expect(
      screen.getByText(/devmauriciogirardi@gmail.com/i)
    ).toBeInTheDocument()
  })
})
