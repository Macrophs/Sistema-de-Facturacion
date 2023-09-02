import HeaderFactura from "./HeaderFactura"
import TableFactura from "./TableFactura"
/**
 * Este es un componente de la pagina compra producto, que contendrá todo el contenido de la compra
 */

export default function Factura() {
  return (
    <>
       
        <section className=" flex items-center justify-center">
          <section className="flex flex-col items-center justify-center w-11/12  overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">    
              <h1 className="text-marianBlue font-bold mt-2 text-4xl  mb-4 text-center">Factura de Compra</h1>    
              <HeaderFactura/>    
              <TableFactura/>
          </section>
        </section>
    </>
  )
}
