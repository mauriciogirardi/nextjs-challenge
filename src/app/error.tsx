'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8  md:p-12">
      <h2 className="text-xl font-bold">Oh no!</h2>
      <p className="my-2">
        Houve um problema com a nossa loja. Este pode ser um problema temporário, por favor, tente o seu
        ação novamente.
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
        onClick={() => reset()}
      >
        Tente Novamente
      </button>
    </div>
  )
}
