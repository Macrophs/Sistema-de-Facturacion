import GestionFacturas from "@/components/Admin/GestionFacturas/GestionFacturas";
import Factura from "@/components/Employee/Factura/Factura";
import Layout from "@/components/Layouts/Layout";
import PageMarker from "@/components/PageMarker/PageMarker";

export default function GestionFacturasPage() {
  return (
    <Layout rol={2}>
        <PageMarker icon={"factura.svg"} marker={"Gestión de Facturas"}/>
        <Factura />
    </Layout>
  )
}
