import UserContext from '../contexts/UserContext'
import { getUserOrders } from '../services/order'
import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
const OrderList = () => {
  const [UserOrder, setUserOrders] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const OrdersLists = async () => {
      const Orders = await getUserOrders(user.id)
      setUserOrders(Orders)
    }
    user && OrdersLists()
  }, [user])
  orders && console.log(orders)
  return (
    <>
      {!UserOrder ? (
        <h1>'No orders found for this user'</h1>
      ) : (
        UserOrder.orders.map((order, index) => {
          return (
            <div className="OrdersList" key={order._id}>
              <h2>Order No: {index + 1}</h2>
              <h2>Name: {order.items.name}</h2>
              <h2>Price : {order.items.price}</h2>
              <h2>Date: {order.date.split('T')[0]}</h2>
              <h2>Quantity of Items: {order.quantityOrder}</h2>
              <Link to={`/issue/${order.items._id}`}>
                <button>Issue</button>
              </Link>
            </div>
          )
        })
      )}
    </>
  )
}

export default OrderList
