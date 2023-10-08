import { Connect } from "@/services/Connect";

/**
 * Este es un componente para Eliminar Clientes del sistema
 * @param id se refiere al id de la entidad a eliminar seleccionada
 * @param entity es el texto que aparecera en el mensaje de warning dependiendo a la entidad a eliminar
 * @param identifier se refiere al codigo o cedula dependiendo si es producto o usuario o empleado a eliminar
 */
export default function WarningModal({ id, entity,entityName, identifier, name, onClose }) {
    const currentEntitys = "";

    const handleDelete = async () => {

        await Connect(entity,"DELETE",{id:id}).then(onClose());


        let currentEntitys;
        if (entity === "Producto") {
            currentEntitys = JSON.parse(localStorage.getItem("products"))
            if (!currentEntitys) return;

            const productIndex = currentEntitys.findIndex(product => product.name === name);
            if (productIndex === -1) return;

            currentEntitys.splice(productIndex, 1)

            localStorage.setItem("products", JSON.stringify(currentEntitys));
            window.location.href = '/admin/gestion_productos'
        }
        else if (entity === "Empleado") {
            currentEntitys = JSON.parse(localStorage.getItem("employee"));
            if (!currentEntitys) return;

            const employeeIndex = currentEntitys.findIndex(employee => employee.cedula === identifier);
            if (employeeIndex === -1) return;

            currentEntitys.splice(employeeIndex, 1);

            localStorage.setItem("employee", JSON.stringify(currentEntitys));
            window.location.href = '/admin/gestion_empleados';
        }
        else if (entity === "Facturación") {
            currentEntitys = JSON.parse(localStorage.getItem("facturas"));
            if (!currentEntitys) return;

            const facturaIndex = currentEntitys.findIndex(factura => factura.code.toString() === identifier);
            if (facturaIndex === -1) return;

            currentEntitys.splice(facturaIndex, 1);

            localStorage.setItem("facturas", JSON.stringify(currentEntitys));
            window.location.href = '/admin/gestion_facturas';
        }
        else if (entity === "Cliente") {
            currentEntitys = JSON.parse(localStorage.getItem("client"));
            if (!currentEntitys) return;

            const clientIndex = currentEntitys.findIndex(client => client.cedula === identifier);
            if (clientIndex === -1) return;

            currentEntitys.splice(clientIndex, 1);

            localStorage.setItem("client", JSON.stringify(currentEntitys));
            window.location.href = '/employee/gestion_clientes';
        }

    }
    return (
        <>
            <section className="flex items-center justify-center flex-col text-center">
                <h1 className=" text-2xl pt-4">¿Está Seguro que desea <span className=" text-red-500 font-bold">ELIMINAR</span> al {entityName}:</h1>
                <h1 className=" text-2xl pt-4 font-bold">{`${identifier} ${name}`} </h1>
                <h1 className=" text-2xl pt-4"> del Sistema?</h1>
            </section>

            <section className="flex items-center justify-center pt-10">
                <button className="p-2 bg-marianBlue text-white font-bold text-center  rounded-lg text-1xl px-4 py-2.5 mr-2 mb-2" onClick={() => onClose()} > Cancelar</button>
                <button className="p-2 bg-red-500 text-white font-bold text-center  rounded-lg text-1xl px-4 py-2.5 mr-2 mb-2" onClick={handleDelete}> ELIMINAR</button>
            </section>

        </>
    );
};