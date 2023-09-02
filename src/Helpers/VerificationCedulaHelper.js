import { obtainClientHelper } from "./ObtainDataHelper"

    
    export const VerificationCedula = (clientcedula) => {

        const clients = obtainClientHelper();
        if(clients && clients.some(client => client.cedula === clientcedula)) return true;
    
        return false;

    }