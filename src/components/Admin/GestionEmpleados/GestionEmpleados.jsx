"use client";
import Search from "@/components/Tables/Search";
import TableEmployee from "./TableEmployee";
import Pagination from "@/components/Tables/Pagination";
import { useState } from "react";
import AddModalButton from "@/components/Buttons/AddModalButton";
import Modal from "@/components/Modal/Modal";
import NewEmpleado from "./NewEmpleado";
import EditEmpleado from "./EditEmpleado";
import WarningModal from "@/components/Modal/WarningModal";

/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de empleados
 */

export default function GestionEmpleados() {
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  let componentModal = [""];

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if(componentSelect[0] === "Add")
    componentModal = <NewEmpleado/>

  else if(componentSelect[0] === "Edit")
    componentModal = <EditEmpleado id={componentSelect[1]}/>

  else if(componentSelect[0] === "Delete")
    componentModal = <WarningModal id={componentSelect[1]} entity={"Empleado"} identifier={'V30123422'} name={'Jose Perez'}/>

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Empleados
        </h4>

        <div class="flex items-center justify-between py-4 bg-white">
          <Search label={"Buscar Empleado"} />

          <AddModalButton
            url={"/"}
            label={"Registrar Empleado"}
            setShowModal={setShowModal}
            setComponentVisible={setComponentVisible}
          />
        </div>

        <TableEmployee setShowModal={setShowModal} setComponentVisible={setComponentVisible}/>

        <Pagination />
      </section>
      <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
        {componentModal}
      </Modal>
    </section>
  );
}
