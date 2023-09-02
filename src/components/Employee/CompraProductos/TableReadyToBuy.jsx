
"use client"

import { useEffect, useState } from "react";

/**
 * Este es un componente relacionado a la compra de productos, contendrá la tabla con los productos seleccionados para comprar
 */



export default function TableReadyToBuy(props) {

    const [productos, setProductos] = useState([]); //useState para manejar los productos a comprar y su cantidad

    // useEfect que al recibir un nuevo producto del componente TableProduct, lo agrega a la lista de productos a comprar
    useEffect(()=>{
        if(props.Products != null )
        {
            const newProduct = [...productos];
            newProduct.push(props.Products);
            newProduct.filter(Boolean);
            setProductos(newProduct);
        }
        

    },[props.Products]);
    
    useEffect(() => {
        props.FinishProducts(productos);
    }, [productos]);

    // useEfect que al recibir un nuevo producto del componente TableProduct, lo elimina de la lista de productos a comprar
    useEffect(()=>{

        const newProduct = [...productos];
        
        //se busca el elemento a eliminar mediante el codigo
        const productToDelete = newProduct.findIndex(obj => obj.code === props.DeleteProduct.code )

        //Se comprueba que lo haya encontrado para eliminarlo
        if (productToDelete !== -1) {
            newProduct.splice(productToDelete,1);
            setProductos(newProduct);
            
        }

    },[props.DeleteProduct]);
    
    
    //* se actualiza el precio final
    let final_quantity = 0;
    let final_price = 0;

    if(productos != null)
    {
        productos.map(({quantity, price_unit}) =>{
            final_quantity = final_quantity + quantity;
            final_price = final_price + (quantity * price_unit); //precio total a pagar
        });
    }

    props.PriceChange(final_price); //se envia el precio a pagar al componente padre

    //aumentar la cantidad a comprar de un producto
    const IncrementQuantity = (id) =>{
        if(productos[id].quantity_stock > productos[id].quantity) //comprobacion de que no se supere la cantidad en stock
        {
            const newElements = [...productos];
            newElements[id].quantity += 1;
            setProductos(newElements);

        }
        
       
    };
    
    //Disminuir la cantidad a comprar de un producto
    const DecreaseQuantity = (id) =>{

        //Si la cantidad es igual a 0 o menor, se elimina el producto de la lista
        if(productos[id].quantity <= 1  ){
            RemoveProduct(id);
            
        }
        //sino, se le resta 1 a la cantidad de productos a llevar
        else{
            const newElements = [...productos];
            newElements[id].quantity -= 1;
            setProductos(newElements);
        }
        
    };


    //Elimina un producto de la tabla y desmarca el checkbox del TableProduct
    const RemoveProduct = (id) =>{
        const newProduct = [...productos];
        props.DeleteSelectProduct(newProduct[id]); //Se envia el producto a desmarcar en TableProduct
        newProduct.splice(id,1);
        setProductos(newProduct);
    }
    


    return (
    <section className="flex items-center justify-center  mt-10 ">
        <section className="w-full lg:w-2/4 overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white">

        <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-100 ">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio Unidad
                            </th>
                            <th scope="col" colSpan={2} className="px-6 py-3 rounded-r-lg">
                                Precio Total
                            </th>
                      
                        </tr>
                    </thead>
                    <tbody>
                        {/*Se muestran todos los productos a comprar*/}
                        { productos.map(({name,quantity,price_unit},index) =>(
                            <tr className="bg-white " key={index}>
                           
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {name}
                                </th>
                                <td className="px-6 py-4 flex">
                                    {quantity}
                                    <button
                                    onClick={() => DecreaseQuantity(index)}
                                     type="button"
                                        className="text-white px-3 ml-3  focus:ring-4 font-medium rounded-md text-sm   bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-red-800">
                                        - </button>
                                    <button 
                                    onClick={() => IncrementQuantity(index)}
                                    type="button"
                                        className="text-white px-3 ml-2 focus:ring-4 font-medium rounded-md text-sm   bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-green-800">
                                        + 
                                        </button>
                                </td>
                                <td className="px-6 py-4">
                                    {price_unit}
                                </td>
                                <td className="px-6 py-4">
                                    {quantity * price_unit}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-red-500 font-bold"
                                    onClick={() => RemoveProduct(index)} >X</button>
                                </td>
                            </tr>
                        ))}
                        
                        
                       
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 bg-gray-100 ">
                            <th scope="row" className="px-6 py-3 text-sm">Total</th>
                            <td className="px-6 py-3" colSpan={"2"}>{final_quantity}</td>
                            <td colSpan={2} className="px-6 py-3">{final_price}</td>
                        </tr>
                    </tfoot>
                </table>
            
        </section>

    </section>

    )
  }