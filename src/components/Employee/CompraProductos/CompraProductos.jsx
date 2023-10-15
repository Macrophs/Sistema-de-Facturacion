'use client'

import TableBuy from "./TableBuy"
import TableReadyToBuy from "./TableReadyToBuy"
import StandarButton from "../../Buttons/StandarButton"
import { useEffect, useState } from "react"
import Modal from "@/components/Modal/Modal"
import ModalProducts from "./ModalProducts"
import { useSearchParams } from 'next/navigation'
import { obtainClientHelper } from "@/Helpers/ObtainDataHelper"
import { useRouter } from "next/navigation"
import { Connect } from "@/services/Connect"
/**
 * Este es un componente de la pagina compra producto, que contendrá todo el contenido de la compra
 */

export default function CompraProductos() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const cedula = searchParams.get("Cedula");

  //si no se le ha pasado cedula, se redirecciona a cedula cliente
  if(!cedula)
      router.push("cedula_cliente");

  //datos del cliente que esta comprando
  const [client, setClient] = useState({
    name: "",
    lastname: "",
    cedula: "",
  });


  const [showModal, setShowModal] = useState(false); //mostrar y ocultar modal
  const [price, setPrice] = useState(0);        //Obtener y Colocar Precio en modal
  const [products, setProducts] = useState();   //Obtener y Agregar Productos a la compra
  const [deleteProduct, setdeleteProduct] = useState();   //Eliminar Productos de la compra desde TableProduct
  const [deleteSelectProduct, setdeleteSelectProduct] = useState(); //Quitar Checkbox de TableProduct al eliminar un producto en Tablebuy
  const [finishProducts, setFinishProducts] = useState(); //Quitar Checkbox de TableProduct al eliminar un producto en Tablebuy

  useEffect(() => {
      (async ()=>{
        const condition = `conditions= and cedula = '${cedula}'`;
        const ClientData = await Connect("client?"+condition,"GET")
        //si el cliente no es encontrado en la bd, se le redirecciona a cedula cliente
        if(!ClientData)
        { 
            router.push("cedula_cliente"); 
        }
        else
          setClient(ClientData[0]);
      })();
  }, [cedula]);

  function obtainPrice(price)
  {
    setPrice(price);
  }

  function obtainProducts(products)
  {
    setProducts(products);
  }

  function obtainDeleteProduct(product)
  {
    setdeleteProduct(product);
  }

  function obtainDeleteSelectProduct(product)
  {
    setdeleteSelectProduct(product);
  }

  function obtainFinishProducts(products)
  {
    setFinishProducts(products);
  }

  return (
    <>
      
        <TableBuy ProductsChange={obtainProducts}  DeleteProduct={obtainDeleteProduct}  DeleteSelectProduct={deleteSelectProduct} ChangeDeleteSelectProduct={obtainDeleteSelectProduct} ClientData={client} />
   
   
        <TableReadyToBuy PriceChange={obtainPrice} Products={products} ProductsChange={obtainProducts} DeleteProduct={deleteProduct} ChangeDeleteProduct={obtainDeleteProduct} DeleteSelectProduct={obtainDeleteSelectProduct} FinishProducts={obtainFinishProducts} />
      
        <section className=" flex items-center justify-center mb-16 lg:mt-10" >
          <StandarButton url={"#"} label={"Continuar Compra"}  
          onClick={() => {setShowModal(true)}} 
          className={price > 0 ? " bg-marianBlue" : "bg-gray-400 opacity-20 pointer-events-none" } //true = algun producto seleccionado, false = ningun producto seleccinado

          />
        </section>
        
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
          <ModalProducts Price_Buy={price} ClientData={client} ProductsData={finishProducts} onClose={()=> setShowModal(false)}/>
        </Modal>
    </>
  )
}
