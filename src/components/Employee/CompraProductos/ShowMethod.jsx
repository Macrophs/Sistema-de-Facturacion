
/**
 * Este es un componente que se encarga de crear la estructura de los métodos de pagos seleccionables
 */

export default function ShowMethod({id,method ,setMethod, label, children}) {
    return (
    
    <section className={`mt-10 p-5 w-full md:w-1/2 rounded-md  flex items-center justify-center flex-col group transition ease-in-out hover:bg-marianBlue cursor-pointer  ${method === id ? "bg-marianBlue " : " " } `} onClick={()=> setMethod(id)}> 
            {children}        
        <h1 className={`mt-4 text-marianBlue text-center font-bold text-xl group-hover:text-white ${method === id ? "text-white " : "text-marianBlue " }`}>{label}</h1>
    </section>
     
    )
  }