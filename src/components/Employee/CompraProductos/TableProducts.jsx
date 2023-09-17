import { obtainProductsHelper } from "@/Helpers/ObtainDataHelper";
import Image from "next/image"
import { useEffect, useState } from "react";

/**
 * Este es un componente para reutilizar la tabla de productos 
 * @params props 
 */

export default function TableProducts(props) {
    
    const [paginator, setPaginator] = useState({LimitUp:1,LimitDown:5});

    useEffect(() => {
      setPaginator(props.PaginatorController);
    }, [props.PaginatorController]);
  

    
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const products = [...obtainProductsHelper()]; //se obtiene una copia de los productos almacenados en la bd

        const newProducts = products.map((product) => { //se le añaden a todos los productos un nuevo campo Quantity para realizar la compra
            return {...product, quantity:1};
        }) 
        setElements(newProducts);
    },[props.ProductsChange]);


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
  
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" colSpan={"2"} className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Código
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Stock
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Precio
                    </th>

                </tr>
            </thead>
            <tbody>                {/*Se muestran los elementos de la tabla */}
                {elements.map(({name,code,price_unit, quantity_stock},index) =>{
                    let indexPage = index+1;
                    if(indexPage >= paginator.LimitDown && indexPage <= paginator.LimitUp ){
                        return(
                            <tr className="bg-white border-b" key={index} >

                                <td className="w-4 p-4">
                                    <section className="flex items-center">
                                        <input id={"checkbox"+index}  onChange={()=> ProductsMannager(index) }
                                        type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label  className="sr-only">checkbox</label>
                                    </section>
                                </td>

                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {name}
                                </th>
                                <td className="px-6 py-4">
                                    {code}
                                </td>
                                <td className="px-6 py-4">
                                    {quantity_stock}
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