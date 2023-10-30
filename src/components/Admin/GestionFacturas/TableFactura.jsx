/**
 * Este es un componente para utilizar la tabla que muestra la gestion de Facturas
 */


import StandarButton from "@/components/Buttons/StandarButton";
import Loader from "@/components/Tables/Loader";
import { Connect } from "@/services/Connect";
import { useEffect, useState } from "react";

export default function TableFactura({setShowModal, setComponentVisible, PaginatorController, Search}) {

  const [paginator, setPaginator] = useState({LimitUp:1,LimitDown:5});

  useEffect(() => {
    setPaginator(PaginatorController);
  }, [PaginatorController]);


  const [facturas, setFacturas] = useState([{
    name: "",
    lastname: "",
    code: undefined ,
    cedula:"",
    date: "",
    products:[]

  }]); //se encarga de almacenar los datos de las facturas a mostrar

  //useEffect para obtener las facturas
  const [loading, setLoading] = useState([{}]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      setFacturas(await Connect("invoice?" + Search, "GET"));
      setLoading(false);
    })();
  }, [Search]);




  if (loading) {
    return <Loader />;
  }

  if (facturas === false) {
    return <h1>Sin Resultados</h1>;
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
          <th scope="col"  className=" py-3 ">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {facturas.map(({ id_invoice, invoice_date, client_cedula, client_name,client_lastname, products },index) => {
          index++;
          const date = new Date(invoice_date);
          const newDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    
          if(index >= paginator.LimitDown && index <= paginator.LimitUp )
          {
              return(
                <tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
                  <td className="px-6 py-4">{id_invoice}</td>
                  <td className="px-6 py-4">{newDate}</td>
                  <td className="px-6 py-4">
                    {client_cedula}{" "}
                    <span className="text-black font-medium"> {client_name} {client_lastname}</span>
                  </td>
                  <td className="px-12 py-4">
                    
                    <span className="text-green-600 font-medium"> {products}$</span>
                  </td>
                  <td className=" py-4">

                    <StandarButton url={"gestion_facturas/factura?Code="+id_invoice} label={"Visualizar"} 
                    className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-marianBlue "} 
                    id={1} 
                  

                    />
                  </td>
                 
                </tr>
              );
          }
          
        })}
      </tbody>
    </table>
  );
}
