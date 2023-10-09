import { Connect } from "./Connect";

/**
 * Servicio que Retorna el rol del usuario en caso del inicio de sesion correcto
 * @param {} table 
 * @param {} type 
 * @param {} data 
 * @returns 
 */
export  async function Login(username){
    
    let table = "?conditions= and Users.name = '"+username+"'";
    
    let res = await Connect("admin"+table,"GET");

  
    if(res) return res[0];


    res = await Connect("employee"+table,"GET");
    if(res) return res[0];
    
    return false
}

