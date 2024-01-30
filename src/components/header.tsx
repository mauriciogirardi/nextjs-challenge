import { Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <section className="border-b-2">
      <div className="px-4 h-14 md:h-16 flex items-center justify-between container lg:mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Car className="text-orange-400 w-8 h-8 md:w-10 md:h-10 animate-bounce" />
          <strong className="text-lg md:text-2xl text-gray-600 hidden md:block">
            STAND
          </strong>
        </Link>

        <div className="flex items-end gap-3">
          <div className="text-right">
            <p className="text-sm md:text-base md:leading-4 font-semibold text-gray-600 leading-3">
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
            className="rounded-full w-10 h-10 object-cover md:w-12 md:h-12"
          />
        </div>
      </div>
    </section>
  )
}
