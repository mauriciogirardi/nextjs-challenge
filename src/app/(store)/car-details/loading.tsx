import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Skeleton } from "@/components/skeleton";

export default function DetailsLoading() {
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
        <Skeleton
          className="w-full md:w-[40%] rounded max-h-[250px]"
        />

        <div className="mt-4 md:mt-0 w-full md:w-[60%]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <Skeleton className="w-[300px] h-8" />
              <Skeleton className="w-56 h-6" />
            </div>

            <div className="flex flex-col gap-3 justify-end items-end">
              <Skeleton className="w-28 h-6" />
              <Skeleton className="w-56 h-6" />
              <Skeleton className="w-52 h-7" />
            </div>
          </div>

          <div className="mt-5">
            <p className="border-b-2 text-orange-600 border-orange-400 text-sm">
              Descrição
            </p>
            <Skeleton className="w-full h-56 mt-4" />
            <Skeleton className="w-full h-56 mt-4" />
          </div>

          <div className="mt-7">
            <p className="border-b-2 text-orange-600 border-orange-400 text-sm">
              Acessórios
            </p>
            <div className="flex items-center gap-3 text-orange-400 mt-4">
              <Skeleton className="w-8 h-8" />
              <Skeleton className="w-8 h-8" />
              <Skeleton className="w-8 h-8" />
              <Skeleton className="w-8 h-8" />
            </div>
            <Skeleton className="w-full h-56 my-4" />

          </div>
        </div>
      </section>
    </div>
  )
}
