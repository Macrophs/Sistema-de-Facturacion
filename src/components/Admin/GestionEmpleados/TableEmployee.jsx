/**
 * Este es un componente para utilizar la tabla que muestra la gestion de empleados
 */

export default function TableEmployee() {
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
        {elements.map(({ label, cedula }) => (
          <tr key={cedula} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{cedula}</td>
            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <div className="pl-3">
                <div className="text-base font-semibold">{label}</div>
                <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
              </div>
            </td>

            <td className="px-6 py-4">
              <a
                href="modificar_cliente.html"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                className="text-marianBlue font-medium hover:underline"
              >
                Editar
              </a>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                className="font-medium text-red-600  hover:underline"
              >
                Eliminar{" "}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
