/**
 * Este es un componente para agregar nuevos empleados al sistema
 */

import NewItemDBHelper from "@/Helpers/NewItemDBHelper";
import { isValidCedula, isValidEmail, isValidPhoneNumber } from "@/JS/ValidateInput";
import StandarButton from "@/components/Buttons/StandarButton";
import Input from "@/components/Tables/Input";
import { useEffect, useState } from "react";

export default function NewEmpleado({onClose, newEmployee}) {

  
    //useState que contendrá toda la informacion de los input del formulario
    const [formData, setformData] = useState({
        name: "",
        lastname: "",
        email: "",
        cedula: "",
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
            setFinish(NewItemDBHelper(formData,"employee")); //se envia a la bd
            newEmployee(true);  //se indica que se agrego un nuevo campo, para que se actualice la tabla dinamicamente
          }
        setErrors(validationErrors); //se actualizan los errores
    }
  //no ha finalizado el registro
  if(!finish)
  {
    return (
    <>
      <section className="w-full overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
        <h4 className="text-blue text-2xl text-center font-bold">
          Registro de Nuevo Empleado
        </h4>

        <form action="/admin/gestion_empleados">
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
        <StandarButton label={"Registrar Nuevo Empleado"} url={"#"} onClick={()=> ValidateData()} />
      </section>
    </>
  );
  }
  //si ha finalizado el registro
  else{
    return (
        <>
         
            <h4 className="text-marianBlue text-2xl text-center font-bold">Se Agrego correctamente al Empleado:</h4>
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
  
}
