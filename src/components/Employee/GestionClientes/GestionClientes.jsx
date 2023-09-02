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
import { obtainClientHelper } from "@/Helpers/ObtainDataHelper";

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

  const [client, setClient] = useState();

  const [paginatorController, setPaginatorController] = useState({LimitUp:1,LimitDown:5});

  function addClient(client){
    setClient(client)
  }

  function ObtainChangeTable(changes)
  {
    setPaginatorController(changes);
  }
  let componentModal = [""];

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if(componentSelect[0] === "Add")
    componentModal = <NewClient onClose={()=> setShowModal(false)} NewClient={addClient} Cedula={null} />

  else if(componentSelect[0] === "Edit")
    componentModal = <EditClient id={componentSelect[1]}/>

  else if(componentSelect[0] === "Delete")
    componentModal = <WarningModal id={componentSelect[1]} entity={'Cliente'} identifier={'V30123422'} name={'Jose Perez'} onClose={()=> setShowModal(false)}/>

    if(cedula !== null)
    {
      componentModal = <NewClient onClose={()=> setShowModal(false)} NewClient={addClient} Cedula={cedula} />
    }

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Clientes
        </h4>

        <div className="flex items-center flex-col md:flex-row justify-between py-4 bg-white">
          <Search label={"Buscar Cliente"} />
          
          <StandarButton  url={"#"} label={"Registrar Cliente"} onClick={() => {setShowModal(true); setComponentVisible("Add/")}} />
          
        </div>

        <TableClient setShowModal={setShowModal} setComponentVisible={setComponentVisible} NewClient={client} PaginatorController={paginatorController}/>

        <Pagination newData={client} obtainData={obtainClientHelper} ChangeTable={ObtainChangeTable}/>
      </section>
    <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
      {componentModal}
    </Modal>
    </section>
  );
}
