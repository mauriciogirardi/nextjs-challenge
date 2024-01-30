import { api } from "@/data/api";
import { Car } from "@/data/types/car";

type GetSearchCarsProps = {
  query: {
    car?: string
    model?: string
  }
}

export async function getSearchCars({ query }: GetSearchCarsProps) {
  const { car, model } = query
  let queryParams = '';
  if (car) queryParams += `car=${car}`;
  if (model) {
    if (queryParams) queryParams += '&';
    queryParams += `model=${model}`;
  }

  const cars = await api<Car[]>(`/cars/search?${queryParams}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    }
  })

  return { cars }
}
