import Image from "next/image"
/**
 * Este es un componente de la pagina cedula cliente para el formulario de solicitud de cedula cliente
 */

export default function FormCedulaCliente() {
  return (
    <section className="flex items-center justify-center sm:h-4/6">
            <section>
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Ingreso Facturación</h1>

                <form className="flex items-center justify-center flex-col " action="compra_productos">
                    <label for="website-admin" className="block mb-7 text-base font-medium  text-black">Datos del
                        Cliente</label>
                    <div className="flex lg:w-96">
                        <span
                            className="bg-marianBlue inline-flex items-center px-3 text-base border border-r-0 rounded-l-md text-black border-gray-400">
                            <Image width={16} height={16} src="../images/icons/user.svg" alt="icon user" />

                        </span>
                        <input type="number" id="website-admin"
                            className="rounded-none rounded-r-lg border  block flex-1 min-w-0 w-full text-base p-2.5  bg-white border-gray-400 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Cédula" />
                    </div>
                    <button type="submit"
                        className="bg-marianBlue text-white mt-10 px-32 md:px-40 focus:ring-4 font-medium rounded-lg text-base  py-2.5 mr-2 mb-2 ">Ingresar</button>

                </form>
            </section>
        </section>
  )
}
