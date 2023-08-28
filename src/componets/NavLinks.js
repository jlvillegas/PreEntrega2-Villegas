import {  NavLink } from 'react-router-dom'
import React from 'react'
import CartWidget from './CartWidget'
// import CartWidget from './CartWidget

function NavLinks() {
  return (

    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      
      <NavLink className=' flex p-4'to="/productos">productos</NavLink>
      <NavLink className=' flex p-4' to="/carrito">carrito</NavLink>
      <CartWidget/>
    </nav>
    
  )
}
export default NavLinks