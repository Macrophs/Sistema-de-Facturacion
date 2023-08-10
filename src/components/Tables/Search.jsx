import Image from "next/image"
/**
 * Este es un componente para reutilizar el buscador en las diferentes tablas
 * @params props label: corresponde al nombre que tendrá el cuadro de busqueda
 */

export default function Search({ label}) {
    return (
        <section className="pb-4 bg-white">
            <label for="table-search" className="sr-only">{label}</label>
                <section className="flex">
                    <section className="absolute -z-0 top-7 flex items-center pl-3 pointer-events-none">
                        <Image className="pt-1" width={16} height={16} src="../img/search.svg" alt="Search Icon Image"/>
                        </section>
                        <input type="text" id="table-search"
                            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder={`${label}`}/>
                 </section>
        </section>
    )
}