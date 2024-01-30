import { Header } from "@/components/header";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="container px-4 mt-6 lg:mx-auto">
        {children}
      </div>
    </>
  );
}
