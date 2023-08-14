
/**
 * Este es un componente para utilizar la tabla que muestra la factura 
 * @params props 
 */

export default function TableFactura({}) {

    const elements = [
        {
            label: "Appel MacBook Pro 17",
            quantity: 1,
            price_unit: 2999,
        },
        {
            label: "Microsoft Surface Pro",
            quantity: 1,
            price_unit: 2999,
        },
        {
            label: "Apple Watch",
            quantity: 1,
            price_unit: 2999,
        },
    ]

    // Calcular precio +  iva
    let final_price = 0;
    elements.map(({quantity, price_unit}) =>{
        final_price = final_price + (quantity * price_unit);
    });
    const iva = 16;
    let price_iva = (iva * final_price ) / 100 ;


    return (
        <section className="flex flex-col items-center justify-center w-11/12 ">
            <h1 className="text-marianBlue font-bold mt-20 text-3xl font-bol mb-4 text-center">Factura</h1>
            <section className='w-full overflow-x-auto shadow-md'>
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

                    {elements.map(({label,quantity,price_unit}) => ( 
                        <tr key={label} className="border-b border-marianBlue">
                            <td className="pt-10">{label}</td>
                            <td className="pt-10">$ {price_unit}</td>
                            <td className="pt-10">{quantity}</td>
                            <td className="pt-10">$ {price_unit * quantity}</td>
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
                        <p>$ {final_price + price_iva}</p>
                    </section>
                </section>

                <section className="flex justify-start w-full mt-5">
                    <p className="text-marianBlue text-xl lg:text-2xl font-bold">¡Gracias por su compra!</p>
                </section>
            </section>
        </section>
    )
}