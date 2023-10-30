import { Connect } from "@/services/Connect";
import { useRouter } from "next/router";

/**
 * Este es un componente para Eliminar Clientes del sistema
 * @param id se refiere al id de la entidad a eliminar seleccionada
 * @param entity es el texto que aparecera en el mensaje de warning dependiendo a la entidad a eliminar
 * @param identifier se refiere al codigo o cedula dependiendo si es producto o usuario o empleado a eliminar
 */
export default function WarningModal({
  id,
  entity,
  entityName,
  identifier,
  name,
  onClose,
  update,
}) {


  const handleDelete = async () => {
    await Connect(entity, "DELETE", { id: id }).then(onClose());
    alert("Se ha eliminado correctamente al "+entityName+" "+name)
    update(); // se indica que se modifico la tabla para que se recargue
  };
  return (
    <>
      <section className="flex items-center justify-center flex-col text-center">
        <h1 className=" text-2xl pt-4">
          ¿Está Seguro que desea{" "}
          <span className=" text-red-500 font-bold">ELIMINAR</span> al{" "}
          {entityName}:
        </h1>
        <h1 className=" text-2xl pt-4 font-bold">{` ${name}`} </h1>
        <h1 className=" text-2xl pt-4"> del Sistema?</h1>
      </section>

      <section className="flex items-center justify-center pt-10">
        <button
          className="p-2 bg-marianBlue text-white font-bold text-center  rounded-lg text-1xl px-4 py-2.5 mr-2 mb-2"
          onClick={() => onClose()}
        >
          {" "}
          Cancelar
        </button>
        <button
          className="p-2 bg-red-500 text-white font-bold text-center  rounded-lg text-1xl px-4 py-2.5 mr-2 mb-2"
          onClick={handleDelete}
        >
          {" "}
          ELIMINAR
        </button>
      </section>
    </>
  );
}
