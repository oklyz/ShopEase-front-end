import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { OrderOverallContextProvider } from './contexts/OrderOverallContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <OrderOverallContextProvider>
          <App />
        </OrderOverallContextProvider>
      </CartProvider>
    </UserProvider>
  </BrowserRouter>
)
