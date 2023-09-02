/**
 * Este es un componente para utilizar la tabla que muestra la gestion de Facturas
 */


import { obtainFacturasHelper } from "@/Helpers/ObtainDataHelper";
import StandarButton from "@/components/Buttons/StandarButton";
import { useEffect, useState } from "react";

export default function TableFactura({setShowModal, setComponentVisible}) {

  const [facturas, setFacturas] = useState([{
    name: "",
    lastname: "",
    code: undefined ,
    cedula:"",
    date: "",
    products:[]

  }]); //se encarga de almacenar los datos de las facturas a mostrar

  //useEffect para obtener las facturas
  useEffect(() => {
    setFacturas(obtainFacturasHelper);
  }, []);

  const CalculateTotal = (products) =>
  {
    let total = 0;
    for (const product of products )
      total += product.quantity * product.price_unit;
      
    const iva = 16;
    let price_iva = (iva * total ) / 100 ;
    return total + price_iva;
    
  }

  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            Código
          </th>
          <th scope="col" className="px-10 py-3">
            Fecha
          </th>
          <th scope="col" className="px-10 py-3">
            Facturado a
          </th>
          <th scope="col" className="px-10 py-3">
            Total Pagado
          </th>
          <th scope="col" colspan="2" className=" pl-32 py-3 ">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {facturas.map(({ code, date, cedula, name,lastname, products }) => (
          <tr key={code} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{code}</td>
            <td className="px-6 py-4">{date}</td>
            <td className="px-6 py-4">
              {cedula}{" "}
              <span className="text-black font-medium"> {name} {lastname}</span>
            </td>
            <td className="px-12 py-4">
              {" "}
              <span className="text-green-600 font-medium"> ${CalculateTotal(products)} </span>
            </td>
            <td className="px-10 py-4">

              <StandarButton url={"gestion_facturas/factura?Code="+code} label={"Visualizar"} 
              className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-marianBlue "} 
              id={1} 
            

              />
            </td>
            <td className="px-10 py-4">
              <StandarButton url={"#"} label={"Eliminar"} 
              className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-red-500 "} 
              id={1} 
              onClick={() => {setShowModal(true); setComponentVisible("Delete/")}} 

              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
