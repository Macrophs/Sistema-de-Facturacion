import { Body } from "@/services/PDF/Body";
import { Header } from "@/services/PDF/Header";
import { NextRequest } from "next/server";
import { PDFDocument, PageSizes, StandardFonts, rgb } from 'pdf-lib';
/**
 * Creará un pdf con la factura del cliente 
 * @param {NextRequest} request 
 */

export async function GET(request, {params:{id}}){
    const id_invoice = Number(id);
  
    if(isNaN(id_invoice))    
        return new Response("",{status:404});


    //obtener datos de la factura
    const url = "http://localhost:3000/api/invoice/"+id_invoice;
    const resp = await fetch(url, {method: "GET",});
    
    if (resp.status !== 200) {
        throw new Error("Error fetching users");   
    } 
    const invoice = await resp.json();


    // Generar PDF Utilizando PDFLIB
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage(PageSizes.A4);
    
    const { width, height } = page.getSize();

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const helveticaFontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  
    //Agregar Header
    Header(page, width, height, helveticaFont, helveticaFontBold, invoice.results[0]);

    //Agregar Body
    Body (page, width, height, helveticaFont, helveticaFontBold, pdfDoc, invoice.results);

     // Guardar PDF
     const pdfBytes = await pdfDoc.save();

     // Crea una respuesta HTTP con el PDF y los encabezados adecuados
     const headers = new Headers();
     headers.set('Content-Type', 'application/pdf');
     headers.set('Content-Disposition', 'attachment; filename="invoice_'+id_invoice+'.pdf"');
 
     const response = new Response(new Uint8Array(pdfBytes), {
         status: 200,
         headers: headers,
     });
 
   
    return response;

}

