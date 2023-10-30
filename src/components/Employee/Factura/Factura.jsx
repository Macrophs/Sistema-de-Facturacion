"use client"
import { useSearchParams } from "next/navigation";
import HeaderFactura from "./HeaderFactura"
import TableFactura from "./TableFactura"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Connect } from "@/services/Connect";
import { GeneratePDF } from "@/services/GeneratePDF";
import StandarButton from "@/components/Buttons/StandarButton";
import Loader from "@/components/Tables/Loader";


/**
 * Este es un componente de la pagina compra producto, que contendrá todo el contenido de la compra
 */

export default function Factura() {

  //obtener codigo de la factura de la url
  const searchParams = useSearchParams();
  const Code = searchParams.get("Code");

  //si no se le ha pasado el codigo, se redirecciona a cedula cliente
  if(!Code)
    router.push("cedula_cliente");

  const router = useRouter();

  const [factura, setFactura] = useState();
  const [loading, setLoading] = useState(true); //se encarga de manejar el cargado de los datos


  useEffect(() => {
    (async () => {
      setLoading(true);
      const facturaData = await Connect("invoice/"+Code,"GET");

    
      //si el cliente no es encontrado en la bd, se le redirecciona a cedula cliente
      if(!facturaData)
      { 
          router.push("cedula_cliente");
      }
      else
      {
        setFactura(facturaData);
        setLoading(false);
      }
        
    })();
  }, [Code]);

  if (loading) {
    return <Loader />;
  }


  return (
    <>
       
        <section className=" flex items-center justify-center">
          <section className="flex flex-col items-center justify-center w-11/12  overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">    
              <h1 className="text-marianBlue font-bold mt-2 text-4xl  mb-4 text-center">Factura de Compra</h1>    
              <HeaderFactura Factura={factura} />    
              <TableFactura Factura={factura}/>
              <StandarButton href={"#"} label={"Generar PDF"} onClick={()=>GeneratePDF(Code)} />
          </section>

        </section>
        
    </>
  )
}
