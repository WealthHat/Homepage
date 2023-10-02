import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/footer'


const Layout = ({children}:any) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout