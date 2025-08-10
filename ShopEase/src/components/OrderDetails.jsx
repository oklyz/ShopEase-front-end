import { useOrders } from '../contexts/OrdersContext'
import { useParams } from 'react-router-dom'

// import UserOrderContext from '../contexts/UserOrderContext'
const OrderDetails = () => {
  const { orders } = useOrders()
  const { index } = useParams()
  // const { userOrder } = useContext(UserOrderContext)
  console.log(orders.orders[index])
  return (
    <>
      <h1>{index}</h1>
    </>
  )
}

export default OrderDetails
