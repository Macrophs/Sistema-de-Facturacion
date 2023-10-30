import { Connect } from "./Connect";

export async function CreateInvoice(ClientData, payment_method, Products )
{
        //obtener fecha
        const now = Date.now();
        const date = new Date(now);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const nowDate =year+"/"+month+"/"+day;

        const user = JSON.parse(localStorage.getItem("ActiveUser"));
    
        const newFactura = {
            date:nowDate,
            id_user: user.id_user,
            id_client: ClientData.id_client,
            id_payment_method: payment_method,
            products: Products
        }

        const res = await Connect("invoice","POST",newFactura);

        if (res) return res;

        return false;
} 