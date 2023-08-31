import Link from "next/link";

/**
 * Este es un componente para reutilizar los botones en las diferentes interfaces
 * @params props url: direccion a la que se redireccionará, label: nombre de la interfaz, Classname = parametros de clase addicionales, params = parametros adicionales
 */

export default function StandarButton({ url, label, className, ...params }) {
  return (
    <Link
      href={url}
      className={`bg-marianBlue text-white   text-center w-full md:w-4/12 xl:w-1/5 focus:ring-4 font-bold rounded-lg  py-2.5  mr-2 mb-2 hover:bg-blue-800 ${className}`}
      {...params}
    >
      {label}
    </Link>
  );
}
