import { createContext, useState, useContext } from 'react'

const OrdersContext = createContext()

export const useOrders = () => {
  return useContext(OrdersContext)
}

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(null)
  const value = {
    orders,
    setOrders
  }
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  )
}

export default OrdersContext
