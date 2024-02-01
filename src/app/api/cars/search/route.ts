import type { NextRequest } from "next/server"

import data from "../data.json"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const carQuery = searchParams.get("car")
  const modelQuery = searchParams.get("model")

  const cars = data.cars.filter(
    (car) =>
      car.car
        .toLocaleLowerCase()
        .includes(carQuery?.toLocaleLowerCase() || "") &&
      car.model
        .toLocaleLowerCase()
        .includes(modelQuery?.toLocaleLowerCase() || "")
  )

  return Response.json(cars)
}
