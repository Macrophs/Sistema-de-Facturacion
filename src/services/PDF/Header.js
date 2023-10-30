import { rgb } from 'pdf-lib';
/**
 * Funcion que contiene dibuja la estructura del header de la factura en el pdf
 * @param {*} page 
 * @param {*} width 
 * @param {*} height 
 * @param {*} helveticaFont 
 * @param {*} helveticaFontBold 
 * @param {*} ClientData 
 */
export function Header(page,width, height, helveticaFont, helveticaFontBold,ClientData){

   
    page.drawText('Factura de Compra', {
        x: width/3 + 10,
        y: height - 60,
        size: 20,
        color: rgb(0.1098, 0.2667, 0.5569),
        bold: true,
        font: helveticaFontBold
    })

    page.drawText('Simple Digital Billing System', {
        x: width - 430,
        y: height - 100,
        size: 20,
        color: rgb(0.1098, 0.2667, 0.5569),
        bold: true,
        font: helveticaFontBold
    })

    page.drawText('Calle Real de los Flores de Catia, Caracas', {
        x: width - 430,
        y: height - 140,
        size: 14,
        font: helveticaFont
    })

    page.drawText('Distrito Capital Venezuela ', {
        x: width - 380,
        y: height - 160,
        size: 14,
        font: helveticaFont
    })

    page.drawText('Teléfono: (000) 000-0000', {
        x: width - 380,
        y: height - 180,
        size: 14,
        font: helveticaFont
    })

    page.drawRectangle({
        x: width - 580,
        y: height - 260,
        width: 250,
        height: 30,
        color: rgb(0.1098, 0.2667, 0.5569),
      })

    page.drawText('FACTURAR A', {
        x: width - 570,
        y: height - 250,
        size: 14,
        font: helveticaFontBold,
        color: rgb(1,1,1)
    })

    page.drawText(`${ClientData.client_name} ${ClientData.client_lastname}\n${ClientData.cedula}\n${ClientData.email}\n${ClientData.phone}`, {
        x: width - 570,
        y: height - 280,
        size: 12,
        font: helveticaFont,
    })

    page.drawRectangle({
        x: width - 280,
        y: height - 260,
        width: 250,
        height: 30,
        color: rgb(0.1098, 0.2667, 0.5569),
      })

    page.drawText('FACTURA#                FECHA', {
        x: width - 270,
        y: height - 250,
        size: 14,
        font: helveticaFontBold,
        color: rgb(1,1,1)
    })

    const date = new Date(ClientData.date);
    const newDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    page.drawText('#'+ClientData.id_invoice+'                                      '+newDate, {
        x: width - 270,
        y: height - 280,
        size: 12,
        font: helveticaFont,
    })
}