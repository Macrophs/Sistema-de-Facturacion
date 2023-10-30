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

  const data = await client.query(
    `SELECT id_product , name, price, quantity as quantity_stock FROM "Product" where active = true and quantity > 0 ${
      conditions ? conditions : ""
    } ORDER BY name ;`
  );
  const { rows, rowCount } = data;

  if (rowCount === 0) return new Response(null, { status: 204 });

  return Response.json({ results: rows });
}

/**
 *
 * @param {NextRequest} request
 */
export async function POST(request) {
  const body = await request.json();
  const { name, price, quantity } = body;

  const insert =
    await client.query(`INSERT INTO "Product" (name,price,quantity,active,id_user) 
    VALUES('${name}', ${price}, ${quantity} , ${true}, ${1}) 
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
  const { name, price, quantity_stock, id_product } = body;

  const insert =
    await client.query(`UPDATE "Product" SET name = '${name}', price = ${price}, quantity = ${quantity_stock}, active = true, id_user = ${1} WHERE id_product = ${id_product} 
    RETURNING *;`);

  if (insert.rowCount) return Response.json({ results: true });

  return new Response("Algo salió mal en el servidor", { status: 501 });
}

/**
 * 
 * @param {NextRequest} request 
 */
export async function DELETE(request)
{
    const body = await request.json();
    const {id} = body;

    const insert = await client.query(`UPDATE "Product" SET active = false WHERE id_product = ${id} 
    RETURNING *;`);

    if(insert.rowCount) return Response.json({results:true});

    return new Response('Algo salió mal en el servidor',{status:501});
}