import UserContext from '../contexts/UserContext'
import { getUserOrders } from '../services/order'
import { useEffect, useContext, useState } from 'react'
import OrderDetails from '../components/OrderDetails'
const OrderList = () => {
  const [UserOrder, setUserOrder] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const OrdersLists = async () => {
      const Orders = await getUserOrders(user.id)
      setUserOrder(Orders)
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

          UserOrder.orders.map((order) => {
            return (
              <div className="OrdersList" key={order._id}>
                <OrderDetails order={order} />
              </div>
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
