import Image from "next/image"
import LinkButton from "../Buttons/LinkButton"
/**
 * Este es un componente global sobre el SideBar de la app
 */

export default function SideBar({links}) {
    return (
    <section>

        <button type="button" className="inline-flex  bg-blue-900 items-center p-2 mt-20 ml-3 text-sm  rounded-lg sm:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <Image width={24} height={24} src="/images/icons/sidebar.svg" alt="sidebar"/>
        </button>

        <aside className="fixed top-0 left-0  mt-16  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" >
            <section className="h-full px-3 py-4 overflow-y-auto mt-2 bg-gradient-to-t from-lightBlue to-marianBlue " >
                
                <ul className="space-y-2 font-medium">
                    
                    {/* Se colocan todos los links correspondiente */}
                    {links.map(({url,label,icon}) =>(
                        <li key={url}>
                            <LinkButton url={url} label={label} icon={icon} />
                        </li>
                    ))}

                </ul>
                <section className="absolute bottom-48 w-11/12 m-auto flex justify-center items-center">
                    
                    <LinkButton url={"/"} label={"Salir"} icon={"icono-salir.svg"} />
                </section>
            </section>
        </aside>


    </section>

    )
  }
  