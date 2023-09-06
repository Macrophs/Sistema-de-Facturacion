"use client"
import Search from "../../Tables/Search";
import TableProducts from "./TableProducts";
import Pagination from "../../Tables/Pagination";
import DataClient from "./DataClient";
import { useEffect, useState } from "react";
import { obtainProductsHelper } from "@/Helpers/ObtainDataHelper";
/**
 * Este es un componente relacionado a la compra de productos, contendrá la tabla con los productos
 */

export default function TableBuy(props) {
  const [paginatorController, setPaginatorController] = useState({LimitUp:1,LimitDown:5});

  function ObtainChangeTable(changes)
    {
      setPaginatorController(changes);
    }
  return (
    <section className="flex  items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-2/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <DataClient Client={props.ClientData} />
        <Search label={"Buscar Productos"} />

        <TableProducts ProductsChange={props.ProductsChange} DeleteProduct={props.DeleteProduct} ProductToUnselect={props.DeleteSelectProduct} PaginatorController={paginatorController}  />

        <Pagination newData={null} obtainData={obtainProductsHelper} ChangeTable={ObtainChangeTable} />
      </section>
    </section>
  );
}
