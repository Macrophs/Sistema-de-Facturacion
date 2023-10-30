import { PageSizes, rgb } from 'pdf-lib';
import { CalculatePriceIva } from '../CalculatePriceIva';

/**
 * Funcion que dibuja la estructura del Body de la Factura en PDF
 * @param {*} page 
 * @param {*} width 
 * @param {*} height 
 * @param {*} helveticaFont 
 * @param {*} helveticaFontBold 
 * @param {*} pdfDoc 
 * @param {*} invoice 
 */
export function Body(page,width, height, helveticaFont, helveticaFontBold, pdfDoc,invoice){

    const {final_price, price_iva} = CalculatePriceIva(invoice);
    const final_price_iva = (Number(final_price) + Number(price_iva)).toFixed(2)
    
    let position = height - 400
    page.drawRectangle({
        x: width - 580,
        y: position,
        width: 550,
        height: 30,
        color: rgb(0.1098, 0.2667, 0.5569),
      })

    page.drawText('PRODUCTO', {
        x: width - 550,
        y: position + 10,
        size: 14,
        font: helveticaFontBold,
        color: rgb(1,1,1)
    })

    page.drawText('PRECIO UNITARIO', {
        x: width - 400,
        y: position + 10,
        size: 14,
        font: helveticaFontBold,
        color: rgb(1,1,1)
    })

    page.drawText('CANTIDAD', {
        x: width - 220,
        y: position + 10,
        size: 14,
        font: helveticaFontBold,
        color: rgb(1,1,1)
    })

    page.drawText('TOTAL', {
        x: width - 100,
        y: position + 10,
        size: 14,
        font: helveticaFontBold,
        color: rgb(1,1,1)
    })

    for(let i = 0; i < invoice.length; i++)
    {
        position =position - 30;
       
        if(position < 100){
            var page =pdfDoc.addPage(PageSizes.A4);
            var { width, height } = page.getSize();
            position = height - 100;
        }

        page.drawLine({
            start: {x: width - 580, y: position - 10},
            end: {x: width - 30, y: position - 10},
            color: rgb(0.1098, 0.2667, 0.5569),
        })

        page.drawText(invoice[i].product_name, {
            x: width - 550,
            y: position ,
            size: 14,
            font: helveticaFont,
        }) 

        page.drawText(""+invoice[i].product_price, {
            x: width - 400,
            y: position ,
            size: 14,
            font: helveticaFont,
        }) 

        page.drawText(""+invoice[i].product_quantity, {
            x: width - 220,
            y: position ,
            size: 14,
            font: helveticaFont,
        }) 

        page.drawText(""+invoice[i].product_price * invoice[i].product_quantity, {
            x: width - 100,
            y: position ,
            size: 14,
            font: helveticaFont,
        }) 

    }

    page.drawText('SubTotal: $'+final_price, {
        x: width - 150,
        y: position - 40,
        size: 14,
        color: rgb(0.1098, 0.2667, 0.5569),
        font: helveticaFontBold
    })

    page.drawText('IVA: $'+price_iva, {
        x: width - 150,
        y: position - 60,
        size: 14,
        font: helveticaFontBold
    })

    page.drawRectangle({
        x: width - 150,
        y: position - 90,
        width: 100,
        height: 20,
        color: rgb(0.1098, 0.2667, 0.5569),
      })
    
    
    page.drawText('Total: $'+final_price_iva, {
        x: width - 145,
        y: position - 85,
        size: 14,
        color: rgb(1,1,1),
        font: helveticaFontBold
    })

    page.drawText('¡Gracias por su compra!', {
        x: width - 550,
        y: position - 85,
        size: 16,
        color: rgb(0.1098, 0.2667, 0.5569),
        font: helveticaFontBold
    })
   

}
