
/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de productos 
 */

import StandarButton from "@/components/Buttons/StandarButton";
import Search from "@/components/Tables/Search";
import TableProducts from "./TableProducts";
import Pagination from "@/components/Tables/Pagination";

export default function GestionProductos() {
  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Productos
        </h4>

        <div class="flex items-center justify-between py-4 bg-white">
          <Search label={"Buscar Producto"} />

          <StandarButton url={"/"} label={"Registrar Productos"} />
        </div>

        <TableProducts />

        <Pagination />
      </section>
    </section>
  );
}
