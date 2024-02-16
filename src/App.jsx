import { useState } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Footer from "./components/Footer"


function App() {


  return (
    <>
    <div className='container mx-auto mt-20' >
      <Header/>
      <div className='mt-12 md:flex lg:w-2/5'>
      <Formulario/>
      <ListadoPacientes/>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default App
