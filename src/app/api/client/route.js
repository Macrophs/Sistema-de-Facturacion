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

    const data = await client.query(`SELECT id_client ,cedula , name, lastname,email,phone FROM "Client" where active = true ${conditions ? conditions : "" } ORDER BY id_client ;`)
    const {rows, rowCount} = data;
  
    if(rowCount === 0)
        return new Response("",{status:404});

    return Response.json({results: rows});
}


/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request)
{
    const body = await request.json();
    const {name, lastname, email,cedula, phone} = body;

    const insert = await client.query(`INSERT INTO "Client" (name,lastname,cedula,email,phone) 
    VALUES('${name}', '${lastname}', '${cedula}' , '${email}', '${phone}') 
    RETURNING *;`);

    if(insert.rowCount) return Response.json({results:true});

    return new Response('Algo salió mal en el servidor',{status:501});
}

/**
 * 
 * @param {NextRequest} request 
 */
export async function PUT(request)
{
    const body = await request.json();
    const {name, lastname, email,cedula, phone, id_client} = body;

    const insert = await client.query(`UPDATE "Client" SET name = '${name}', lastname = '${lastname}', cedula = '${cedula}' , email = '${email}', 
    phone = '${phone}', active = true WHERE id_client = ${id_client} 
    RETURNING *;`);

    if(insert.rowCount) return Response.json({results:true});

    return new Response('Algo salió mal en el servidor',{status:501});
}


/**
 * 
 * @param {NextRequest} request 
 */
export async function DELETE(request)
{
    const body = await request.json();
    const {id} = body;

    const insert = await client.query(`UPDATE "Client" SET active = false WHERE id_client = ${id} 
    RETURNING *;`);

    
    
    if(insert.rowCount) return Response.json({results:true});

    return new Response('Algo salió mal en el servidor',{status:501});
}