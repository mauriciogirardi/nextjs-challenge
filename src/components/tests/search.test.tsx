/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"

import { Search } from "../search"

const mockPush = jest.fn()
const mockSearchParams = {
  get: jest.fn()
}
const mockFormMethods = {
  register: jest.fn(),
  handleSubmit: jest.fn(),
  reset: jest.fn()
}

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}))

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: jest.fn()
}))

describe("<Search/>", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("should be able to render the search form", () => {
    ;(useRouter as jest.Mock).mockReturnValue({ push: jest.fn() })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)
    ;(useForm as jest.Mock).mockReturnValue(mockFormMethods)

    render(<Search />)

    expect(screen.getByLabelText(/filtrar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/limpar os filtros/i)).toBeInTheDocument()
    expect(screen.getByRole("form")).toBeInTheDocument()
  })

  it("should be able to handles filter submission correctly", async () => {
    const mockFormMethods = {
      register: jest.fn(),
      handleSubmit: jest.fn((callback) =>
        callback({ car: "Toyota", model: "Camry" })
      ),
      reset: jest.fn()
    }

    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useForm as jest.Mock).mockReturnValue(mockFormMethods)

    render(<Search />)

    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: /filtrar/i }))
      expect(mockPush).toHaveBeenCalledWith("/search?car=Toyota&model=Camry")
    })
  })

  it("should be able to clear filter correctly", async () => {
    ;(useForm as jest.Mock).mockReturnValue(mockFormMethods)
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)

    render(<Search />)

    await userEvent.click(
      screen.getByRole("button", { name: /limpar os filtros/i })
    )

    expect(mockPush).toHaveBeenCalledWith("/search")

    expect(mockFormMethods.reset).toHaveBeenCalledWith({
      car: "",
      model: ""
    })
  })

  it("should be able to handles null correctly when both car and model are falsy", async () => {
    const mockFormMethods = {
      register: jest.fn(),
      handleSubmit: jest.fn((callback) => callback({ car: "", model: "" })),
      reset: jest.fn()
    }

    ;(useForm as jest.Mock).mockReturnValue(mockFormMethods)
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)

    render(<Search />)

    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: /filtrar/i }))
      expect(mockPush).not.toHaveBeenCalled()
    })
  })

  it("should be able to filter just car", async () => {
    const mockFormMethods = {
      register: jest.fn(),
      handleSubmit: jest.fn((callback) => callback({ car: "Toyota" })),
      reset: jest.fn()
    }

    ;(useForm as jest.Mock).mockReturnValue(mockFormMethods)
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)

    render(<Search />)

    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: /filtrar/i }))
      expect(mockPush).toHaveBeenCalledWith("/search?car=Toyota")
    })
  })

  it("should be able to filter just model", async () => {
    const mockFormMethods = {
      register: jest.fn(),
      handleSubmit: jest.fn((callback) => callback({ model: "Camry" })),
      reset: jest.fn()
    }

    ;(useForm as jest.Mock).mockReturnValue(mockFormMethods)
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)

    render(<Search />)

    await waitFor(() => {
      userEvent.click(screen.getByRole("button", { name: /filtrar/i }))
      expect(mockPush).toHaveBeenCalledWith("/search?model=Camry")
    })
  })
})
