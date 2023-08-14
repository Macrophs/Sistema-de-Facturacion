/**
 * Este es un componente para agregar nuevos clientes al sistema
 */

import StandarButton from "@/components/Buttons/StandarButton";

export default function NewClient() {

    return (
        <>
            <section className="w-full  overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">

                <h4 className="text-blue text-2xl text-center font-bold">Registro de Nuevo Cliente</h4>

                <form action="cedula_cliente.html">

                    <div className="relative z-0 w-full mb-8 group">
                        <input type="email" name="floating_email" id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                            Electrónico</label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="floating_first_name" id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="floating_last_name" id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="floating_cedula" id="floating_cedula"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_cedula"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Cédula (V12345678)
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{7}" name="floating_phone" id="floating_phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_phone"
                                className="top-3 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Número Telfónico (412-XXXXXXX)
                            </label>
                        </div>

                    </div>
                    
                </form>
            
            </section>
            <section className="flex items-center justify-center pt-8">
                <StandarButton label={"Registrar Nuevo Cliente"} url={"#"}/>
            </section>
        </>
    );
};