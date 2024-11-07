import React from 'react'
import Navbar from '../Navbar.tsx'
import Footer from '../Footer.tsx'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
        <Navbar /> 
        <>
            { children }
        </>
        <Footer />
    </>
  )
}

export default MainLayout
