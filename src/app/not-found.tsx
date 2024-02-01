import { Info } from "lucide-react"
import Link from "next/link"

import { Header } from "@/components/header"

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="mt-20 flex flex-col items-center justify-center">
        <Info className="mb-5 text-orange-400" size={48} />
        <h1 className="text-2xl">Pagina não encontrada!</h1>
        <Link href="/" className="mt-5 underline hover:text-gray-600">
          Voltar para Home
        </Link>
      </div>
    </>
  )
}
