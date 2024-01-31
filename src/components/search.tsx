'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { Paintbrush, SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";


const carsFiltersSchema = z.object({
  car: z.string().optional(),
  model: z.string().optional()
})

type CarFiltersSchema = z.infer<typeof carsFiltersSchema>

export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const carQuery = searchParams.get('car')
  const modelQuery = searchParams.get('model')

  const { register, handleSubmit, reset } = useForm<CarFiltersSchema>({
    resolver: zodResolver(carsFiltersSchema),
    defaultValues: {
      car: carQuery ?? '',
      model: modelQuery ?? ''
    }
  })

  function handleFilter({ car, model }: CarFiltersSchema) {
    if (!car && !model) return null

    let queryParams = '';
    if (car) queryParams += `car=${car}`;
    if (model) {
      if (queryParams) queryParams += '&';
      queryParams += `model=${model}`;
    }
    router.push(`/search?${queryParams}`);
  }

  function handleClearAllFilters() {
    router.push(`/search`)
    reset({
      car: '',
      model: '',
    })
  }

  return (
    <aside className="w-full lg:w-64">
      <h2 className="text-2xl font-semibold mt-7 lg:mt-0 text-gray-500">Filtros</h2>

      <form
        className="mt-11"
        role="form"
        onSubmit={handleSubmit(handleFilter)}
      >
        <label
          className="flex flex-col gap-1 font-semibold text-gray-500"
          htmlFor="model"
        >
          Modelo:
          <input
            id="model"
            placeholder="Pesquise pelo modelo"
            className="placeholder:text-gray-400 font-normal px-3 py-2 border rounded bg-transparent outline-orange-400"
            {...register('model')}
          />
        </label>
        <label
          className="flex flex-col gap-1 font-semibold text-gray-500 mt-4"
          htmlFor="car"
        >
          Marca:
          <input
            id="car"
            placeholder="Pesquise pelo modelo"
            className="placeholder:text-gray-400 font-normal px-3 py-2 border rounded bg-transparent outline-orange-400"
            {...register('car')}
          />
        </label>

        <div className="mt-7 flex items-center gap-3">
          <button
            className="bg-orange-400 flex items-center text-black justify-center gap-2 rounded flex-1 h-11 font-bold hover:bg-orange-400/90"
            type="submit"
            aria-label="Filtrar"
          >
            <SearchIcon size={24} />
            Filtrar
          </button>

          <button
            className="flex text-gray-700 items-center justify-center rounded w-11 h-11 hover:bg-gray-200"
            type="button"
            title="Limpar os filtros"
            aria-label="Limpar os filtros"
            onClick={handleClearAllFilters}
          >
            <Paintbrush size={24} />
          </button>
        </div>
      </form>
    </aside>
  )
}
