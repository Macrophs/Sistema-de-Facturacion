"use client"

import { obtainClientHelper } from "@/Helpers/ObtainDataHelper";
import StandarButton from "@/components/Buttons/StandarButton";
import { useEffect, useState } from "react";

/**
 * Este es un componente para utilizar la tabla que muestra la gestion de clientes
 */

export default function TableClient( {setComponentVisible, setShowModal, NewClient}) {

  const [clients, setClients] = useState([]); //se encarga de almacenar los datos de los clientes a mostrar

  //useEffect para obtener los clientes, se actualiza cada vez que se agregue un nuevo cliente mediante [NewClient]
  useEffect(() => {
    setClients(obtainClientHelper);
  }, [NewClient]);

  return (
    <table className="w-full  text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            Cédula
          </th>
          <th scope="col" className="px-10 py-3">
            Nombre
          </th>
          <th scope="col" colSpan={2} className=" pl-32 py-3 ">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {clients.map(({ name,lastname, cedula },index) => (
          <tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{cedula}</td>
            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <div className="pl-3">
                <div className="text-base font-semibold">{name} {lastname}</div>
              </div>
            </td>

            <td className="px-6 py-4">

              <StandarButton url={"#"} label={"Editar"} className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-marianBlue  "} id={index} onClick={() => {setShowModal(true); setComponentVisible("Edit/")}} />

            </td>

            <td className="px-6 py-4">

              <StandarButton url={"#"} label={"Eliminar"} className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-red-500 "} id={index} onClick={() => {setShowModal(true); setComponentVisible("Delete/")}} />
      
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
