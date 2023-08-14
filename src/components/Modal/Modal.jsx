
/**
 * Este es un componente global para colocar Ventanas Modales
 * @param props isVisible: bool para determinar si se muestra o no la modal, onClose: funcion que permite cerrar la modal, children: contenido de la modal
 */

export default function Modal({isVisible , onClose, children}) {
    if(!isVisible) return null;
    return(
        <section className="fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm z-20 flex justify-center items-center ">
            <section className="w-2/3 flex flex-col ">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()} >X</button>
                <section className="bg-slate-100  p-10 rounded-md ">
                    {children}
                </section>
            </section>
            
        </section>
    );
    
}