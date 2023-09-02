import Image from "next/image";
import Link from "next/link";

/**
 * Este es un componente que engloba toda la estructura de la interfaz del Home - Admin
 */

const cards = [
  {
    id: 1,
    title: "Gestión de Empleados",
    action: "Agregue, Elimine o Actualice a los Empleados",
    image: "/images/cardsAdministrator/cajera.jpg",
    url: "/admin/gestion_empleados",
  },
  {
    id: 2,
    title: "Gestión de Productos",
    action: "Agregue, Elimine o Actualice los Productos",
    image: "/images/cardsAdministrator/products.jpg",
    url: "/admin/gestion_productos",
  },
  {
    id: 3,
    title: "Gestión de Facturas",
    action: "Visualice las Facturas Realizadas",
    image: "/images/cardsAdministrator/factura.jpg",
    url: "/admin/gestion_facturas",
  },
];

export default function HomeAdmin() {
  return (
    <section>
      <h1 className="text-marianBlue text-3xl font-bold mb-4 text-center">
        ¡Bienvenido al Sistema Bonnie Green!
      </h1>
      <h2 className="text-marianBlue text-xl mb-4 text-center">
        Seleccione una opción para continuar
      </h2>

      <section className="flex flex-wrap flex-col justify-center items-center lg:flex-row mt-10 ">
        {cards.map(({ id, title, action, image, url }) => {
          return (
            <Link
              key={id}
              href={url}
              className="bg-marianBlue flex flex-col items-center w-80 md:w-96 xl:w-auto  border mb-6 max-w-xl rounded-lg shadow-lg md:flex-row lg:mr-6 hover:bg-blue-800"
            >
              <Image
                alt={"Card Image "+image}
                src={image}
                width={2000}
                height={500}
                className=" w-3/4 rounded-t-lg  md:h-72 md:w-72 md:rounded-none md:rounded-l-lg"
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {title}
                </h5>
                <p className="mb-3 font-normal  text-gray-100">{action}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </section>
  );
}
