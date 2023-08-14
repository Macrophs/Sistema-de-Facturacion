import Search from "../Tables/Search";
import TableProducts from "./TableProducts";
import Pagination from "../Tables/Pagination";
import DataClient from "./DataClient";
/**
 * Este es un componente relacionado a la compra de productos, contendrá la tabla con los productos
 */

export default function TableBuy() {
  return (
    <section className="flex  items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-2/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <DataClient />
        <Search label={"Buscar Productos"} />

        <TableProducts />

        <Pagination />
      </section>
    </section>
  );
}
