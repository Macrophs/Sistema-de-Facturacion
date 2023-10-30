"use client"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
/**
 * Este es un componente global sobre el Navbar de la app
 */

export default function Navbar() {
  
  const router = useRouter();
  const pathname = usePathname();

  //useEffect que se encarga de validar si el usuario se encuentra en la ruta correspondiente segun su rol
  useEffect(() => {
   
    const path = pathname.split("/")[1]
    const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"));
    if(ActiveUser !== null)
    {
        if(ActiveUser.rol_name !== path )
        {
          if(ActiveUser.rol_name === "employee")
            router.push("/employee/cedula_cliente");
          else if(ActiveUser.rol_name=== "admin")
            router.push("/admin");
        }
    }
    else{
      router.push("/"); //retornar a inicio de sesión
  }
      
  }, []);
  
  
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("ActiveUser") !== null))
    {
      setUsername(JSON.parse(localStorage.getItem("ActiveUser")).name);
  
    }
  }, []);
  return (
    <nav className="bg-marianBlue fixed w-full flex items-center justify-between flex-wrap p-4 z-10">
        <section className="flex  items-center flex-shrink-0 text-white mr-6">
            <Image className="mr-2" width={32} height={32} src="/images/logo.svg" alt="logo" />

            <span className="font-semibold text-4xl tracking-tight">SDBS</span>
            <span className="hidden sm:block pt-4 pl-2 ">Simple Digital Billing System</span>
        </section>


        {username !== "" ? 
        <section>
            <section 
            className="flex items-center text-sm font-medium  rounded-full  md:mr-0 focus:ring-4  focus:ring-gray-700 text-white"
            type="button">
                <Image className="mr-2" width={32} height={32} src="/images/home/user-icon.png" alt="logo" />
                {username}
            </section>
        </section> 
      : 
      ""
        }
        
    </nav>
  )
}
