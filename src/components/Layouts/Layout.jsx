"use client"
import { usePathname, useRouter } from "next/navigation";
import FooterGeneral from "../Globals/Footers/FooterGeneral";
import Navbar from "../Globals/Navbar/Navbar";
import SideBar from "../Globals/SideBar/SideBar";
import { useEffect } from "react";

/**
 * Constantes que almacenan las Urls a las que se podran acceder en la interfaz dependiendo el rol
 * @param props url: direccion a la que se redireccionará, label: nombre de la interfaz, icon: icono representativo de la interfaz
 */

const links = [
  {
    url: "/employee/gestion_clientes",
    label: "Gestión de Clientes",
    icon: "user_option.svg",
  },
  {
    url: "/employee/cedula_cliente",
    label: "Facturación",
    icon: "facturacion_option.svg",
  },
];

const linksAdmin = [
    {
      url: "/admin",
      label: "Panel de Control",
      icon: "dashboard.svg",
    },
    {
      url: "/admin/gestion_empleados",
      label: "Gestión de Empleados",
      icon: "user_option.svg",
    },
    {
      url: "/admin/gestion_productos",
      label: "Gestión de Productos",
      icon: "facturacion_option.svg",
    },
    {
      url: "/admin/gestion_facturas",
      label: "Gestión de Facturas",
      icon: "factura.svg",
    },
  ];
  
  

/**
 * Este es un layout o plantilla para reutilizar los estilos de main, navbar y footer
 * @param children corresponde a todos los elementos dentro del llamdo del layout
 * @param rol corresponde al tipo de rol requerido para mostrar los links del sideBar
 */

export default function Layout({ children, rol }) {
  return (
    <>
      <Navbar />
      <SideBar links={rol === 1 ? links : linksAdmin} />
      <main className="sm:w-[calc(100%_-_256px)] sm:ml-64 pt-12 flex flex-col sm:h-full min-h-[95.8vh]">
        {children}
      </main>
      <FooterGeneral />
    </>
  );
}
