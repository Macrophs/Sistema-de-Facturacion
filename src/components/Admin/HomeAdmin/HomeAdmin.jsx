"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Este es un componente que engloba toda la estructura de la interfaz del Home - Admin
 */

const cards = [
  {
    id: 1,
    title: "Gestión de Empleados",
    action: "Agregue, Elimine o Actualice a los Empleados",
    image: "/images/cardsAdministrator/cajera.jpg",
    url: "/admin/gestion_empleados",
  },
  {
    id: 2,
    title: "Gestión de Productos",
    action: "Agregue, Elimine o Actualice los Productos",
    image: "/images/cardsAdministrator/products.jpg",
    url: "/admin/gestion_productos",
  },
  {
    id: 3,
    title: "Gestión de Facturas",
    action: "Visualice las Facturas Realizadas",
    image: "/images/cardsAdministrator/factura.jpg",
    url: "/admin/gestion_facturas",
  },
];

export default function HomeAdmin() {


  //se obtiene el usuario logeado
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("ActiveUser") !== null))
      setUsername(JSON.parse(localStorage.getItem("ActiveUser")).username);
  }, []);
  
  return (
    <section>
      <h1 className="text-marianBlue text-3xl font-bold mb-4 text-center">
        ¡Bienvenido al Sistema {username}!
      </h1>
      <h2 className="text-marianBlue text-xl mb-4 text-center">
        Seleccione una opción para continuar
      </h2>

      <section className="flex flex-wrap flex-col justify-center items-center lg:flex-row mt-10 ">
        
            {/*Card 1 */}
           
            <Link
              href={"/admin/gestion_empleados"}
              className=" flex flex-col p-5 text-marianBlue items-center justify-center w-80 md:w-96  xl:w-auto xl:min-w-[31%] transition ease-in-out border mb-6 max-w-xl rounded-lg   lg:mr-6 hover:bg-marianBlue group hover:text-white"
            >
          
              
              <svg width={100} height={100} viewBox="0 0 846.66 846.66">
                  <path d="M138.64 212.28h121.09c10.3-74.25 74.4-130.24 149.55-130.24h28.1c75.15 0 139.25 55.99 149.55 130.24h121.09c71.5 0 129.92 58.42 129.92 129.93v292.48c0 71.51-58.42 129.93-129.92 129.93H138.64c-71.5 0-129.92-58.42-129.92-129.93V342.21c0-71.51 58.42-129.93 129.92-129.93zm99.12 350.99-56.14 79.83c-15.64 22.24-49.49-1.58-33.85-23.81l56.15-79.85c-18.78-19.51-30.33-46.05-30.33-75.27 0-59.96 48.61-108.58 108.57-108.58 59.96 0 108.57 48.62 108.57 108.58 0 59.95-48.61 108.57-108.57 108.57-15.82 0-30.84-3.39-44.4-9.47zm44.4-166.21c-37.06 0-67.11 30.05-67.11 67.11s30.05 67.1 67.11 67.1 67.11-30.04 67.11-67.1c0-37.06-30.05-67.11-67.11-67.11zm182.11 266.16c-27.27 0-27.27-41.47 0-41.47h192.07c27.27 0 27.27 41.47 0 41.47H464.27zm0-122.19c-27.27 0-27.27-41.47 0-41.47h192.07c27.27 0 27.27 41.47 0 41.47H464.27zm0 61.09c-27.27 0-27.27-41.46 0-41.46h192.07c27.27 0 27.27 41.46 0 41.46H464.27zm0-122.19c-27.27 0-27.27-41.47 0-41.47h192.07c27.27 0 27.27 41.47 0 41.47H464.27zm0-115.05c-27.27 0-27.27-41.46 0-41.46h154.04c27.28 0 27.28 41.46 0 41.46H464.27zm-162.51-152.6H544.9c-9.92-51.16-55.22-88.77-107.52-88.77h-28.1c-52.3 0-97.6 37.61-107.52 88.77zm406.26 41.46H138.64c-48.6 0-88.46 39.86-88.46 88.47v292.48c0 48.61 39.85 88.46 88.46 88.46h569.38c48.6 0 88.46-39.85 88.46-88.46V342.21c0-48.61-39.86-88.47-88.46-88.47z"
                  className={` group-hover:fill-white fill-marianBlue  `}
                  />
              </svg>

              <div className="flex flex-col justify-between p-4 leading-normal text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  Gestión de Empleados
                </h5>
                <p className="mb-3 font-bold text-center  ">Agregue, Elimine o Actualice a los Empleados</p>
              </div>
            </Link>
            
            {/*Card 2 */}
            <Link
              href={"/admin/gestion_productos"}
              className=" flex flex-col p-5 text-marianBlue items-center justify-center w-80 md:w-96  xl:w-auto xl:min-w-[32%] transition ease-in-out border mb-6 max-w-xl rounded-lg   lg:mr-6 hover:bg-marianBlue group hover:text-white"
            >
          
              
                  <svg width={100} height={100} viewBox="0 0 7111 7111">
                    <path d="m1739 5084-439-255-5 590c0 43-42 104-86 104-17 0-35-6-52-12l-386-224c-34-18-52-52-52-87v-707l-483-278v1751l1503 868V5084zm2338-2625v-590l-426 246v1753l1503-867V1252l-490 279v704c0 72-68 96-121 126l-310 178c-71 40-156 1-156-80zm201-702v529l190-109v-533l-190 113zm-288-63L2549 795l-498 288 695 397 807 467 437-253zM3495 12c29-17 69-17 104 0l1710 985c29 17 52 51 52 86v1921l1664 958c29 18 52 52 52 87v1975c0 34-17 69-52 86l-1716 991c-6 3-14 6-23 8-6 2-13 3-19 3h-6c-12 0-24-2-35-6-5-2-10-4-15-5l-1660-956-1657 956c-7 3-17 6-28 9-7 1-14 2-21 2h-5c-12 0-24-2-35-6-5-2-10-4-14-5L86 6110c-29-17-52-52-52-86V4049c0-35 17-69 52-87l1647-948V1089c0-35 17-69 52-87L3495 12zm-366 448 1441 898 474-275-1497-864-418 241zm-385 222 1436 896 185-103-1438-898-183 105zm699 3184V2118l-800-465-703-401v1749l136 78 1367 787zm2350 1559v-582l-426 248v1743l1503-868V4224l-484 276 6 695c0 74-72 97-127 126l-317 185c-64 43-155-3-155-81zm102-882 186-109-1437-896-186 108 1437 897zm99 183v520l190-109v-522l-190 111zm-288-67-1443-899-495 287 1501 865 437-253zm-857-1240 1446 901 470-269-1502-872-414 240zm310 3415V5084l-1497-866v1752l1497 864zM348 4047l478 276 1439-896-426-246-1491 866zm2497-286-1438 897 441 254 1497-861-500-290zm604 463-1503 867v1743l1503-868V4224zm-802-577-183-105-1437 897 182 105 1438-897zM1111 4723l-190-110v530l190 109v-529z"
                      className={` group-hover:fill-white fill-marianBlue  `}
                    />
                  </svg>

              <div className="flex flex-col justify-between p-4 leading-normal text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  Gestión de Productos
                </h5>
                <p className="mb-3 font-bold text-center  ">Agregue, Elimine o Actualice los Productos</p>
              </div>
            </Link>


            {/*Card 3 */}
            <Link
              href={"/admin/gestion_facturas"}
              className=" flex flex-col p-5 text-marianBlue items-center justify-center w-80 md:w-96  xl:w-auto xl:min-w-[33%] transition ease-in-out border mb-6 max-w-xl rounded-lg   lg:mr-6 hover:bg-marianBlue group hover:text-white"
            >
          
              
              <svg width={120} height={100} viewBox="0 0 30 18">
                  <path
                    d="M6.181 20.893a3.307 3.307 0 0 1-3.158-2.906l-.017-.194L3 17.6v-1.575a.863.863 0 0 1 .628-.83l.114-.026.122-.01H5.84V3.887a.865.865 0 0 1 .3-.654l.1-.074.111-.059a.853.853 0 0 1 .714 0l.113.061.1.076 1.661 1.47 1.667-1.486a.865.865 0 0 1 .809-.189l.117.042.127.07.1.076 1.661 1.486 1.662-1.485a.856.856 0 0 1 .818-.184l.121.044.116.063.1.076L17.9 4.708l1.662-1.469a.865.865 0 0 1 .688-.209l.122.025.119.045a.855.855 0 0 1 .47.538l.03.125.009.124V17.6a3.3 3.3 0 0 1-3.109 3.291h-.08l-11.63.002ZM7.57 5.807v9.352h7.7a.863.863 0 0 1 .83.628l.026.115.009.122V17.6a1.567 1.567 0 0 0 3.107.292l.02-.147.007-.145V5.807l-.8.707a.857.857 0 0 1-.934.135l-.116-.063-.1-.076-1.661-1.485L14 6.512a.856.856 0 0 1-.936.138l-.116-.062-.1-.076-1.666-1.487-1.661 1.487a.856.856 0 0 1-.933.14l-.116-.061-.1-.076-.802-.708ZM4.73 16.889v.711a1.563 1.563 0 0 0 1.274 1.541l.148.02.144.006H14.8l-.017-.03a3.285 3.285 0 0 1-.345-1.055l-.025-.226-.011-.257v-.707l-9.672-.003Zm12.2-3.378H9.934a.864.864 0 0 1-.237-1.7l.114-.026.122-.009h6.995a.864.864 0 0 1 .238 1.7l-.115.026-.121.009ZM13.915 10.5H9.934A.864.864 0 0 1 9.7 8.8l.114-.026.122-.009h3.982a.864.864 0 0 1 .238 1.695l-.115.026-.126.014Z"
                    className={` group-hover:fill-white fill-marianBlue  `}

                  />
              </svg>

              <div className="flex flex-col justify-between p-4 leading-normal text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  Gestión de Facturas
                </h5>
                <p className="mb-3 font-bold text-center  ">Visualice las Facturas Realizadas</p>
              </div>
            </Link>
         
        
      </section>
    </section>
  );
}
