import { Connect } from "@/services/Connect";
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
     
        (async () => {
            const products = await Connect("product","GET"); //se obtienen los productos
            const newProducts = products.map((product) => { //se le añaden a todos los productos un nuevo campo Quantity para realizar la compra
                return {...product, quantity:1,  check:false};
            }) 
            setElements(newProducts);
        })();
       
    },[]);


    //*Funcion para Manejar si se va a eliminar o agregar un producto
    function ProductsMannager(id)
    {
      
        //se obtiene el estado del check
        const isChecked = document.getElementById("checkbox"+id).checked;
        // el producto acaba de ser seleccionado
        const products = [... elements];
        if(isChecked)
        {
            products[id].check = true;
            props.ProductsChange(elements[id]); //*Se envian el producto a agregar al componente de tabla buy
        }

        //el producto acaba de ser deseleccionado
        else 
        {
            products[id].check = false;
            products[id].quantity = 1;
            props.DeleteProduct(elements[id]); //*Se envian el producto a eliminar al componente de tabla buy
        }
        setElements(products);
    }

    //useEfect que actualiza los checks al eliminar un producto desde tableBuy
    useEffect(() => {
        if(props.ProductToUnselect)
        {
            //se busca el elemento a eliminar mediante el codigo
            const productToUnselect = elements.findIndex(obj => obj.id_product === props.ProductToUnselect.id_product )

            //Se comprueba que lo haya encontrado para  deseleccionarlo
            if (productToUnselect !== -1) 
            {
                const products = [... elements];
                products[productToUnselect].check = false;
                products[productToUnselect].quantity = 1;
                setElements(products);
                document.getElementById("checkbox"+productToUnselect).checked = false;
                
                props.ChangeDeleteSelectProduct(undefined); //una vez deseleccionado, se elimina de la var
            }
            
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
                {elements.map(({name,id_product,price, quantity_stock,check},index) =>{
                    let indexPage = index+1;
                    if(indexPage >= paginator.LimitDown && indexPage <= paginator.LimitUp ){
                        return(
                            <tr className="bg-white border-b" key={index} >

                                <td className="w-4 p-4">
                                    <section className="flex items-center">
                                        <input id={"checkbox"+index}  onChange={()=> ProductsMannager(index)} checked={check}
                                        type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                            <label  className="sr-only">checkbox</label>
                                    </section>
                                </td>

                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {name}
                                </th>
                                <td className="px-6 py-4">
                                    {id_product}
                                </td>
                                <td className="px-6 py-4">
                                    {quantity_stock}
                                </td>
                                <td className="px-6 py-4">
                                    ${price}
                                </td>

                            </tr>
                        );
                    }
                })}
                
    
            </tbody>
        </table>
    )
}