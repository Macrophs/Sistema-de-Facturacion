
/**
 * Este es un componente de la pagina factura, que contendrá la parte superior de la factura
 */

export default function HeaderFactura() {
  return (
    <>
       <section className="flex flex-col flex-wrap justify-center sm:justify-normal sm:items-start items-center sm:flex-row text-xl   w-full">
            <section className="p-5 m-5 w-full pl-0 flex flex-col items-center justify-center text-center ">
                <h1 className="text-marianBlue font-bold text-4xl pb-5">Simple Digital Billing System</h1>
                <section className="  font-medium">
                    <p>Calle Real de los Flores de Catia, Caracas </p>  
                    <p> Distrito Capital Venezuela </p>
                    <p>  Teléfono: (000) 000-0000 </p>
                </section>
            </section>
           
            
            <section className="p-5 m-5 pl-0 w-full sm:w-[45%]   ">
                <section className="bg-marianBlue flex  py-1 pl-5   text-white font-medium">
                  <p> FACTURAR A</p>
                </section> 
                <section className=" font-medium">
                    <p>[Nombre]</p>  
                    <p>[Cédula]</p>  
                    <p>[Correo]</p>  
                    <p>[Teléfono]</p>  
                </section>
            </section>
            <section className=" p-5 m-5 pl-0 w-full sm:w-[45%]">
            
              <section className="bg-marianBlue flex items-center py-1 flex-wrap justify-center text-white font-medium">
                  <p className="w-1/2"> FACTURA#</p>
                  <p> FECHA</p>
              </section>
              <section className=" flex items-center flex-wrap justify-center text-black font-medium">
                  <p className="w-1/2"> #2034</p>
                  <p> 19/08/2023</p>
              </section>
            </section>
                    
       </section>
      
    </>
  )
}
