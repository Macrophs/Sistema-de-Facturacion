import Link from "next/link";
/**
 * Este es un componente para mostrar la modal de edición
 * @params props setShowModal: Función que usa useState para controlar que se haga visible la modal, setComponentVisible = Función que usa useState 
 * para controlar que se mostrará en la modal
 */

export default function DeleteModalButton({setShowModal, setComponentVisible, id }) {

  return (
    <button
      onClick={() => {setShowModal(true); setComponentVisible("Delete/"+id)}}
      className="text-red-600 font-medium hover:underline"
    >
      Eliminar
    </button>
  );
}
