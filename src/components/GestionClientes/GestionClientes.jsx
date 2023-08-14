import Search from "../Tables/Search";

import Pagination from "../Tables/Pagination";
import StandarButton from "../Buttons/StandarButton";
import TableClient from "./TableClient";

/**
 * Este es un componente relacionado a la gestion de clientes
 */

export default function GestionClientes() {
  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Clientes
        </h4>

        <div class="flex items-center justify-between py-4 bg-white">
          <Search label={"Buscar Cliente"} />

          <StandarButton url={"/"} label={"Registrar Cliente"} />
        </div>

        <TableClient />

        <Pagination />
      </section>
    </section>
  );
}
