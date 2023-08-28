import React, { useEffect, useState } from 'react'
import Presentacional from './Presentacional'


function Container() {
const[data, setData]=useState([])

useEffect(() => {
  getProductos (setData)
},{})

const getProductos =()=>{
  fetch ('https://fakestoreapi.com/products')
  .then(res=> res.json())
  .then(json => setData (json))
}
return (
<Presentacional data={data}/>  
  )
}

export default Container