import { obtainProductsHelper } from "@/Helpers/ObtainDataHelper";
import StandarButton from "@/components/Buttons/StandarButton";
import { useEffect, useState } from "react";



export default function TableProducts({ setComponentVisible, setShowModal, newProduct }) {

  const [products, setProducts] = useState([
    {
      name:"",
      code:"",
      quantity_stock:undefined,
      price_unit:undefined
    }
  ]); //se encarga de almacenar los datos de los Productos a mostrar

  //useEffect para obtener los Productos
  useEffect(() => {
    setProducts(obtainProductsHelper);
  }, [newProduct]);


  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            CÓDIGO
          </th>
          <th scope="col" className="px-10 py-3">
            NOMBRE
          </th>
          <th scope="col" className="px-10 py-3">
            PRECIO
          </th>
          <th scope="col" className="px-10 py-3 text-center">
            CANTIDAD EN STOCK
          </th>
          <th scope="col" colspan="2" className=" pl-32 py-3 ">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ name,code, price_unit, quantity_stock }) => (
          <tr key={code} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{code}</td>

            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <div className="pl-3">
                <div className="text-base font-semibold">{name}</div>
              </div>
            </td>

            <td className="px-6 py-4 text-center">{price_unit}$</td>

            <td className="px-6 py-4 text-center">{quantity_stock}</td>

            <td className="px-6 py-4">

            <StandarButton url={"#"} label={"Editar"} 
            className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-marianBlue  "} 
            id={1} 
            onClick={() => {setShowModal(true); setComponentVisible("Edit/")}} 

            />
            </td>
            <td className="px-6 py-4">
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
