
export default function NewClientHelper(newdata) {

    //se obtiene los datos los clientes almacenados
    const data = JSON.parse(localStorage.getItem("client"));
    try {
        data.push(newdata) //se agrega el nuevo cliente
        localStorage.setItem("client",JSON.stringify(data)); //se guarda el nuevo array de clientes

        return true;
    } catch (error) {

        return false;
    }
    
    
}