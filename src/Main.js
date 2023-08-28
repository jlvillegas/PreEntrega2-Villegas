import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Container from './componets/Container'



function Main() {
  const dark = false
  return (
    <main className={dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"}>
  
   <Routes>
    <Route path="/"element={<Container/>}/>
    {/* <Route path='/cat/:talle'element={<Container/>}></Route> */}
    <Route path="/productos"element={<Container/>}/>
    <Route path="/carrito"element={<p>carrito</p>}/>

    
    
   </Routes>
     
   </main>
     
    
  )
}

export default Main