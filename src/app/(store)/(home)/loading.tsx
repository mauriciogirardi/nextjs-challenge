import { Skeleton } from "@/components/skeleton"

export default function HomeLoading() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      <aside className="w-full lg:w-64">
        <h2 className="mt-7 text-2xl font-semibold text-gray-500 lg:mt-0">
          Filtros
        </h2>

        <form className="mt-11">
          <label className="flex flex-col gap-1 font-semibold text-gray-500">
            Modelo:
            <Skeleton className="h-10 w-full rounded" />
          </label>
          <label className="mt-4 flex flex-col gap-1 font-semibold text-gray-500">
            Marca:
            <Skeleton className="h-10 w-full rounded" />
          </label>

          <div className="mt-7 flex items-center gap-3">
            <Skeleton className="h-11 flex-1 rounded" />
            <Skeleton className="h-11 w-11 rounded" />
          </div>
        </form>
      </aside>
      <main className="flex-1">
        <h1 className="mt-7 border-b-2 text-2xl font-semibold text-gray-500 lg:mt-0">
          Carros
        </h1>

        <div className="mt-6 grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton key={index} className="min-h-[300px] w-full" />
          ))}
        </div>
      </main>
    </section>
  )
}
