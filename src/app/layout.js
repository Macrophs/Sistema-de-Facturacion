import '../styles/globals.css'
import Navbar from '@/components/Globals/Navbar/Navbar'
// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body class="bg-slate-200">
        {children}
      </body>
    </html>
  )
}
