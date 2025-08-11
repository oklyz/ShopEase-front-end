import { useOrders } from '../contexts/OrdersContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OrderDetails = () => {
  const { orders } = useOrders()
  const { index } = useParams()

  console.log(orders.orders[index])

  return (
    <>
      {orders.orders[index].items.map((items, index) => {
        return (
          <div className="items" key={items._id}>
            <h2>Item Name: {items.name}</h2>
            <h2>Price: {items.price}</h2>
            <Link to={`/issue/${orders.orders[index]._id}`}>
              <button>Issue</button>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default OrderDetails
