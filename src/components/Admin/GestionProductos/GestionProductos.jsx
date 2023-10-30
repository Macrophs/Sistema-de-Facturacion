"use client";
import Search from "@/components/Tables/Search";
import TableProducts from "./TableProducts";
import Pagination from "@/components/Tables/Pagination";
import { useState } from "react";
import NewProducto from "./NewProducto";
import Modal from "@/components/Modal/Modal";
import EditProducto from "./EditProducto";
import WarningModal from "@/components/Modal/WarningModal";
import StandarButton from "@/components/Buttons/StandarButton";


/**
 * Este es un componente que engloba toda la estructura de la interfaz gestion de productos
 */

export default function GestionProductos() {
  const [showModal, setShowModal] = useState(false);
  const [componentVisible, setComponentVisible] = useState("/");

  const [product, setProducts] = useState(false);
  const [search, setSearch] = useState();

  function addproduct() {
    setProducts(!product);
  }

  const [paginatorController, setPaginatorController] = useState({
    LimitUp: 1,
    LimitDown: 5,
  });

  function ObtainChangeTable(changes) {
    setPaginatorController(changes);
  }

  let componentModal = [""];

  // Usamos destructuring para extraer los valores de componentSelect
  let componentSelect = componentVisible.split("/");

  function changeSearch(search) {
    let filter = "";
    if (search)
      filter = `and name ILIKE '%${search}%'`;
    filter = encodeURIComponent(filter);
    setSearch("conditions= " + filter);
  }

  function ObtainChangeTable(changes) {
    setPaginatorController(changes);
  }

  // Se asigna la vista a la modal, dependiendo de la opción seleccionada
  if (componentSelect[0] === "Add") {
    componentModal = (
      <NewProducto
        onClose={() => setShowModal(false)}
        newProduct={addproduct}
      />
    );
  } else if (componentSelect[0] === "Edit") {
    componentModal = (
      <EditProducto
        id={componentSelect[1]}
        onClose={() => setShowModal(false)}
        NewProduct={addproduct}
      />
    );
  } else if (componentSelect[0] === "Delete") {
    componentModal = (
      <WarningModal
        id={componentSelect[1]} // Aquí pasamos el código del producto como ID
        entity={"product"}
        entityName={"Producto"}
        identifier={"#"+componentSelect[1]} // Aquí pasamos el código del producto como identificador
        name={componentSelect[2]} // Aquí pasamos el nombre del producto
        onClose={() => setShowModal(false)}
        update={addproduct}
      />
    );
  }

  return (
    <section className="flex items-center justify-center  lg:mt-0 ">
      <section className="w-full lg:w-3/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Gestión de Productos
        </h4>

        <div class="flex items-center justify-between flex-col md:flex-row py-4 bg-white">
          <Search label={"Buscar Producto"} setSearch={changeSearch} />

          <StandarButton
            url={"#"}
            label={"Registrar Producto"}
            onClick={() => {
              setShowModal(true);
              setComponentVisible("Add/");
            }}
          />
        </div>

        <TableProducts
          setShowModal={setShowModal}
          setComponentVisible={setComponentVisible}
          newProduct={product}
          Search={search}
          PaginatorController={paginatorController}
        />

        <Pagination
          newData={product}
          Search={search}
          obtainData={"product"}
          ChangeTable={ObtainChangeTable}
        />
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {componentModal}
      </Modal>
    </section>
  );
}
