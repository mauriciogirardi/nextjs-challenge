type AvailabilityCarProps = {
  availability: boolean
}

export function AvailabilityCar({ availability }: AvailabilityCarProps) {
  return (
    <>
      {availability ? (
        <p className="mt-5 rounded-md bg-green-200 px-4 py-1 text-sm font-semibold text-gray-600 shadow-md">
          Disponível
        </p>
      ) : (
        <p className="mt-5 rounded-md bg-red-200 px-4 py-1 text-sm font-semibold text-gray-600 shadow-md">
          Indisponível
        </p>
      )}
    </>
  )
}
