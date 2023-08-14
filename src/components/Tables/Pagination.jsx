import Image from "next/image";
/**
 * Este es un componente para reutilizar el paginador en las diferentes tablas
 * @params
 */

export default function Pagination({}) {
  const Results = 20;
  const NumPerPage = 5;
  const Pages = Math.ceil(Results / NumPerPage);

  let Paginator = [];

  for (let i = 1; i <= Pages; i++) {
    Paginator.push(i);
  }

  return (
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500">
        Mostrando
        <span className="font-semibold text-gray-900 "> 1-{NumPerPage} </span>
        de
        <span className="font-semibold text-gray-900 "> {Results} </span>
      </span>
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Anterior
          </a>
        </li>

        {Paginator.map((x) => (
          <li key={x}>
            <a
              href={x}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              {x}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
}
