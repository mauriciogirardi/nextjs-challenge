import { render, screen } from "@testing-library/react"

import { CardCar } from "../card-car"

const mockCar = {
  "id": 2,
  "img": "/car.jpg",
  "car": "maserati",
  "model": "430",
  "color": "blue",
  "modelYear": 1991,
  "vin": "2FMPK3J94FB631826",
  "price": 1660.01,
  "availability": false
}

describe('<CardCar/>', () => {
  it('should be able to render the component correctly', () => {
    render(<CardCar car={mockCar} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/car-details/2')
    expect(screen.getByRole('heading', { name: /maserati/i, level: 2 }))
      .toBeInTheDocument()
    expect(screen.getByRole('img', {
      name: /imagem do carro maserati, modelo 430, ano 1991/i
    })).toBeInTheDocument()
    expect(screen.getByText(/indisponível/i)).toBeInTheDocument()
    expect(screen.getByText(/430/i)).toBeInTheDocument()
    expect(screen.getByText(/1660,01 €/i)).toBeInTheDocument()
    expect(screen.getByText(/1991/i)).toBeInTheDocument()
  })
})
