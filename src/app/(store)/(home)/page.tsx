import { Metadata } from "next"

import { getCars } from "@/api/get-cars"
import { CardCar } from "@/components/card-car"
import { Search } from "@/components/search"

export const metadata: Metadata = {
  title: "Home"
}

export default async function PageHome() {
  const { cars } = await getCars()

  return (
    <section className="mb-10 flex flex-col gap-8 lg:flex-row">
      <Search />
      <main className="flex-1">
        <h1 className="mt-7 border-b-2 text-2xl font-semibold text-gray-500 lg:mt-0">
          Carros
        </h1>

        <div className="mt-6 grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cars?.map((car) => <CardCar key={car.id} car={car} />)}
        </div>
      </main>
    </section>
  )
}
