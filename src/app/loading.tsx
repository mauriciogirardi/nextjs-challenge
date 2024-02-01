import { Car } from "lucide-react"

export default async function Loading() {
  return (
    <div className="flex h-[calc(_100vh_-_10rem)] flex-col items-center justify-center">
      <Car className="h-12 w-12 animate-bounce text-orange-400" />
      <h1 className="text-black">Carregando</h1>
    </div>
  )
}
