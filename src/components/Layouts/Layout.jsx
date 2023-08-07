import Navbar from "../Navbar/Navbar";

/**
 * Este es un layout o plantilla para reutilizar los estilos de main, navbar y footer
 * @param children corresponde a todos los elementos dentro del llamdo del layout
 */

export default function Layout({ children }) {
    return (
        <>
        <Navbar />
            <main class="ml-64 pt-12 flex flex-col sm:h-screen ">
            </main>
        </>
    )
}
