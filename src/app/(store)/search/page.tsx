import { Car } from "lucide-react";
import { redirect } from "next/navigation";

import { getSearchCars } from "@/api/get-search-cars";
import { CardCar } from "@/components/card-car";
import { Search } from "@/components/search";

type PageSearchProps = {
  searchParams: {
    car?: string
    model?: string
  }
}

export default async function PageSearch({ searchParams }: PageSearchProps) {
  const { car, model } = searchParams

  if (!car && !model) {
    return redirect('/')
  }

  const { cars } = await getSearchCars({ query: searchParams })

  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      <Search />
      <main className="flex-1">
        <div
          className="mt-7 lg:mt-0 border-b-2"
        >
          <p
            className="text-sm">Resultado pra: {' '}
            {car && <span className="font-semibold">Marca {car}</span>}
            {model && <span className="font-semibold">e modelo {model}</span>}
          </p>
        </div>


        {cars.length > 0
          ? <div
            className="mt-6 grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8"
          >
            {cars?.map((car) => <CardCar key={car.id} car={car} />)}
          </div>
          : <div className="flex items-center justify-center mt-44">
            <div className="flex flex-col items-center">
              <Car className="text-orange-600" size={44} />
              <h2 className="font-semibold text-gray-600 text-lg">
                Não foi encontrado nenhum carrom com este filtros!
              </h2>
            </div>
          </div>
        }
      </main>
    </section>
  )
}
