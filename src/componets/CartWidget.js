import { NavLink } from "react-router-dom"


function CartWidget() {
  return (
    <NavLink to='/carrito'>
      <i className='material-icons'>shopping_cart</i>
     
    </NavLink>
  )
}

export default CartWidget