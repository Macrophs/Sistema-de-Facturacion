
export const obtainClientHelper = () => {
    //devuelve los datos de los clientes
    return JSON.parse(localStorage.getItem("client"));

}

export const obtainAdminsHelper = () => {
    //devuelve los datos de los admins
    return JSON.parse(localStorage.getItem("admin"));
}

export const obtainEmployeesHelper = () => {
    //devuelve los datos de los empleados
    return JSON.parse(localStorage.getItem("employee"));
}