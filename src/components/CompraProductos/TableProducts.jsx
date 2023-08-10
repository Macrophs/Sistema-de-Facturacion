import Image from "next/image"

/**
 * Este es un componente para reutilizar la tabla de productos 
 * @params props 
 */

export default function TableProducts({}) {

    const elements = [
        {
            label: "Appel MacBook Pro 17",
            code: "#15324",
            price: "2999",
        },
        {
            label: "Microsoft Surface Pro",
            code: "#15328",
            price: "1999",
        },
        {
            label: "Apple Watch",
            code: "#15412",
            price: "100",
        },
    ]

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" colspan="2" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Código
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Precio
                    </th>

                </tr>
            </thead>
            <tbody>
                {/*Se muestran los elementos de la tabla */}
                {elements.map(({label,code,price}) =>(
                    <tr className="bg-white border-b" key={code} >

                        <td className="w-4 p-4">
                            <section className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </section>
                        </td>

                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                         {label}
                        </th>
                        <td className="px-6 py-4">
                            {code}
                        </td>
                        <td className="px-6 py-4">
                            ${price}
                        </td>

                    </tr>
                ))}
                
    
            </tbody>
        </table>
    )
}