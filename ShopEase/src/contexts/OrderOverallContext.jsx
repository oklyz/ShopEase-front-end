import { createContext, useState } from 'react'

const OrderOverallContext = createContext(null)

export const OrderOverallContextProvider = ({ children }) => {
  const [overall, setOverall] = useState(null)

  return (
    <OrderOverallContext.Provider value={{ overall, setOverall }}>
      {children}
    </OrderOverallContext.Provider>
  )
}

export default OrderOverallContext
