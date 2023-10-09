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

    conditions = conditions ? conditions : ""; //si no es undefined = conditions
    
    if(conditions.split("-")[0] === "NotActive") conditions = "where active = false and cedula = '"+conditions.split("-")[1]+"'";
    else conditions ="where active = true "+conditions;

    const data = await client.query(`SELECT Users.id_user , Users.cedula , Users.name, Users.lastname, Users.email, Users.phone, rol.name as rol_name FROM "User" as Users INNER JOIN "Rol" as rol ON Users.id_rol = rol.id_rol and rol.name = 'admin' ${conditions ? conditions : "" } ORDER BY id_user ;`)
    const {rows, rowCount} = data;
    
    if(rowCount === 0)
        return new Response("",{status:404});

    return Response.json({results: rows});
}


