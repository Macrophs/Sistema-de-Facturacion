import Image from "next/image";
import { Result } from "postcss";
import { useEffect, useState } from "react";
/**
 * Este es un componente para reutilizar el paginador en las diferentes tablas
 * @params
 */

export default function Pagination({newData, obtainData, ChangeTable}) {

  let LimitDown = 1;   //Limite inicial inferior de los registros a mostrar
  let LimitUp = 5;    //Limite inicial superior de los registros a mostrar

  //useState que almacenara los cambios en los limites de los registros a mostrar
  const [controlPaginator, setControlPaginator] = useState({
    LimitDown,
    LimitUp
  });

  const [paginator, setPaginator] = useState([]); //useState que almacena el array de numeros de paginas
  const [actualPage, setActualPage] = useState(1);  //useState que almacena la pagina actual
  const [result, setResult] = useState([2]);      //usestate que almacena
  
  useEffect(() => {
      ChangeTable(controlPaginator);
  }, [controlPaginator]);

  useEffect(() => {
    const Results = obtainData().length;
    const NumPerPage = 5;
    const Pages = Math.ceil(Results / NumPerPage);

    let Paginator = [];

    for (let i = 1; i <= Pages; i++) {
      Paginator.push(i);
    }
    setPaginator(Paginator);
    setResult(Results);
  }, [newData]);

  return (
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500">
        Mostrando
        <span className="font-semibold text-gray-900 "> {controlPaginator.LimitDown}-{controlPaginator.LimitUp} </span>
        de
        <span className="font-semibold text-gray-900 "> {result} </span>
      </span>
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
          <a
            href="#"
            onClick={() => {  
                if(actualPage > 1) 
                { 
                    setActualPage(actualPage-1); 
                    setControlPaginator({LimitUp: (actualPage - 1) * 5, LimitDown: (actualPage - 1) * 5 - 4 }); 
                }}}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Anterior
          </a>
        </li>

        {paginator.map((x) => (
          <li key={x}>
            <a
              onClick={() => {setControlPaginator({LimitUp: x * 5, LimitDown: x * 5 - 4 }); setActualPage(x)}}
              href={"#"}
              className={`${actualPage === x ? "bg-marianBlue text-white pointer-events-none " : "bg-white text-gray-500 "} flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}
            >
              {x}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            onClick={() => {  
                if(actualPage < Math.ceil(result / 5)) 
                { 
                    setActualPage(actualPage+1); 
                    setControlPaginator({LimitUp: (actualPage + 1) * 5, LimitDown: (actualPage + 1) * 5 - 4 }); 
                }}}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
}
