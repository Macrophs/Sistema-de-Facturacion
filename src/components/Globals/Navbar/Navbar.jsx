import Image from "next/image"
/**
 * Este es un componente global sobre el Navbar de la app
 */

export default function Navbar() {
  return (
    <nav className="bg-marianBlue fixed w-full flex items-center justify-between flex-wrap p-4 z-10">
        <section className="flex  items-center flex-shrink-0 text-white mr-6">
            <Image className="mr-2" width={32} height={32} src="/images/logo.svg" alt="logo" />

            <span className="font-semibold text-4xl tracking-tight">SDBS</span>
            <span className="hidden sm:block pt-4 pl-2 ">Simple Digital Billing System</span>
        </section>
    </nav>
  )
}
