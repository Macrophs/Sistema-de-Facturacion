
/**
 * Este es un componente relacionado a la compra de productos, contendrá la tabla con los productos seleccionados para comprar
 */



export default function TableReadyToBuy() {

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

    let final_quantity = 0;
    let final_price = 0;
    elements.map(({quantity, price_unit}) =>{
        final_quantity = final_quantity + quantity;
        final_price = final_price + (quantity * price_unit);
    });

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
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Precio Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Se muestran todos los productos a comprar*/}
                        {elements.map(({label,quantity,price_unit}) =>(
                            <tr className="bg-white " key={label}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {label}
                                </th>
                                <td className="px-6 py-4 flex">
                                    {quantity}
                                    <button type="button"
                                        className="text-white px-3 ml-3  focus:ring-4 font-medium rounded-md text-sm   bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-red-800">
                                        - </button>
                                    <button type="button"
                                        className="text-white px-3 ml-2 focus:ring-4 font-medium rounded-md text-sm   bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-green-800">
                                        + </button>
                                </td>
                                <td className="px-6 py-4">
                                    {price_unit}
                                </td>
                                <td className="px-6 py-4">
                                    {quantity * price_unit}
                                </td>
                            </tr>
                        ))}
                        
                       
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 bg-gray-100 ">
                            <th scope="row" className="px-6 py-3 text-sm">Total</th>
                            <td className="px-6 py-3" colspan="2">{final_quantity}</td>
                            <td className="px-6 py-3">{final_price}</td>
                        </tr>
                    </tfoot>
                </table>
            
        </section>

    </section>

    )
  }