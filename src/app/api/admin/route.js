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


    const data = await client.query(`SELECT Users.id_user , Users.cedula , Users.name, Users.lastname, Users.email, Users.phone, rol.name as rol_name FROM "User" as Users INNER JOIN "Rol" as rol ON Users.id_rol = rol.id_rol and rol.name = 'admin' ${conditions ? conditions : "" } ORDER BY id_user ;`)
    const {rows, rowCount} = data;
    
    if(rowCount === 0)
        return new Response(null,{status:204});

    return Response.json({results: rows});
}


