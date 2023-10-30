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


    const data = await client.query(`SELECT id_user ,cedula , name, lastname,email,phone FROM "User" where active = false ${conditions ? conditions : "" } and id_rol = 2 ORDER BY id_user ;`)
    const {rows, rowCount} = data;
  
    if(rowCount === 0)
        return new Response(null,{status:204});

    return Response.json({results: rows});
}

