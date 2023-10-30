/**
 * Servicio que Retorna el precio final y el iva, de un array de productos
 * @param {*} elements = Array de Objetos  
 */
export function CalculatePriceIva(elements)
{
   
     // Calcular precio +  iva
     let final_price = 0;
     elements.map(({product_quantity, product_price}) =>{
         final_price = final_price + (product_quantity * product_price);
     });
     const iva = 16;
     let price_iva = (iva * final_price ) / 100 ;


     //2 Decimales
     final_price = final_price.toFixed(2);
     price_iva = price_iva.toFixed(2);

     return {final_price,price_iva};
}