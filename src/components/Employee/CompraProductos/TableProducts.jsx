import Image from "next/image"
import { useEffect, useState } from "react";

/**
 * Este es un componente para reutilizar la tabla de productos 
 * @params props 
 */

export default function TableProducts(props) {

    const elements = [
        {
            label: "Appel MacBook Pro 17",
            code: "#15324",
            quantity: 1,
            price_unit: "2999",
        },
        {
            label: "Microsoft Surface Pro",
            code: "#15328",
            quantity: 1,
            price_unit: "1999",
        },
        {
            label: "Apple Watch",
            code: "#15412",
            quantity: 1,
            price_unit: "100",
        },
        {
            label: "Chocolate",
            code: "#15445",
            quantity: 1,
            price_unit: "100",
        },
        {
            label: "Chupeta",
            code: "#15446",
            quantity: 1,
            price_unit: "100",
        },
        {
            label: "Chaos",
            code: "#15447",
            quantity: 1,
            price_unit: "100",
        },
        {
            label: "Pirulin",
            code: "#15448",
            quantity: 1,
            price_unit: "100",
        },
    ]

    //*Funcion para Manejar si se va a eliminar o agregar un producto
    function ProductsMannager(id)
    {
        //se obtiene el estado del check
        const isChecked = document.getElementById("checkbox"+id).checked;
        
        // el producto acaba de ser seleccionado
        if(isChecked)
            props.ProductsChange(elements[id]); //*Se envian el producto a agregar al componente de tabla buy

        //el producto acaba de ser deseleccionado
        else 
            props.DeleteProduct(elements[id]); //*Se envian el producto a eliminar al componente de tabla buy
    }

    //useEfect que actualiza los checks al eliminar un producto desde tableBuy
    useEffect(() => {
        if(props.ProductToUnselect)
        {
            //se busca el elemento a eliminar mediante el codigo
            const productToUnselect = elements.findIndex(obj => obj.code === props.ProductToUnselect.code )

            //Se comprueba que lo haya encontrado para  deseleccionarlo
            if (productToUnselect !== -1) 
                document.getElementById("checkbox"+productToUnselect).checked = false;
            
        }
    },[props.ProductToUnselect]);
  
    let limitindex= 5 //limite de elementos a mostrar por pagina
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
            <tbody>                {/*Se muestran los elementos de la tabla */}
                {elements.map(({label,code,price_unit},index) =>{
                    if(index < limitindex){
                        return(
                            <tr className="bg-white border-b" key={index} >

                                <td className="w-4 p-4">
                                    <section className="flex items-center">
                                        <input id={"checkbox"+index}  onChange={()=> ProductsMannager(index) }
                                        type="checkbox"
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
                                    ${price_unit}
                                </td>

                            </tr>
                        );
                    }
                })}
                
    
            </tbody>
        </table>
    )
}