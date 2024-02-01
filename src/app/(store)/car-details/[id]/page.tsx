import { ChevronLeft, Gamepad2, Lock, MapPin, PhoneCall } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getCar } from "@/api/get-car"
import { AvailabilityCar } from "@/components/availability-car"
import { api } from "@/data/api"
import { Car } from "@/data/types/car"
import { formatCurrency } from "@/utils/format-currency"

type PageCarDetailsProps = {
  params: { id: string }
}

export async function generateMetadata({
  params
}: PageCarDetailsProps): Promise<Metadata> {
  const { car } = await getCar(params.id)
  return {
    title: car.car,
    description: `${car.car}, modelo ${car.model}, ano ${car.modelYear}, valor ${formatCurrency(car.price)}`
  }
}

export async function generateStaticParams() {
  const cars = await api<Car[]>("/cars")
  return cars.map((car) => {
    return {
      id: String(car.id)
    }
  })
}

export default async function PageCarDetails({ params }: PageCarDetailsProps) {
  const cardId = params.id

  if (!cardId) {
    return redirect("/")
  }

  const { car } = await getCar(cardId)

  return (
    <div>
      <Link
        href="/"
        className="mb-9 flex items-center text-gray-500 hover:text-gray-600"
      >
        <ChevronLeft />
        Voltar
      </Link>

      <section className="flex flex-col md:flex-row md:gap-12">
        <Image
          src={car.img}
          alt={`Imagem do carro ${car.car}, modelo ${car.model}, ano ${car.modelYear}`}
          width={400}
          height={200}
          className="max-h-[250px] w-full rounded object-cover md:w-[40%]"
        />

        <div className="mt-4 w-full md:mt-0 md:w-[60%]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold uppercase text-black">
                {car.car}
              </h1>
              <h1 className="font-semibold capitalize text-gray-600">
                {car.model}
              </h1>
            </div>

            <div className="text-right">
              <strong className="text-lg">{car.modelYear}</strong>
              <h3 className="text-lg">{formatCurrency(car.price)}</h3>
              <AvailabilityCar availability={car.availability} />
            </div>
          </div>

          <div className="mt-5">
            <p className="border-b-2 border-orange-400 text-sm text-orange-600">
              Descrição
            </p>
            <p className="mt-4 text-pretty leading-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              nostrum fuga dignissimos et minima accusamus illum! Debitis sit
              eligendi, aliquam modi odit vel iste facere libero rerum quisquam,
              totam tempora.
            </p>
            <p className="mt-4 text-pretty leading-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              nostrum fuga dignissimos et minima accusamus illum! Debitis sit
              eligendi, aliquam modi odit vel iste facere libero rerum quisquam,
              totam tempora.
            </p>
          </div>

          <div className="mt-7">
            <p className="border-b-2 border-orange-400 text-sm text-orange-600">
              Acessórios
            </p>
            <div className="mt-4 flex items-center gap-3 text-orange-400">
              <Gamepad2 size={30} />
              <Lock />
              <MapPin />
              <PhoneCall />
            </div>
            <p className="my-4 text-pretty leading-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              nostrum fuga dignissimos et minima accusamus illum! Debitis sit
              eligendi, aliquam modi odit vel iste facere libero rerum quisquam,
              totam tempora.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
