import { Car } from "lucide-react";

export default async function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(_100vh_-_10rem)]">
      <Car className="text-orange-400 w-12 h-12 animate-bounce" />
      <h1 className="text-black">Carregando</h1>
    </div>
  )
}
