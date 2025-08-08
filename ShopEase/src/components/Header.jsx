import { Link } from "react-router-dom"

const Nav = () => {

  

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Sign in</Link>
      <Link to="/register">Sign up</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/itemDetails">ItemDetails</Link>
    </>
  )
}

export default Nav