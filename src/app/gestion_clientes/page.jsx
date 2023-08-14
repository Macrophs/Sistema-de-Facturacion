import GestionClientes from "@/components/GestionClientes/GestionClientes";
import Layout from "@/components/Layouts/Layout";
import PageMarker from "@/components/PageMarker/PageMarker";

/**
 * Esta es una pagina para Gestionar toda al información de los clientes
 */

export default function GestionClientePage() {
  return (
    <Layout rol={1}>
      <PageMarker icon={"client.svg"} marker={"Gestión de Clientes"} />
      <GestionClientes />
    </Layout>
  );
}
