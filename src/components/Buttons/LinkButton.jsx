import Image from "next/image"
import Link from "next/link"
/**
 * Este es un componente para reutilizar los botones de direcciones en la barra lateral
 * @params props url: direccion a la que se redireccionará, label: nombre de la interfaz, icon: icono representativo de la interfaz
 */

export default function LinkButton({ url,icon, label, ...params }) {
    return (

        <Link href={url} className="vinculo-menuLateral flex items-center p-2  rounded-lg text-white group" {...params} >
                
            <Image className="flex-shrink-0  transition duration-75 group-hover:text-white" width={20} height={20}
            src={`/images/icons/${icon}`} alt={`${label} Icon image`}/>
                
            <span className="flex-1 ml-3 text-left whitespace-nowrap">{label}</span>

        </Link>

    )
}