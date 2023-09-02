import {obtainFacturasHelper } from "./ObtainDataHelper"

    
    export const CreateFacturaHelper = (client,method,products) => {


        //obtener fecha
        const now = Date.now();
        const date = new Date(now);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const nowDate =day+"/"+month+"/"+year;

        //obtener el ultimo codigo de factura
        const facturas = obtainFacturasHelper();
        const LastCode = Math.max(...facturas.map(object => object.code));

        const newFactura = {
            date:nowDate,
            code:LastCode+1,
            name:client.name,
            lastname:client.lastname,
            cedula:client.cedula,
            email:client.cedula,
            phone:client.phone,
            method:method,
            products: products
        }

        facturas.push(newFactura);

        
        localStorage.setItem("facturas",JSON.stringify(facturas));

        return LastCode+1;

    }