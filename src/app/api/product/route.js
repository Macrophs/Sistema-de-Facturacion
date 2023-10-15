import { NextRequest } from "next/server";
import { client } from "@/lib/pg";
import {parse} from 'url';
/**
 * 
 * @param {NextRequest} request 
 */

export async function GET(request){

    const url = parse(request.url, true); // Analizar la URL 
    const {query} = url;
    let {conditions} = query; //obtener posibles variables de la url

    const data = await client.query(`SELECT id_product , name, price, quantity as quantity_stock FROM "Product" where active = true ${conditions ? conditions : "" } ORDER BY name ;`)
    const {rows, rowCount} = data;
  
    if(rowCount === 0)
        return new Response("",{status:404});

    return Response.json({results: rows});
}
