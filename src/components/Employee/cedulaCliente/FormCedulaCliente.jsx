"use client"
import { VerificationCedula } from "@/Helpers/VerificationCedulaHelper"
import { isValidCedula } from "@/JS/ValidateInput"
import StandarButton from "@/components/Buttons/StandarButton"
import { Connect } from "@/services/Connect"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
/**
 * Este es un componente de la pagina cedula cliente para el formulario de solicitud de cedula cliente
 */


export default function FormCedulaCliente() {
    const [cedula, setCedula] = useState("");
    const [errors, setErrors] = useState({});
    
    const router = useRouter();

    const InputChange = (event) => {
        const {value} = event.target;
   
        setCedula(value);
      };

      //almacena los errores al escribir información en los input
    const validateForm = (data) => {

        const errors = {};
        //validaciones input cedula
        if (data.length === 0) 
            errors.cedula = 'La cédula es requerida';
        else if (!isValidCedula(data)) 
            errors.cedula = 'La cédula no es válida';
        return errors;
    };

  
    //se encarga de validar que la información del formulario no tenga ningun error, para poder enviarla a la bd
    const ValidateData = async (e) =>
    {
        e.preventDefault();
        const validationErrors = validateForm(cedula);
        if (Object.keys(validationErrors).length === 0) {
            //redireccionamiento
            const condition = `conditions= and cedula = '${cedula}'`;
            if(await Connect("client?"+condition,"GET"))
            {
                //redireccionamiento compra de producto
                router.push(`compra_productos?Cedula=${cedula}`);
            }
            else{
                //redireccionamiento agregar nuevo cliente
                router.push(`gestion_clientes?newCedula=${cedula}`);
            }
          }
        setErrors(validationErrors); //se actualizan los errores
    }

  return (
    <section className="flex items-center justify-center sm:h-4/6">
            <section>
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Ingreso Facturación</h1>

                <form className="flex items-center justify-center flex-col" onSubmit={ValidateData}  >
                    <label  className="block mb-7 text-base font-medium  text-black">Datos del
                        Cliente</label>
                    <div className="flex lg:w-96">
                        <span
                            className="bg-marianBlue inline-flex items-center px-3 text-base border border-r-0 rounded-l-md text-black border-gray-400">
                            <Image width={16} height={16} src="../images/icons/user.svg" alt="icon user" />

                        </span>
                        <input type="text" value={cedula} onChange={InputChange}
                            className="rounded-none rounded-r-lg border  block flex-1 min-w-0 w-full text-base p-2.5  bg-white border-gray-400 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Cédula" />
                       
                    </div>
                    {errors.cedula && <p className="text-red-500 mt-4  text-lg">{errors.cedula}</p>}
                    <StandarButton url={"#"} label={"Ingresar"} className={"mt-10 min-w-full"} onClick={ValidateData}  />

                </form>
            </section>
        </section>
  )
}
