import GestionProductos from "@/components/Admin/GestionProductos/GestionProductos";
import Layout from "@/components/Layouts/Layout";
import PageMarker from "@/components/PageMarker/PageMarker";

export default function GestionProductosPage() {
  return (
    <Layout rol={2}>
        <PageMarker icon={"facturacion_option.svg"} marker={"Gestión de Productos"}/>
        <GestionProductos />
    </Layout>
  )
}
