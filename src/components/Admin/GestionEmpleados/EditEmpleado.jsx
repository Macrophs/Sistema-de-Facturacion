/**
 * Este es un componente para Editar Clientes del sistema
 */

"use client"
import EditItemDBHelper from "@/Helpers/EditItemDBHelper";
import { obtainEmployeesHelper } from "@/Helpers/ObtainDataHelper";
import { isValidCedula, isValidEmail, isValidPhoneNumber, validateForm } from "@/JS/ValidateInput";

import StandarButton from "@/components/Buttons/StandarButton";
import Input from "@/components/Tables/Input";
import { useEffect, useState } from "react";

export default function EditEmpleado({id,NewEmployee,onClose}) {

    //useState que contendrá toda la informacion de los input del formulario
    const [formData, setformData] = useState({
        name: "",
        lastname: "",
        email: "",
        cedula: "",
        phone: "",

    });

    const [index, setIndex] = useState();

    useEffect(() => {
        const employees = obtainEmployeesHelper();
        const indexEmployee = employees.findIndex((objeto) => objeto.cedula === id);
        if (indexEmployee !== -1) {
            setIndex(indexEmployee);
            const Employeet = employees[indexEmployee];
            setformData(Employeet)
        } 
    }, [id]);

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
      

    
  
    //se encarga de validar que la información del formulario no tenga ningun error, para poder enviarla a la bd
    const ValidateData =() =>
    {
        const validationErrors = validateForm(formData,"employee"); //Se llama a la función que valida los posibles errores en los input
        if (Object.keys(validationErrors).length === 0) {
            setFinish(EditItemDBHelper(formData,"employee",index)); //se envia a la bd
            NewEmployee();  //se indica que se agrego un nuevo campo, para que se actualice la tabla dinamicamente
          }
        setErrors(validationErrors); //se actualizan los errores
    }
 //si no ha finalizado el registro
 
 if(!finish){ 
    return (
        <>
            <section className="w-full  overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">

                <h4 className="text-blue text-2xl text-center font-bold">Editar los Datos de un Empleado </h4>

                <form action="#">
                <div className="relative z-0 w-full mb-8 group">
                        <Input label={"Correo Electrónico"} name={"email"} type={"email"} value={formData.email} InputChange={InputChange} />
                        
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <Input label={"Nombre"} name={"name"} type={"text"} value={formData.name} InputChange={InputChange} />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>

                    <div className="relative z-0 w-full mb-8 group">
                            <Input label={"Apellido"} name={"lastname"} type={"text"} value={formData.lastname} InputChange={InputChange} />
                             {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <Input label={"Cédula (V12345678)"} name={"cedula"} type={"text"} value={formData.cedula} InputChange={InputChange} />
                            {errors.cedula && <p className="text-red-500">{errors.cedula}</p>}
                        </div>

                        <div className="relative z-0 w-full mb-8 group">
                            <Input label={"Número Teléfonico (XXX-XXXXXXX)"} name={"phone"} type={"text"} value={formData.phone} InputChange={InputChange} />
                            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                        </div>

                    </div>      
        
                </form>
            
            </section>
            <section className="flex items-center justify-center pt-8">
                <StandarButton label={"Modificar Empleado"} onClick={()=> ValidateData()} url={"#"} />
            </section>
        </>
        );
    }
    else{
        return (
            <>
             
                <h4 className="text-marianBlue text-2xl text-center font-bold">Se Modifico correctamente al Empleado:</h4>
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