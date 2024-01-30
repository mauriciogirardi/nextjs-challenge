type AvailabilityCarProps = {
  availability: boolean
}

export function AvailabilityCar({ availability }: AvailabilityCarProps) {
  return (
    <>
      {availability
        ? <p
          className="bg-green-200 text-sm px-4 mt-5 py-1 rounded-md shadow-md font-semibold text-gray-600"
        >
          Disponível
        </p>
        : <p
          className="bg-red-200 text-sm px-4 mt-5 py-1 rounded-md shadow-md font-semibold text-gray-600"
        >
          Indisponível
        </p>
      }
    </>
  )
}
