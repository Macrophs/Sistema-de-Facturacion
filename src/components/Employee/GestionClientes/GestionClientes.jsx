'use client'
import Search from "../../Tables/Search";

import Pagination from "../../Tables/Pagination";
import TableClient from "./TableClient";
import Modal from "@/components/Modal/Modal";

import { useState } from "react";
import AddModalButton from "@/components/Buttons/AddModalButton";
import NewClient from "./NewClient";
import EditClient from "./EditClient";
import DeleteClient from "./DeleteClient";

/**
 * Este es un componente relacionado a la gestion de clientes
 */

export default function GestionClientes() {
  // showModal = bool que determina si se muestra o no la ventana modal, componentVisible = Almacena que tipo de contenido se quiere mostrar en la modal
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  let componentModal;


  //(componentVisible.split("/")) = Edit/{id}

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if(componentSelect[0] === "Add")
    componentModal = <NewClient/>

  else if(componentSelect[0] === "Edit")
    componentModal = <EditClient id={componentSelect[1]}/>

  else if(componentSelect[0] === "Delete")
    componentModal = <DeleteClient id={componentSelect[1]}/>

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Clientes
        </h4>

        <div class="flex items-center justify-between py-4 bg-white">
          <Search label={"Buscar Cliente"} />
          
          <AddModalButton url={"/"} label={"Registrar Cliente"} className=" w-full" setShowModal={setShowModal} setComponentVisible={setComponentVisible} />
          
        </div>

        <TableClient setShowModal={setShowModal} setComponentVisible={setComponentVisible} />

        <Pagination />
      </section>
    <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
      {componentModal}
    </Modal>
    </section>
  );
}
