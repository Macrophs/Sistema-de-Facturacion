import Link from "next/link";
/**
 * Este es un componente para reutilizar los botones en las diferentes interfaces
 * @params props url: direccion a la que se redireccionará, label: nombre de la interfaz
 */

export default function StandarButton({ url, label }) {
  return (
    <Link
      href={url}
      className="bg-marianBlue text-white text-center sm:w-1/5 focus:ring-4 font-medium rounded-lg text-sm py-2.5 mr-2 mb-2 hover:bg-blue-800 "
    >
      {label}
    </Link>
  );
}
