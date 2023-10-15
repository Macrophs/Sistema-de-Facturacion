
/**
 * Este es un componente de la pagina factura, que contendrá la parte superior de la factura
 */

export default function HeaderFactura({Factura}) {
  if(!Factura)
      return "";
  const date = new Date(Factura[0].date);
  const newDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  console.log(Factura[0])
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
                    <p>{Factura[0].client_name} {Factura.client_lastname}</p>  
                    <p>{Factura[0].cedula}</p>  
                    <p>{Factura[0].email}</p>  
                    <p>{Factura[0].phone}</p>  
                </section>
            </section>
            <section className=" p-5 m-5 pl-0 w-full sm:w-[45%]">
            
              <section className="bg-marianBlue flex items-center py-1 flex-wrap justify-center text-white font-medium">
                  <p className="w-1/2"> FACTURA#</p>
                  <p> FECHA</p>
              </section>
              <section className=" flex items-center flex-wrap justify-center text-black font-medium">
                  <p className="w-1/2"> #{Factura[0].id_invoice}</p>
                  <p> {newDate}</p>
              </section>
            </section>
                    
       </section>
      
    </>
  )
}
