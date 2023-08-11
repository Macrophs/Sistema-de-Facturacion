import FooterGeneral from "../Footers/FooterGeneral";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

/**
 * Constante que almacena las Urls a las que se podran acceder en la interfaz
 * @param props url: direccion a la que se redireccionará, label: nombre de la interfaz, icon: icono representativo de la interfaz
 */

const links = [
    {
        url: "#",
        label: "Panel de Control",
        icon: "dashboard.svg",
    },
    {
        url : "gestion_clientes",
        label : "Gestión de Clientes",
        icon : "user_option.svg",
    },
    {
        url : "cedula_cliente",
        label : "Facturación",
        icon : "facturacion_option.svg",
    }
];

/**
 * Este es un layout o plantilla para reutilizar los estilos de main, navbar y footer
 * @param children corresponde a todos los elementos dentro del llamdo del layout
 */

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <SideBar links={links}/>
            <main class="sm:w-[calc(100%_-_256px)] sm:ml-64 pt-12 flex flex-col sm:h-full min-h-[95.8vh]">
                {children}
            </main>
            <FooterGeneral />
        </>
    )
}
