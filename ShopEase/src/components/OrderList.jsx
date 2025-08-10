import UserContext from '../contexts/UserContext'
import { getUserOrders } from '../services/order'
import { useEffect, useContext, useState } from 'react'
import { useOrders } from '../contexts/OrdersContext'
import { Link } from 'react-router-dom'
const OrderList = () => {
  const [UserOrder, setUserOrders] = useState(null)
  const { orders, setOrders } = useOrders()
  const { user } = useContext(UserContext)

  useEffect(() => {
    const OrdersLists = async () => {
      const Orders = await getUserOrders(user.id)
      setUserOrders(Orders)
      setOrders(Orders)
    }
    user && OrdersLists()
  }, [user])

  return (
    <>
      <div className="items">
        {!UserOrder ? (
          <h1>'No orders found for this user'</h1>
        ) : (
          // console.log(UserOrder.orders[0])
          // console.log(UserOrder.orders[0].items[0])

          UserOrder.orders.map((order, index) => {
            return (
              <Link to={`/profile/order/${index}`} className="orderlink">
                <div className="OrdersList" key={order._id}>
                  <h2>Order No: {index + 1}</h2>
                  <h2>Date: {order.date}</h2>
                  <h2>Number of Items: {order.items.length}</h2>
                </div>
              </Link>
            )
          })

          // UserOrder.orders.map((order) => {
          //   return <h1>{order.name}</h1>
          // })
        )}
      </div>
    </>
  )
}

export default OrderList
