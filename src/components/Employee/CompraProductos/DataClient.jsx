
/**
 * Este es un componente de la pagina compra producto, que contendrá los datos del cliente
 */

export default function DataClient(props) {
  return (
    <>
      <section className="flex align-middle flex-grow  items-center lg:mt-0 m-5 justify-around">
       
        <h1><span className="text-marianBlue font-medium">Cliente:</span> {props.Client.name} {props.Client.lastname}</h1>
        <h1><span className="text-marianBlue font-medium">Cédula:</span> {props.Client.cedula}</h1>
        
       </section>
    </>
  )
}