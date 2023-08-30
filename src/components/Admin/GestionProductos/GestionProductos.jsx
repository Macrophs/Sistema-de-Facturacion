"use client";
import Search from "@/components/Tables/Search";
import TableProducts from "./TableProducts";
import Pagination from "@/components/Tables/Pagination";
import AddModalButton from "@/components/Buttons/AddModalButton";
import { useState } from "react";
import NewProducto from "./NewProducto";
import Modal from "@/components/Modal/Modal";
import EditProducto from "./EditProducto";
import WarningModal from "@/components/Modal/WarningModal";

/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de productos
 */

export default function GestionProductos() {
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  let componentModal = [""];

  let componentSelect = componentVisible.split("/");

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if (componentSelect[0] === "Add") componentModal = <NewProducto />;
  else if (componentSelect[0] === "Edit")
    componentModal = <EditProducto id={componentSelect[1]} />;
  else if (componentSelect[0] === "Delete")
    componentModal = (
      <WarningModal
        id={componentSelect[1]}
        entity={"Producto"}
        identifier={"#2020"}
        name={"Chocolate"}
        onClose={()=> setShowModal(false)}
      />
    );

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Productos
        </h4>

        <div class="flex items-center justify-between py-4 bg-white">
          <Search label={"Buscar Producto"} />

          <AddModalButton
            url={"/"}
            label={"Registrar Producto"}
            setShowModal={setShowModal}
            setComponentVisible={setComponentVisible}
          />
        </div>

        <TableProducts setShowModal={setShowModal} setComponentVisible={setComponentVisible}/>

        <Pagination />
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {componentModal}
      </Modal>
    </section>
  );
}
