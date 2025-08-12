import { useContext, useEffect, useState } from 'react'
import CartContext from '../contexts/CartContext'
import Cookies from 'js-cookie'
const Cart = () => {
  const { cart } = useContext(CartContext)
  const [myCart, setMyCart] = useState([])
  useEffect(() => {
    cart.length > 0 && Cookies.set('cart', JSON.stringify(cart), { expires: 1 })

    const cc = async () => {
      // Retrieve array from cookie (convert back to object)
      const savedCart = Cookies.get('cart')
      const parsedCart = savedCart ? JSON.parse(savedCart) : []
      setMyCart(parsedCart)
    }
    cc()
  }, [])

  myCart && console.log(myCart)

  return (
    <>
      {myCart.length > 0 ? (
        <>
          <div>
            {myCart.map((item) => (
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
