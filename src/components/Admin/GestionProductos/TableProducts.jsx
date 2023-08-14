const elements = [
  {
    codigo: "#12313",
  },
  {
    codigo: "#12313",
  },
  {
    codigo: "#12313",
  },
  {
    codigo: "#12313",
  },
  {
    codigo: "#12313",
  },
];

export default function TableProducts() {
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
        {elements.map(({ codigo }) => (
          <tr key={codigo} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{codigo}</td>

            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <div className="pl-3">
                <div className="text-base font-semibold">Chocolate</div>
              </div>
            </td>

            <td className="px-6 py-4 text-center">1$</td>
            
            <td className="px-6 py-4 text-center">5</td>

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
                Eliminar
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
