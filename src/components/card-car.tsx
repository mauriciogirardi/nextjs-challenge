import Image from "next/image"
import Link from "next/link"

import { Car } from "@/data/types/car"
import { formatCurrency } from "@/utils/format-currency"

import { AvailabilityCar } from "./availability-car"

export type CardCarProps = {
  car: Car
}

export function CardCar({ car }: CardCarProps) {
  return (
    <Link
      className="shadow-lg overflow-hidden rounded hover:scale-[1.03] transition"
      href={`/car-details/${car.id}`}
    >
      <Image
        src={car.img}
        alt={`Imagem do carro ${car.car}, modelo ${car.model}, ano ${car.modelYear}`}
        width={400}
        height={200}
        className="object-cover w-full max-h-[250px]"
        quality={100}
      />
      <div className="p-4 flex justify-between">
        <div>
          <h2 className="uppercase text-lg font-bold">{car.car}</h2>
          <p className="capitalize text-sm">{car.model}</p>
        </div>

        <div className="text-right">
          <strong className="text-gray-500">{car.modelYear}</strong>
          <h3 className="font-bold text-gray-500">{formatCurrency(car.price)}</h3>
          <AvailabilityCar availability={car.availability} />
        </div>
      </div>
    </Link>
  )
}
