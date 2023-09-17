
export default function NewItemDBHelper(newdata,type) {

    //se obtiene los datos de los items almacenados
    const data = JSON.parse(localStorage.getItem(type));
    try {
        data.push(newdata) //se agrega el item a los datos
        localStorage.setItem(type,JSON.stringify(data)); //se guardan los datos con el item agregado

        return true;
    } catch (error) {

        return false;
    }
    
    
}