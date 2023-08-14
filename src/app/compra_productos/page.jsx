import CompraProductos from "@/components/CompraProductos/CompraProductos";
import Layout from "@/components/Layouts/Layout";
import PageMarker from "@/components/PageMarker/PageMarker";
import FormCedulaCliente from "@/components/cedulaCliente/FormCedulaCliente";


/**
 * Esta es una pagina para la selección de productos a comprar
 */

export default function CompraProductosPage() {
    return (
        <Layout rol={1}>
            <PageMarker icon={'list.svg'} marker={'Compra de Productos'} />
            <CompraProductos />
        </Layout>
    )
}
