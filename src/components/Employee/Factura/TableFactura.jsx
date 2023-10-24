
/**
 * Este es un componente para utilizar la tabla que muestra la factura 
 * @params props 
 */

import { CalculatePriceIva } from "@/services/CalculatePriceIva";

export default function TableFactura({Factura}) {

    if(!Factura)
        return "";

    //Obtener Precio y IVA de la compra
    const {final_price, price_iva} = CalculatePriceIva(Factura);

    return (
        <>
            
            <section className='w-full overflow-x-auto text-lg'>
                <table className='w-full text-center'>
                    <thead className="bg-marianBlue text-white font-bold uppercase h-16">
                        <tr>
                            <td>Producto</td>
                            <td>Precio Unitario</td>
                            <td>Cantidad</td>
                            <td>ToTal</td>
                        </tr>
                    </thead>

                    <tbody className="mt-11">

                    {Factura.map(({product_name,product_quantity,product_price},index) => ( 
                        <tr key={index} className="border-b border-marianBlue">
                            <td className="pt-10">{product_name}</td>
                            <td className="pt-10">$ {product_price}</td>
                            <td className="pt-10">{product_quantity}</td>
                            <td className="pt-10">$ {product_price * product_quantity}</td>
                        </tr>
                     ))}
                    </tbody>
                </table>

                <table className="flex justify-end space-x-8 p-6 text-center font-bold">
                    <thead>
                        <tr>
                            <td className="text-marianBlue">SubTotal:</td>
                        </tr>
                        <tr>
                            <td>IVA:</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-marianBlue font-bold">$ {final_price}</td>
                        </tr>
                        <tr>
                            <td>$ {price_iva}</td>
                        </tr>
                    </tbody>
                </table>

                <section className="flex justify-end w-full">
                    <section className="flex justify-around items-center bg-marianBlue w-48 h-10 text-white font-bold">
                        <p>Total:</p>
                        <p>$ {(Number(final_price) + Number(price_iva)).toFixed(2)}</p>
                    </section>
                </section>

                <section className="flex justify-start w-full mt-5">
                    <p className="text-marianBlue text-xl lg:text-2xl font-bold">¡Gracias por su compra!</p>
                </section>
            </section>
        </>
    )
}