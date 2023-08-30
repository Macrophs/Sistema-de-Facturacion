'use client'
import Search from "@/components/Tables/Search";
import TableFactura from "./TableFactura";
import Pagination from "@/components/Tables/Pagination";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import WarningModal from "@/components/Modal/WarningModal";

/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de Facturas
 */

export default function GestionFacturas() {
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  let componentModal = [""];

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if (componentSelect[0] === "Delete")
    componentModal = (
      <WarningModal
        id={componentSelect[1]}
        entity={"Facturación"}
        identifier={"#2020"}
        name={""}
        onClose={()=> setShowModal(false)}
      />
    );

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Facturas
        </h4>

        <div class="flex items-center justify-between py-4 bg-white">
          <Search label={"Buscar Facturas"} />
        </div>

        <TableFactura
          setShowModal={setShowModal}
          setComponentVisible={setComponentVisible}
        />

        <Pagination />
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {componentModal}
      </Modal>
    </section>
  );
}
