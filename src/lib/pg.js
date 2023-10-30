//Conexión a base de datos

import {Client} from 'pg'

const {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME} = process.env

const client = new Client({
	database: DB_NAME,
	host: DB_HOST,
	port: DB_PORT,
	user: DB_USER,
	password: DB_PASSWORD,

});

client.connect();

export {client};
