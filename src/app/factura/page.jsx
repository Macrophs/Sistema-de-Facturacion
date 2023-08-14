
import Factura from "@/components/Factura/Factura";
import Layout from "@/components/Layouts/Layout";
import PageMarker from "@/components/PageMarker/PageMarker";



/**
 * Esta es una pagina para mostrar la factura de una compra
 */

export default function FacturaPage() {
    return (
        <Layout rol={1}>
            <PageMarker icon={'facturacion_option.svg'} marker={'Factura de Compra'} />
            <Factura/>
        </Layout>
    )
}
