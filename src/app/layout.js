import '../styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
