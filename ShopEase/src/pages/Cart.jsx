import { useContext } from 'react'
import CartContext from '../contexts/CartContext'
const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      {cart.length > 0 ? (
        <>
          <div>
            {cart.map((item) => (
              <>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <h3>{item.quantityOrdered}</h3>
              </>
            ))}
          </div>
          <br />
          <br />
        </>
      ) : (
        <>
          <div>
            <h1>Empty</h1>
          </div>
        </>
      )}
    </>
  )
}

export default Cart
