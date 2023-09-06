import { obtainAdminsHelper, obtainClientHelper, obtainEmployeesHelper } from "./ObtainDataHelper"

export const verificationLoginHelper = (username) => {
    const employees = obtainEmployeesHelper();
    const admins = obtainAdminsHelper();
    const clients = obtainClientHelper();
    
    if(admins && admins.some(admin => admin.name === username)) return "admin";
    if(employees && employees.some(employee => employee.name === username)) return "employee";
    if(clients && clients.some(client => client.name === username)) return "cliente";

    return null;
}