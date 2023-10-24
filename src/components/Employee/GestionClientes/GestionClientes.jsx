'use client'
import Search from "../../Tables/Search";

import Pagination from "../../Tables/Pagination";
import Modal from "@/components/Modal/Modal";

import { useState } from "react";
import NewClient from "./NewClient";
import EditClient from "./EditClient";
import WarningModal from "@/components/Modal/WarningModal";
import StandarButton from "@/components/Buttons/StandarButton";
import TableClient from "./TableClient";
import { useSearchParams } from 'next/navigation'


/**
 * Este es un componente relacionado a la gestion de clientes
 */

export default function GestionClientes() {
  // showModal = bool que determina si se muestra o no la ventana modal, componentVisible = Almacena que tipo de contenido se quiere mostrar en la modal

  //obtener cedula de la url
  const searchParams = useSearchParams();
  const cedula = searchParams.get("newCedula");

  const [showModal, setShowModal] = useState(cedula ? true : false);
  const [componentVisible, setComponentVisible] = useState("/");

  const [client, setClient] = useState(false);

  const [paginatorController, setPaginatorController] = useState({ LimitUp: 1, LimitDown: 5 });

  const [search, setSearch] = useState();

  function addClient() {
    setClient(!client)
  }

  function changeSearch(search) {
    let filter = "";
    if(search) filter = `and name ILIKE '%${search}%' or lastname ILIKE '%${search}%' or  cedula ILIKE '%${search}%' `;
    filter = encodeURIComponent(filter);
    setSearch("conditions= "+filter);
  }
  function ObtainChangeTable(changes) {
    setPaginatorController(changes);
  }
  let componentModal = [""];

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if (componentSelect[0] === "Add")
    componentModal = <NewClient onClose={() => setShowModal(false)} NewClient={addClient} Cedula={null} />

  else if (componentSelect[0] === "Edit")
    componentModal = <EditClient id={componentSelect[1]}  onClose={() => setShowModal(false)}  NewClient={addClient}  />

  else if (componentSelect[0] === "Delete") {

    const ceduladelete = componentSelect[1];
    const fullName = componentSelect[2]; // Aquí deberías obtener el nombre completo de algún modo, ya sea pasándolo por la URL o buscándolo en tus datos.

    componentModal = (
      <WarningModal
        id={ceduladelete}
        entity={"client"}
        entityName={"Cliente"}
        identifier={ceduladelete}
        name={fullName}
        onClose={() => setShowModal(false)}
      />
    );

    
    
  }
  
  if (cedula !== null && componentSelect[0] == "") {
    componentModal = <NewClient onClose={() => setShowModal(false)} NewClient={addClient} Cedula={cedula} />
  }

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Clientes 
        </h4>

        <div className="flex items-center flex-col md:flex-row justify-between py-4 bg-white">
          <Search label={"Buscar Cliente"} setSearch={changeSearch} />

          <StandarButton url={"#"} label={"Registrar Cliente"} onClick={() => { setShowModal(true); setComponentVisible("Add/") }} />

        </div>

        <TableClient setShowModal={setShowModal} setComponentVisible={setComponentVisible} NewClient={client} Search={search} PaginatorController={paginatorController} />
        <Pagination newData={client} Search={search} obtainData={"client"} ChangeTable={ObtainChangeTable} /> 

        
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {componentModal}
      </Modal>
    </section>
  );
}
