import Layout from "@/components/Layouts/Layout";
import PageMarker from "@/components/PageMarker/PageMarker";
import FormCedulaCliente from "@/components/cedulaCliente/FormCedulaCliente";


/**
 * Esta es una pagina para la peticion de la cedula al cliente
 */

export default function CedulaClientePage() {
    return (
        <Layout rol={1}>
            <PageMarker icon={'user.svg'} marker={'Ingreso Cliente'} />
            <FormCedulaCliente />
        </Layout>
    )
}
