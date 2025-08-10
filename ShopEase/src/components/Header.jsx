import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Nav = () => {
  const { user, setUser } = useContext(UserContext)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const adminOptions = (
    <nav>
      <Link to="">Dashboard</Link>
      <Link to="">Issues</Link>
      <Link to="">New Product</Link>
      <Link to="/login" onClick={handleLogOut}>
        log out
      </Link>
    </nav>
  )

  const customerOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="">Items</Link>
      <Link to="">Contact</Link>
      <Link to="">Cart</Link>
      <Link to="/login" onClick={handleLogOut}>
        log out
      </Link>
      <Link to="">Profile</Link>
    </nav>
  )

  const publicOptions = (
    <nav>
      <Link to="/login">log in</Link>
      <Link to="/register">Sign up</Link>
    </nav>
  )

  return (
    <>
      <header>
        {user ? (
          <>
            {user.role === 'customer' && <>{customerOptions}</>}
            {user.role === 'admin' && <>{adminOptions}</>}
          </>
        ) : (
          publicOptions
        )}
      </header>
    </>
  )
}

export default Nav
