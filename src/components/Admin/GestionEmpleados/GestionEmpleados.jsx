"use client";
import Search from "@/components/Tables/Search";
import TableEmployee from "./TableEmployee";
import Pagination from "@/components/Tables/Pagination";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import NewEmpleado from "./NewEmpleado";
import EditEmpleado from "./EditEmpleado";
import WarningModal from "@/components/Modal/WarningModal";
import StandarButton from "@/components/Buttons/StandarButton";
import { obtainEmployeesHelper } from "@/Helpers/ObtainDataHelper";

/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de empleados
 */

export default function GestionEmpleados() {
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  const [employee, setEmployee] = useState();

  function addEmployee(employee){
    setEmployee(employee)
  }

  const [paginatorController, setPaginatorController] = useState({LimitUp:1,LimitDown:5});

  function ObtainChangeTable(changes)
  {
    setPaginatorController(changes);
  }
  

  let componentModal = [""];

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if(componentSelect[0] === "Add")
    componentModal = <NewEmpleado onClose={()=> setShowModal(false)} newEmployee={addEmployee} />

  else if(componentSelect[0] === "Edit")
    componentModal = <EditEmpleado id={componentSelect[1]}/>

  else if(componentSelect[0] === "Delete")
    componentModal = <WarningModal id={componentSelect[1]} entity={"Empleado"} identifier={'V30123422'} name={'Jose Perez'} onClose={()=> setShowModal(false)}/>

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Empleados
        </h4>

        <div class="flex items-center justify-between flex-col md:flex-row py-4 bg-white">
          <Search label={"Buscar Empleado"} />

          <StandarButton
            url={"#"}
            label={"Registrar Empleado"}
            onClick={() => {setShowModal(true); setComponentVisible("Add/")}}
          />
        </div>

        <TableEmployee setShowModal={setShowModal} setComponentVisible={setComponentVisible} newEmployee={employee} PaginatorController={paginatorController}/>

        <Pagination newData={employee} obtainData={obtainEmployeesHelper} ChangeTable={ObtainChangeTable}/>
      </section>
      <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
        {componentModal}
      </Modal>
    </section>
  );
}
