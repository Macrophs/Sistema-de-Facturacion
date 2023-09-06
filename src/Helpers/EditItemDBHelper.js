
export default function EditItemDBHelper(newdata,type,index) {

    //se obtiene los datos los clientes almacenados
    const data = JSON.parse(localStorage.getItem(type));
    try {
        data[index] = newdata;
        localStorage.setItem(type,JSON.stringify(data)); //se guarda el nuevo array de clientes

        return true;
    } catch (error) {
        return false;
    }
    
    
}