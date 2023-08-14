/**
 * Este es un componente para desplegar la modal del boton agregar
 * @params props label: nombre de la interfaz, setShowModal: Función que usa useState para controlar que se haga visible la modal, setComponentVisible = Función que usa useState 
 * para controlar que se mostrará en la modal
 */

export default function AddModalButton({label, setShowModal, setComponentVisible }) {

  return (
    <button
      onClick={() => {setShowModal(true); setComponentVisible("Add/")}}
      className="bg-marianBlue text-white text-center sm:w-1/5 focus:ring-4 font-medium rounded-lg text-sm py-2.5 mr-2 mb-2 "
    >
      {label}
    </button>
  );
}
