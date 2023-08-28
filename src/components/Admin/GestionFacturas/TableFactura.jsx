/**
 * Este es un componente para utilizar la tabla que muestra la gestion de Facturas
 */

import DeleteModalButton from "@/components/Buttons/DeleteModalButton";

export default function TableFactura({setShowModal, setComponentVisible}) {
  const elements = [
    {
      code: "#12345",
      date: "25/08/2023",
      client_cedula: "V30123422",
      client_name: "Neil Sims",
      total: 10000,
    },
    {
      code: "#12345",
      date: "25/08/2023",
      client_cedula: "V30123422",
      client_name: "Neil Sims",
      total: 10000,
    },
    {
      code: "#12345",
      date: "25/08/2023",
      client_cedula: "V30123422",
      client_name: "Neil Sims",
      total: 10000,
    },
    {
      code: "#12345",
      date: "25/08/2023",
      client_cedula: "V30123422",
      client_name: "Neil Sims",
      total: 10000,
    },
    {
      code: "#12345",
      date: "25/08/2023",
      client_cedula: "V30123422",
      client_name: "Neil Sims",
      total: 10000,
    },
  ];

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
        {elements.map(({ code, date, client_cedula, client_name, total }) => (
          <tr key={code} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{code}</td>
            <td className="px-6 py-4">{date}</td>
            <td className="px-6 py-4">
              {client_cedula}{" "}
              <span className="text-black font-medium"> {client_name}</span>
            </td>
            <td className="px-12 py-4">
              {" "}
              <span className="text-green-600 font-medium"> ${total} </span>
            </td>
            <td className="px-10 py-4">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                className="text-marianBlue font-medium hover:underline"
              >
                Visualizar
              </a>
            </td>
            <td className="px-10 py-4">
              <DeleteModalButton
                id={1}
                setComponentVisible={setComponentVisible}
                setShowModal={setShowModal}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
