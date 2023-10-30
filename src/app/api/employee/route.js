import { NextRequest } from "next/server";
import { client } from "@/lib/pg";
import { parse } from "url";
/**
 *
 * @param {NextRequest} request
 */

export async function GET(request) {
  const url = parse(request.url, true); // Analizar la URL
  const { query } = url;
  let { conditions } = query; //obtener posibles variables de la url

  conditions = conditions ? conditions : ""; //si no es undefined = conditions

  if (conditions.split("-")[0] === "NotActive")
    conditions =
      "where active = false and cedula = '" + conditions.split("-")[1] + "'";
  else conditions = "where active = true " + conditions;

  const data = await client.query(
    `SELECT Users.id_user , Users.cedula , Users.name, Users.lastname, Users.email, Users.phone, rol.name as rol_name FROM "User" as Users INNER JOIN "Rol" as rol ON Users.id_rol = rol.id_rol and rol.name = 'employee' ${
      conditions ? conditions : ""
    } ORDER BY id_user ;`
  );
  const { rows, rowCount } = data;

  if (rowCount === 0) return new Response("", { status: 404 });

  return Response.json({ results: rows });
}

/**
 * Method POST para la creacion de un empleado
 * @param {NextRequest} request
 */
export async function POST(request) {
  const body = await request.json();
  const { name, lastname, email, cedula, phone } = body;

  const insert =
    await client.query(`INSERT INTO "User" (name,lastname,email,cedula,phone,id_rol) 
    VALUES('${name}', '${lastname}', '${email}' , '${cedula}', '${phone}', ${2}) 
    RETURNING *;`);

  if (insert.rowCount) return Response.json({ results: true });

  return new Response("Algo salió mal en el servidor", { status: 501 });
}

/**
 *
 * @param {NextRequest} request
 */
export async function PUT(request) {
  const body = await request.json();
  const { name, lastname, email, cedula, phone, id_user } = body;

  const insert =
    await client.query(`UPDATE "User" SET name = '${name}', lastname = '${lastname}', email = '${email}' , cedula = '${cedula}', 
    phone = '${phone}', active = true WHERE id_user = ${id_user} 
    RETURNING *;`);

  if (insert.rowCount) return Response.json({ results: true });

  return new Response("Algo salió mal en el servidor", { status: 501 });
}

/**
 *
 * @param {NextRequest} request
 */
export async function DELETE(request) {
  const body = await request.json();
  const { id } = body;

  const insert =
    await client.query(`UPDATE "User" SET active = false WHERE id_user = ${id} 
    RETURNING *;`);

  if (insert.rowCount)
    return (
      Response.json({ results: true }),
      () => {
        window.location.href = window.location.href;
      }
    );

  return new Response("Algo salió mal en el servidor", { status: 501 });
}
