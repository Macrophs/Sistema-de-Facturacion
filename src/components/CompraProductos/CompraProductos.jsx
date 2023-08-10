import Image from "next/image"
import TableBuy from "../Tables/TableBuy"
import TableReadyToBuy from "../Tables/TableReadyToBuy"
import StandarButton from "../Buttons/StandarButton"
/**
 * Este es un componente de la pagina compra producto, que contendrá todo el contenido de la compra
 */

export default function CompraProductos() {
  return (
    <>
      
        <TableBuy/>
   
   
        <TableReadyToBuy/>
      
        <section className=" flex items-center justify-center mb-16 lg:mt-10">
          <StandarButton/>
        </section>
    </>
  )
}
