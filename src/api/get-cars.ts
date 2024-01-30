import { api } from "@/data/api";
import { Car } from "@/data/types/car";

export async function getCars() {
  const cars = await api<Car[]>('/cars', {
    next: {
      revalidate: 60 * 60, // 1 hour
    }
  })

  return { cars }
}
