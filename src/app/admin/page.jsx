import HomeAdmin from '@/components/Admin/HomeAdmin/HomeAdmin'
import Layout from '@/components/Layouts/Layout'
import PageMarker from '@/components/PageMarker/PageMarker'

/**
 * Esta es la pagina principal del administrador 
 */

export default function AdminPage() {
  return (
    <Layout rol={2}>
        <PageMarker icon={"home.svg"} marker="Inicio Admin"/>
        <HomeAdmin />
    </Layout>
  )
}
