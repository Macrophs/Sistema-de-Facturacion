import { NextRequest } from "next/server";
import { client } from "@/lib/pg";
/**
 * 
 * @param {NextRequest} request 
 */

export async function GET(request, {params:{id}}){
    const id_invoice = Number(id);
  
    if(isNaN(id_invoice))    
        return new Response("",{status:404});


    const data = await client.query(`SELECT client.name as Client_Name, client.lastname as Client_lastname, client.cedula, client.email, client.phone, 
    invoice.id_invoice, invoice.date, product.name as Product_Name, product.price as Product_Price, connection.quantity as Product_Quantity  FROM "Invoice" as invoice 
    INNER JOIN "Invoice_Product" as connection ON invoice.id_invoice = connection.id_invoice 
    INNER JOIN "Product" as product on product.id_product = connection.id_product 
    INNER JOIN "Client" as client on invoice.id_client = client.id_client
    where invoice.id_invoice = ${id_invoice} ;`)
    const {rows, rowCount} = data;
  
    if(rowCount === 0)
        return new Response("",{status:404});

    return Response.json({results: rows});
}

