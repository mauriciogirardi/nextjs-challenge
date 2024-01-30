import { z } from 'zod'

import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: { cardId: string } },
) {
  const cardId = z.coerce.number().parse(params.cardId)

  const car = data.cars.find((car) => car.id === cardId)

  if (!car) {
    return Response.json({ message: 'Car not found!' }, { status: 400 })
  }

  return Response.json(car)
}
