import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      <aside className="w-full lg:w-64">
        <h2 className="text-2xl font-semibold mt-7 lg:mt-0 text-gray-500">Filtros</h2>

        <form className="mt-11">
          <label
            className="flex flex-col gap-1 font-semibold text-gray-500"
          >
            Modelo:
            <Skeleton className="w-full h-10 rounded" />
          </label>
          <label
            className="flex flex-col gap-1 font-semibold text-gray-500 mt-4"
          >
            Marca:
            <Skeleton className="w-full h-10 rounded" />
          </label>

          <div className="mt-7 flex items-center gap-3">
            <Skeleton className="rounded flex-1 h-11" />
            <Skeleton className="rounded w-11 h-11" />
          </div>
        </form>
      </aside>
      <main className="flex-1">
        <h1
          className="text-2xl font-semibold mt-7 lg:mt-0 text-gray-500 border-b-2"
        >
          Carros
        </h1>

        <div
          className="mt-6 grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8"
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton key={index} className="w-full min-h-[300px]" />
          ))}
        </div>
      </main>
    </section>
  )
}
