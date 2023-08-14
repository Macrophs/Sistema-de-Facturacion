import Link from "next/link";
/**
 * Este es un componente para mostrar la modal de edición
 * @params props setShowModal: Función que usa useState para controlar que se haga visible la modal, setComponentVisible = Función que usa useState para controlar que se mostrará en la modal
 */

export default function EditModalButton({setShowModal, setComponentVisible, id }) {

  return (
    <button
      onClick={() => {setShowModal(true); setComponentVisible("Edit/"+id)}}
      className="text-marianBlue font-medium hover:underline"
    >
      Editar
    </button>
  );
}
