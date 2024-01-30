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
  params,
}: PageCarDetailsProps): Promise<Metadata> {
  const { car } = await getCar(params.id)
  return {
    title: car.car,
    description:
      `${car.car}, modelo ${car.model}, ano ${car.modelYear}, valor ${formatCurrency(car.price)}`
  }
}

export async function generateStaticParams() {
  const cars = await api<Car[]>('/cars')
  return cars.map((car) => {
    return {
      id: String(car.id)
    }
  })
}

export default async function PageCarDetails({ params }: PageCarDetailsProps) {
  const cardId = params.id

  if (!cardId) {
    return redirect('/')
  }

  const { car } = await getCar(cardId)

  return (
    <div>
      <Link
        href="/"
        className="text-gray-500 flex mb-9 items-center hover:text-gray-600"
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
          className="object-cover w-full md:w-[40%] rounded max-h-[250px]"
        />

        <div className="mt-4 md:mt-0 w-full md:w-[60%]">
          <div className="flex justify-between">
            <div>
              <h1
                className="uppercase text-black text-2xl font-bold"
              >
                {car.car}
              </h1>
              <h1 className="capitalize text-gray-600 font-semibold">
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
            <p className="border-b-2 text-orange-600 border-orange-400 text-sm">
              Descrição
            </p>
            <p className="text-pretty leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              nostrum fuga dignissimos et minima accusamus illum! Debitis sit
              eligendi, aliquam modi odit vel iste facere libero rerum quisquam,
              totam tempora.
            </p>
            <p className="text-pretty leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              nostrum fuga dignissimos et minima accusamus illum! Debitis sit
              eligendi, aliquam modi odit vel iste facere libero rerum quisquam,
              totam tempora.
            </p>
          </div>

          <div className="mt-7">
            <p className="border-b-2 text-orange-600 border-orange-400 text-sm">
              Acessórios
            </p>
            <div className="flex items-center gap-3 text-orange-400 mt-4">
              <Gamepad2 size={30} />
              <Lock />
              <MapPin />
              <PhoneCall />
            </div>
            <p className="text-pretty leading-6 my-4">
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
