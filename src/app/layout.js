"use client"
import '../styles/globals.css'
import CreateLocalStorage from '@/JS/CreateLocalStorage'
import Navbar from '@/components/Globals/Navbar/Navbar'
import { useEffect } from 'react'
// const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
    
  useEffect(() => {
    CreateLocalStorage();
  }, []);
  
  return (
    <html lang="es">
    <head>
    <meta charset="UTF-8"/>
    </head>
      <body className="bg-slate-200">
        {children}
      </body>
    </html>
  )
}
