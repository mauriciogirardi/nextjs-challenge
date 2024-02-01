import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Skeleton } from "@/components/skeleton"

export default function DetailsLoading() {
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
        <Skeleton className="max-h-[250px] w-full rounded md:w-[40%]" />

        <div className="mt-4 w-full md:mt-0 md:w-[60%]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <Skeleton className="h-8 w-[300px]" />
              <Skeleton className="h-6 w-56" />
            </div>

            <div className="flex flex-col items-end justify-end gap-3">
              <Skeleton className="h-6 w-28" />
              <Skeleton className="h-6 w-56" />
              <Skeleton className="h-7 w-52" />
            </div>
          </div>

          <div className="mt-5">
            <p className="border-b-2 border-orange-400 text-sm text-orange-600">
              Descrição
            </p>
            <Skeleton className="mt-4 h-56 w-full" />
            <Skeleton className="mt-4 h-56 w-full" />
          </div>

          <div className="mt-7">
            <p className="border-b-2 border-orange-400 text-sm text-orange-600">
              Acessórios
            </p>
            <div className="mt-4 flex items-center gap-3 text-orange-400">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
            <Skeleton className="my-4 h-56 w-full" />
          </div>
        </div>
      </section>
    </div>
  )
}
