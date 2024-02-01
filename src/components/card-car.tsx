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
      className="overflow-hidden rounded shadow-lg transition hover:scale-[1.03]"
      href={`/car-details/${car.id}`}
    >
      <Image
        src={car.img}
        alt={`Imagem do carro ${car.car}, modelo ${car.model}, ano ${car.modelYear}`}
        width={400}
        height={200}
        className="max-h-[250px] w-full object-cover"
        quality={100}
      />
      <div className="flex justify-between p-4">
        <div>
          <h2 className="text-lg font-bold uppercase">{car.car}</h2>
          <p className="text-sm capitalize">{car.model}</p>
        </div>

        <div className="text-right">
          <strong className="text-gray-500">{car.modelYear}</strong>
          <h3 className="font-bold text-gray-500">
            {formatCurrency(car.price)}
          </h3>
          <AvailabilityCar availability={car.availability} />
        </div>
      </div>
    </Link>
  )
}
