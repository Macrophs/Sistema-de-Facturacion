import { NextRequest } from "next/server";
import { client } from "@/lib/pg";
import {parse} from 'url';
import { CalculatePriceIva } from "@/services/CalculatePriceIva";


/**
 * 
 * @param {NextRequest} request 
 */

export async function GET(request, ){
    
    const url = parse(request.url, true); // Analizar la URL 
    const {query} = url;
    let {conditions} = query; //obtener posibles variables de la url


    const data = await client.query(`SELECT client.name as Client_Name, client.lastname as Client_lastname, client.cedula as Client_cedula, client.email, client.phone, 
    invoice.id_invoice, invoice.date as Invoice_date  FROM "Invoice" as invoice 
    INNER JOIN "Client" as client on invoice.id_client = client.id_client ${conditions ? conditions : "" } ORDER BY id_invoice DESC`)
    const {rows, rowCount} = data;
  
    if(rowCount === 0)
        return new Response(null,{status:204});

    //se recorren todos los resultados
    for (let i = 0; i< rows.length;i++)
    {
        //obtener productos de los resultados
        const url = "http://localhost:3000/api/invoice/"+rows[i].id_invoice;
        const res = await fetch(url, {method: "GET",});
      
        if (res.status !== 200) {
            throw new Error("Error obtiendo datos");   
        } 

        const invoice = await res.json();
        const resultados = invoice.results;
   
        
        if(invoice)
        {
            //se guarda el total a pagar de cada factura de los resultados
            const {final_price, price_iva} = CalculatePriceIva(resultados);
            rows[i].products = (Number(final_price) + Number(price_iva)).toFixed(2);
        }
        else
            return new Response(null,{status:204});
    }

    return Response.json({results: rows});
}



/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request)
{
    const body = await request.json();
    const {date,id_user,id_client,id_payment_method,products} = body;

    const insert = await client.query(`INSERT INTO "Invoice" (date,id_user,id_client,id_payment_method) 
    VALUES('${date}', ${id_user}, ${id_client} , ${id_payment_method}) 
    RETURNING *;`);

    if(!insert.rowCount) new Response('Algo salió mal en el servidor',{status:501});

    const id_invoice = insert.rows[0].id_invoice

    for(let i=0; i< products.length; i++)
    {
        const {id_product, quantity} = products[i];

        const insert2 = await client.query(`INSERT INTO "Invoice_Product" (id_invoice, id_product,quantity) 
        VALUES(${id_invoice}, ${id_product}, ${quantity}) 
        RETURNING *;`);

        if(!insert2.rowCount) new Response('Algo salió mal en el servidor',{status:501}); 

        const update = await client.query(`UPDATE "Product" set quantity = quantity - ${quantity}  
        where id_product = ${id_product} 
        RETURNING *;`);

        if(!update.rowCount) new Response('Algo salió mal en el servidor',{status:501}); 



    }



    return Response.json({results: id_invoice});

    
}
