import { useOrders } from '../contexts/OrdersContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OrderDetails = () => {
  const { orders } = useOrders()
  const { index } = useParams()
  orders && console.log(orders.orders)
  return (
    <>
      {/* orders.orders.items. */}

      {/* <div className="items" key={items._id}>
        <h2>Item Name: {orders.orders.items.name}</h2>
        <h2>Price: {orders.orders.items.price}</h2>
        <Link to={`/issue/${orders.orders.items._id}`}>
          <button>Issue</button>
        </Link>
      </div> */}
    </>
  )
}

export default OrderDetails
