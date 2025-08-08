import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Dashboard from './pages/Deashboard'
import ContactAs from "./pages/ContactAs"
import ItemDetails from './pages/ItemDetails'
import Profile from './pages/Profile'

function App() {
  

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/contact' element={<ContactAs/>}></Route>
          <Route path='/itemdetails' element={<ItemDetails/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
