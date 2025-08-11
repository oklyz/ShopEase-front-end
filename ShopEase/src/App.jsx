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
import Issueform from './components/Issueform'
import Issues from './pages/Issues'
import { useContext, useEffect } from 'react'
import UserContext from './contexts/UserContext'
import { CheckSession } from './services/Auth'
import AdminItems from './pages/AdminItems'
import ItemForm from './components/ItemForm'

import OrderDetails from './components/OrderDetails'
import { OrdersProvider } from './contexts/OrdersContext'
function App() {
  const { user, setUser } = useContext(UserContext)

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
        <OrdersProvider>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            {/* customer routes */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/itemdetails/:itemId" element={<ItemDetails />}></Route>
            <Route path="/contact" element={<ContactAs />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route
              path="/profile/order/:index"
              element={<OrderDetails />}
            ></Route>
            <Route path="/issue/:orderId" element={<Issueform />}></Route>

            {/* admin routes */}
            {user && user.role === 'admin' ? (
              <>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/issues" element={<Issues />}></Route>
                <Route path="/adminitems" element={<AdminItems />}></Route>
                <Route path="/adminitems/new" element={<ItemForm />}></Route>
              </>
            ) : (
              <>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/itemdetails" element={<ItemDetails />}></Route>
                <Route path="/contact" element={<ContactAs />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route
                  path="/profile/order/:index"
                  element={<OrderDetails />}
                ></Route>
              </>
            )}
          </Routes>
        </OrdersProvider>
      </main>
    </>
  )
}

export default App
