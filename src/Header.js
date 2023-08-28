import React from 'react'

import NavLinks from './componets/NavLinks'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id="header" className="header flex justify-between py-2 px-2 bg-slate-800 text-white">
      <Link>
      <h1 className='text-3xl font-bold p-7'>REACT ECOMERCE.</h1>
      </Link>
    <NavLinks/>
    </header>
  )
}

export default Header