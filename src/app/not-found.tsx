import { Info } from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        <Info className="text-orange-400 mb-5" size={48} />
        <h1 className="text-2xl">Pagina não encontrada!</h1>
        <Link
          href="/"
          className="underline hover:text-gray-600 mt-5"
        >
          Voltar para Home
        </Link>
      </div>
    </>
  )
}
