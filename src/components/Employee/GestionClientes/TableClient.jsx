/**
 * Este es un componente para utilizar la tabla que muestra la gestion de clientes
 */

import DeleteModalButton from "@/components/Buttons/DeleteModalButton";
import EditModalButton from "@/components/Buttons/EditModalButton";

export default function TableClient( {setComponentVisible, setShowModal}) {
  const elements = [
    {
      label: "Neil Sims",
      cedula: "V30123422",
    },
    {
      label: "Neil Sims",
      cedula: "V30123422",
    },
    {
      label: "Neil Sims",
      cedula: "V30123422",
    },
    {
      label: "Neil Sims",
      cedula: "V30123422",
    },
    {
      label: "Neil Sims",
      cedula: "V30123422",
    },
  ];

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
          <th scope="col" colspan="2" className=" pl-32 py-3 ">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {elements.map(({ label, cedula }) => (
          <tr key={cedula} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{cedula}</td>
            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <div className="pl-3">
                <div className="text-base font-semibold">{label}</div>
              </div>
            </td>

            <td className="px-6 py-4">

              <EditModalButton id={1} setComponentVisible={setComponentVisible} setShowModal={setShowModal} />

            </td>

            <td className="px-6 py-4">

              <DeleteModalButton id={1} setComponentVisible={setComponentVisible} setShowModal={setShowModal} />
      
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
