import { Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <section className="border-b-2">
      <div className="container flex h-14 items-center justify-between px-4 md:h-16 lg:mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Car
            className="h-8 w-8 animate-bounce text-orange-400 md:h-10 md:w-10"
            aria-label="Car"
          />
          <strong className="hidden text-lg text-gray-600 md:block md:text-2xl">
            STAND
          </strong>
        </Link>

        <div className="flex items-end gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold leading-3 text-gray-600 md:text-base md:leading-4">
              Mauricio Girardi
            </p>
            <span className="text-xs text-gray-400">
              devmauriciogirardi@gmail.com
            </span>
          </div>

          <Image
            src="https://github.com/mauriciogirardi.png"
            alt="Mauricio"
            width={60}
            height={60}
            className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
          />
        </div>
      </div>
    </section>
  )
}
