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

/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de empleados
 */

export default function GestionEmpleados() {
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  const [employee, setEmployee] = useState();
  const [search, setSearch] = useState();

  function addEmployee() {
    setEmployee(!employee)
  }

  const [paginatorController, setPaginatorController] = useState({ LimitUp: 1, LimitDown: 5 });

  function ObtainChangeTable(changes) {
    setPaginatorController(changes);
  }

  function changeSearch(search) {
    let filter = "";
    if(search) filter = `and (Users.name ILIKE '%${search}%' or Users.lastname ILIKE '%${search}%' or  Users.cedula ILIKE '%${search}%' ) `;
    filter = encodeURIComponent(filter);
    setSearch("conditions= "+filter);
  }

  let componentModal = [""];

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if (componentSelect[0] === "Add")
    componentModal = <NewEmpleado onClose={() => setShowModal(false)} newEmployee={addEmployee} />

  else if (componentSelect[0] === "Edit")
    componentModal = <EditEmpleado id={componentSelect[1]} onClose={() => setShowModal(false)}  NewEmployee={addEmployee} />

  else if (componentSelect[0] === "Delete") {
    const cedula = componentSelect[1];
    const fullName = componentSelect[2];

    componentModal = (
      <WarningModal
        id={cedula}
        entity={"employee"}
        entityName={"Empleado"}
        identifier={cedula}
        name={fullName}
        onClose={() => setShowModal(false)}
        update={addEmployee}
      />
    );
  }

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Empleados
        </h4>

        <div class="flex items-center justify-between flex-col md:flex-row py-4 bg-white">
          <Search label={"Buscar Empleado"} setSearch={changeSearch}/>

          <StandarButton
            url={"#"}
            label={"Registrar Empleado"}
            onClick={() => { setShowModal(true); setComponentVisible("Add/") }}
          />
        </div>

        <TableEmployee setShowModal={setShowModal} setComponentVisible={setComponentVisible} newEmployee={employee} Search={search} PaginatorController={paginatorController} />

        <Pagination newData={employee} obtainData={"employee"} Search={search} ChangeTable={ObtainChangeTable} />
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {componentModal}
      </Modal>
    </section>
  );
}
