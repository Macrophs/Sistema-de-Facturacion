/**
 * Este es un componente para agregar nuevos productos al sistema
 */

import NewItemDBHelper from "@/Helpers/NewItemDBHelper";
import { obtainProductsHelper } from "@/Helpers/ObtainDataHelper";
import { validateForm } from "@/JS/ValidateInput";
import StandarButton from "@/components/Buttons/StandarButton";
import Input from "@/components/Tables/Input";
import { Connect } from "@/services/Connect";
import { VerifyNotActiveProduct } from "@/services/VerifyNotActiveNewUser";
import { useEffect, useState } from "react";

export default function NewProducto({ onClose, newProduct }) {
  //useState que contendrá toda la informacion de los input del formulario
  const [formData, setformData] = useState({
    name: "",
    price: 0,
    quantity: 0,
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

  //se encarga de validar que la información del formulario no tenga ningun error, para poder enviarla a la bd
  const ValidateData = async () => {
    const validationErrors = await validateForm(formData, "product"); //Se llama a la función que valida los posibles errores en los input
    if (Object.keys(validationErrors).length === 0) {
      setFinish(await Connect("product", "POST", formData)); //se envia a la bd

      newProduct(); //se indica que se agrego un nuevo campo, para que se actualice la tabla dinamicamente
    }
    setErrors(validationErrors); //se actualizan los errores
  };
  //no ha finalizado el registro
  if (!finish) {
    return (
      <>
        <section className="w-full overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">
          <h4 className="text-blue text-2xl text-center font-bold">
            Registro de Nuevo Producto
          </h4>

          <form action="/admin/gestion_productos">
            <div className="relative z-0 w-full mb-8 group">
              <Input
                label={"Nombre"}
                name={"name"}
                type={"text"}
                value={formData.name}
                InputChange={InputChange}
              />

              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-8 group">
                <Input
                  label={"Precio"}
                  name={"price"}
                  type={"number"}
                  value={formData.price}
                  InputChange={InputChange}
                />
                {errors.price && <p className="text-red-500">{errors.price}</p>}
              </div>

              <div className="relative z-0 w-full mb-8 group">
                <Input
                  label={"Cantidad en Stock"}
                  name={"quantity"}
                  type={"number"}
                  value={formData.quantity}
                  InputChange={InputChange}
                />
                {errors.quantity && (
                  <p className="text-red-500">{errors.quantity}</p>
                )}
              </div>
            </div>
          </form>
        </section>
        <section className="flex items-center justify-center pt-8">
          <StandarButton
            label={"Registrar Nuevo Producto"}
            onClick={() => ValidateData()}
            url={"#"}
          />
        </section>
      </>
    );
  } else {
    return (
      <>
        <h4 className="text-marianBlue text-2xl text-center font-bold">
          Se Agrego correctamente el Producto:
        </h4>
        <section className="flex justify-center items-center  flex-col mt-5 text-xl">
          <section className="p-2">
            <p>
              <span className="text-marianBlue font-bold">Nombre: </span>{" "}
              {formData.name}
            </p>
            <p>
              <span className="text-marianBlue font-bold">Precio: </span>{" "}
              {formData.price}
            </p>
            <p>
              <span className="text-marianBlue font-bold">
                Cantidad en Stock:{" "}
              </span>{" "}
              {formData.quantity}
            </p>
          </section>
          <StandarButton
            label={"Salir"}
            url={"#"}
            className=" text-base xl:w-36 mt-10 "
            onClick={() => onClose()}
          />
        </section>
      </>
    );
  }
}
