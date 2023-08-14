import GestionEmpleados from "@/components/Admin/GestionEmpleados/GestionEmpleados";
import Layout from "@/components/Layouts/Layout";
import PageMarker from "@/components/PageMarker/PageMarker";

export default function GestionEmpleadosPage() {
  return (
    <Layout rol={2}>
        <PageMarker icon={"employee.svg"} marker={"Gestión de Empleados"}/>
        <GestionEmpleados />
    </Layout>
  )
}
