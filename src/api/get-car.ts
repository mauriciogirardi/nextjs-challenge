import { api } from "@/data/api"
import { Car } from "@/data/types/car"

export async function getCar(carId: string) {
  const car = await api<Car>(`/cars/${carId}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    }
  })

  return { car }
}
