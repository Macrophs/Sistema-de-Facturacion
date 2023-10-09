import { fetch } from "./fetch";
/**
 * Servicio que permite hacer una peticion a la BD
 * @param {} table 
 * @param {} type 
 * @param {} data 
 * @returns 
 */
export  async function Connect(table,type,data=null){
    
    const res = await fetch({url: '/api/'+table, method:type, body:data});
    
    if(res) return res.results;
    
    return false
}

