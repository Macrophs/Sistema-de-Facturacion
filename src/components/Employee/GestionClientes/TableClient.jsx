"use client"

import { obtainClientHelper } from "@/Helpers/ObtainDataHelper";
import StandarButton from "@/components/Buttons/StandarButton";
import Loader from "@/components/Tables/Loader";
import { Connect } from "@/services/Connect";
import { useEffect, useState } from "react";

/**
 * Este es un componente para utilizar la tabla que muestra la gestion de clientes
 */

export default function TableClient({ setComponentVisible, setShowModal, NewClient, Search, PaginatorController }) {

  const [clients, setClients] = useState([{}]); //se encarga de almacenar los datos de los clientes a mostrar
  const [loading, setLoading] = useState(true); //se encarga de manejar el cargado de los datos
  useEffect(()=>{
      (async ()=>{
          setLoading(true);
          setClients(await Connect("client?"+Search,"GET"));
          setLoading(false);
      })();
  },[NewClient,Search]);



  const [paginator, setPaginator] = useState({ LimitUp: 1, LimitDown: 5 });

  useEffect(() => {
    setPaginator(PaginatorController);
  }, [PaginatorController]);

  if (loading) {
    return <Loader />;
  }

  if(clients === false)
  {
    return (
        <h1>Sin Resultados</h1>
      );
  } 
  
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
        {clients && clients.map(({id_client, name, lastname, cedula }, index) => {
          index++;
          if (index >= paginator.LimitDown && index <= paginator.LimitUp) { //Mostrar solos los registros que se encuentran en el rango segun la pagina actual
            return (
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

                  <StandarButton
                    url={"#"}
                    label={"Editar"}
                    className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-marianBlue  "}
                    id={id_client}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowModal(true);
                      setComponentVisible(`Edit/${id_client}`);
                    }}
                  />

                </td>

                <td className="px-6 py-4">

                  <StandarButton
                    url={"#"}
                    label={"Eliminar"}
                    className={"bg-transparent hover:bg-transparent focus:ring-transparent !text-red-500"}
                    onClick={() => {
                      setShowModal(true);
                      setComponentVisible(`Delete/${id_client}/${name}`);
                    }}
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
