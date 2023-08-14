/**
 * Este es un componente para Eliminar Clientes del sistema
 */
export default function DeleteClient({id}) {

    return (
        <>
            <section className="flex items-center justify-center flex-col">
                <h1 className=" text-2xl pt-4">¿Está Seguro que desea <span className=" text-red-500 font-bold">ELIMINAR</span> al Cliente:</h1>
                <h1 className=" text-2xl pt-4 font-bold">V12345678 José Torres</h1>
                <h1 className=" text-2xl pt-4"> del Sistema?</h1>
            </section>

            <section className="flex items-center justify-center pt-10">
                <button className="p-2 bg-marianBlue text-white font-bold text-center  rounded-lg text-1xl px-4 py-2.5 mr-2 mb-2"> Cancelar</button>
                <button className="p-2 bg-red-500 text-white font-bold text-center  rounded-lg text-1xl px-4 py-2.5 mr-2 mb-2"> ELIMINAR</button>
            </section>

        </>
    );
};