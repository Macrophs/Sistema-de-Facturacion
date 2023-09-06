
export default function NewItemDBHelper(newdata,type) {

    //se obtiene los datos los clientes almacenados
    const data = JSON.parse(localStorage.getItem(type));
    try {
        data.push(newdata) //se agrega el nuevo cliente
        localStorage.setItem(type,JSON.stringify(data)); //se guarda el nuevo array de clientes

        return true;
    } catch (error) {

        return false;
    }
    
    
}