
export default function obtainClientHelper() {
    //devuelve los datos de los clientes
    return JSON.parse(localStorage.getItem("client"));

}