/**
 * Este es un componente para utilizar la tabla que muestra la gestion de empleados
 */


import { obtainEmployeesHelper } from "@/Helpers/ObtainDataHelper";
import StandarButton from "@/components/Buttons/StandarButton";
import { useEffect, useState } from "react";

export default function TableEmployee({ setComponentVisible, setShowModal, newEmployee, PaginatorController }) {

  const [employee, setEmployee] = useState([
    {
      name: "",
      lastname: "",
      cedula: "",
      email: "",
    }
  ]); //se encarga de almacenar los datos de los empleados a mostrar

  //useEffect para obtener los empleados
  useEffect(() => {
    setEmployee(obtainEmployeesHelper);
  }, [newEmployee]);

  const [paginator, setPaginator] = useState({ LimitUp: 1, LimitDown: 5 });

  useEffect(() => {
    setPaginator(PaginatorController);
  }, [PaginatorController]);

  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            Cédula
          </th>
          <th scope="col" className="px-10 py-3">
            Nombre
          </th>
          <th scope="col" colspan="2" className=" pl-32 py-3 ">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {employee.map(({ name, lastname, email, cedula }, index) => {
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
                    <div class="font-normal text-gray-500">
                      {email}
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <StandarButton url={"#"} label={"Editar"}
                    className={"  bg-transparent hover:bg-transparent focus:ring-transparent !text-marianBlue  "}
                    id={1}
                    onClick={() => { setShowModal(true); setComponentVisible(`Edit/${cedula}`) }}

                  />
                </td>

                <td className="px-6 py-4">
                  <StandarButton
                    url={"#"}
                    label={"Eliminar"}
                    className={"bg-transparent hover:bg-transparent focus:ring-transparent !text-red-500"}
                    onClick={() => {
                      setShowModal(true);
                      setComponentVisible(`Delete/${cedula}/${name} ${lastname}`);
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
