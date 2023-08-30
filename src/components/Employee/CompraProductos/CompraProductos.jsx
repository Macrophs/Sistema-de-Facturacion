'use client'
import Image from "next/image"
import TableBuy from "./TableBuy"
import TableReadyToBuy from "./TableReadyToBuy"
import StandarButton from "../../Buttons/StandarButton"
import { useState } from "react"
import Modal from "@/components/Modal/Modal"
import ModalProducts from "./ModalProducts"
import AddModalButton from "@/components/Buttons/AddModalButton"
/**
 * Este es un componente de la pagina compra producto, que contendrá todo el contenido de la compra
 */

export default function CompraProductos() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      
        <TableBuy/>
   
   
        <TableReadyToBuy/>
      
        <section className=" flex items-center justify-center mb-16 lg:mt-10" >
          <AddModalButton url={"factura"} label={"Generar Factura"} setShowModal={setShowModal} setComponentVisible={()=> null}  />
        </section>
        
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
          <ModalProducts onClose={()=> setShowModal(false)}/>
        </Modal>
    </>
  )
}
