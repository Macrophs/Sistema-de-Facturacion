import { NextRequest } from "next/server";
import { client } from "@/lib/pg";

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
