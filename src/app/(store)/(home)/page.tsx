import { Metadata } from "next"

import { getCars } from "@/api/get-cars"
import { CardCar } from "@/components/card-car"
import { Search } from "@/components/search"

export const metadata: Metadata = {
  title: 'Home',
}

export default async function PageHome() {
  const { cars } = await getCars()

  return (
    <section className="flex flex-col gap-8 lg:flex-row mb-10">
      <Search />
      <main className="flex-1">
        <h1
          className="text-2xl font-semibold mt-7 lg:mt-0 text-gray-500 border-b-2"
        >
          Carros
        </h1>

        <div
          className="mt-6 grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8"
        >
          {cars?.map((car) => <CardCar key={car.id} car={car} />)}
        </div>
      </main>
    </section>
  )
}
