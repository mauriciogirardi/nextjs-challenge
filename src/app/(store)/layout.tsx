import { Header } from "@/components/header"

export default function StoreLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="container mt-6 px-4 lg:mx-auto">{children}</div>
    </>
  )
}
