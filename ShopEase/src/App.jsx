import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Dashboard from './pages/Deashboard'
import ContactAs from './pages/ContactAs'
import ItemDetails from './pages/ItemDetails'
import Profile from './pages/Profile'
import { useContext, useEffect } from 'react'
import UserContext from './contexts/UserContext'
import { CheckSession } from './services/Auth'

function App() {
  const { setUser } = useContext(UserContext)

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()

    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          {/* customer routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/itemdetails" element={<ItemDetails />}></Route>
          <Route path="/contact" element={<ContactAs />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          {/* admin routes */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
