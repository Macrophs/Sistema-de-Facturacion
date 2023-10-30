'use client'
import Search from "@/components/Tables/Search";
import TableFactura from "./TableFactura";
import Pagination from "@/components/Tables/Pagination";

import { useState } from "react";


/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de Facturas
 */

export default function GestionFacturas() {
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  const [paginatorController, setPaginatorController] = useState({ LimitUp: 1, LimitDown: 5 });

  const [search, setSearch] = useState();

  function ObtainChangeTable(changes) {
    setPaginatorController(changes);
  }

  function changeSearch(search) {
    let filter = "";
    if(search) filter = `where client.name ILIKE '%${search}%' or client.lastname ILIKE '%${search}%' or  client.cedula ILIKE '%${search}%' `;
    filter = encodeURIComponent(filter);
    setSearch("conditions= "+filter);
  }


  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Facturas
        </h4>

        <div class="flex items-center justify-between py-4 bg-white">
          <Search label={"Buscar Facturas"}  setSearch={changeSearch} />
        </div>

        <TableFactura
          setShowModal={setShowModal}
          setComponentVisible={setComponentVisible}
          Search={search}
          PaginatorController={paginatorController}
        />

        <Pagination newData={null} obtainData={"invoice"} Search={search} ChangeTable={ObtainChangeTable} />
      </section>
     
    </section>
  );
}
