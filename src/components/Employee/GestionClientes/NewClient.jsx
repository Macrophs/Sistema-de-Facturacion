"use client"
import NewClientHelper from "@/Helpers/NewClientHelper";
import {isValidCedula, isValidEmail, isValidPhoneNumber} from "@/JS/ValidateInput"; //funciones para validar input
import StandarButton from "@/components/Buttons/StandarButton";
import { useState } from "react";

/**
 * Este es un componente para agregar nuevos clientes al sistema
*/

export default function NewClient({onClose, NewClient ,Cedula}) {

    
    //useState que contendrá toda la informacion de los input del formulario
    const [formData, setformData] = useState({
        name: "",
        lastname: "",
        email: "",
        cedula: Cedula ? Cedula : "",
        phone: "",

    });
    const [errors, setErrors] = useState({}); //useState para mostrar errores al ingresar campos

    const [finish, setFinish] = useState(false); //useState para finalizar el registro y mostrar otra interfaz

    //funcion para agregar la data actualizada del input en formData
    const InputChange = (event) => {
        const { name, value } = event.target;
        //se copia la información anterior y se le agrega los nuevos parametros
        setformData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      

    //almacena los errores al escribir información en los input
    const validateForm = (data) => {

        const errors = {};

        //validaciones input name
        if (data.name.length === 0)
            errors.name = 'El nombre es requerido';
        else if(data.name.length > 25) 
            errors.name = 'El nombre no puede tener más de 25 caracteres';
    

        //validaciones input lastname
        if (data.lastname.length === 0) 
            errors.lastname = 'El apellido es requerido';
        else if (data.lastname.length > 25) 
            errors.lastname = 'El apellido no puede tener más de 25 caracteres';
        
        //validaciones input email
        if (data.email.length === 0) 
            errors.email = 'El correo electrónico es requerido';
        else if(!isValidEmail(data.email)) 
            errors.email = 'El correo electrónico no es válido';
    
        //validaciones input phone
        if (data.phone.length === 0) 
            errors.phone = 'El número de teléfono es requerido';
        else if (!isValidPhoneNumber(data.phone)) 
            errors.phone = 'El número de teléfono no es válido';
    

        //validaciones input cedula
        if (data.cedula.length === 0) 
            errors.cedula = 'La cédula es requerida';
        else if (!isValidCedula(data.cedula)) 
            errors.cedula = 'La cédula no es válida';
        
        return errors;
    };

  
    //se encarga de validar que la información del formulario no tenga ningun error, para poder enviarla a la bd
    const ValidateData =() =>
    {
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            setFinish(NewClientHelper(formData)); //se envia a la bd
            NewClient(true);  //se indica que se agrego un nuevo campo, para que se actualice la tabla dinamicamente
          }
        setErrors(validationErrors); //se actualizan los errores
    }


    //si no ha finalizado el registro
    if(!finish){
    return (
        <>
            <section className="w-full  overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">

                <h4 className="text-blue text-2xl text-center font-bold">Registro de Nuevo Cliente</h4>

                <form action="cedula_cliente.html">

                    <div className="relative z-0 w-full mb-8 group">
                        <input type="email" name="email" value={formData.email} onChange={InputChange} id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                            Electrónico</label>
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="name" value={formData.name} onChange={InputChange} id="name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>

                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="lastname" value={formData.lastname} onChange={InputChange} id="lastname"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="lastname"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                             {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <input type="text" name="cedula" value={formData.cedula} onChange={InputChange} id="cedula"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="cedula"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Cédula (V12345678)
                            </label>
                            {errors.cedula && <p className="text-red-500">{errors.cedula}</p>}
                        </div>

                        <div className="relative z-0 w-full mb-8 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{7}" name="phone" value={formData.phone} onChange={InputChange} id="phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="phone"
                                className="top-3 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Número Telfónico (412-XXXXXXX)
                            </label>
                            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                        </div>

                    </div>
                    
                </form>
            
            </section>
            <section className="flex items-center justify-center pt-8">
                <StandarButton label={"Registrar Nuevo Cliente"} onClick={()=> ValidateData()} url={"#"} />
            </section>
        </>
    );
    }
    //si ha finalizado el registro
    else{
        return (
            <>
             
                <h4 className="text-marianBlue text-2xl text-center font-bold">Se Agrego correctamente al Cliente:</h4>
                <section className="flex justify-center items-center  flex-col mt-5 text-xl">

                    <section className="p-2">
                        <p><span className="text-marianBlue font-bold">Cédula: </span> {formData.cedula}</p>
                        <p><span className="text-marianBlue font-bold">Nombre y Apellido: </span> {formData.name} {formData.lastname}</p>
                        <p><span className="text-marianBlue font-bold">Correo: </span> {formData.email}</p>
                        <p><span className="text-marianBlue font-bold">Teléfono: </span> {formData.phone}</p>
                        
    
                    </section>
                    <StandarButton label={"Salir"} url={"#"} 
                    className=" text-base xl:w-36 mt-10 " 
                    onClick={() => onClose()} 

                    /> 
                </section>
                
                
            </>

        );
    }
};