import { fetch } from "./fetch";
/**
 * Servicio que Verificara si no existe un usuario inactivo con la cedula del nuevo a agregar
 * @param {} table 
 * @param {} type 
 * @param {} data 
 * @returns 
 */
export  async function VerifyNotActiveNewUser(table,data){

    table = table+"?conditions= and cedula = '"+data.cedula+"'";
    const res = await fetch({url: 'http://localhost:3000/api/'+table, method:"GET", body:null});
    
    if(res) return res.results[0];
    
    return false
}

