import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import CartContext from '../contexts/CartContext'
import { getItemById } from '../services/item'
import CommentsForm from '../components/CommentsForm'
import DisplayComments from '../components/DisplayComments'
import Cookies from 'js-cookie'

const ItemDetails = () => {
  let cartList = []
  let { itemId } = useParams()
  const { cart, setCart } = useContext(CartContext)
  // const [cart, setCart] = useState([])
  const { user } = useContext(UserContext)
  const [item, setItem] = useState(null)
  let [quantity, setQuantity] = useState(0)
  let checkUserRole
  user ? (checkUserRole = user.role) : (checkUserRole = true)

  useEffect(() => {
    const getItemDetails = async () => {
      const itemdetails = await getItemById(itemId)
      setItem(itemdetails)
    }
    getItemDetails()
  }, [])

  const addToCart = () => {
    let myCart = {
      ...item,
      quantityOrdered: quantity
    }
    setCart([...cart, myCart])
  }

  return (
    <>
      <div>
        {item ? (
          <>
            <div>
              <img
                src={`http://localhost:3001/images/${item.image}`}
                alt="itemImage"
                width={100}
                height={100}
              />
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.category}</p>

              <div>
                <button
                  disabled={quantity <= 0}
                  onClick={() => setQuantity((quantity) => quantity - 1)}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  disabled={item.quantity <= quantity}
                  onClick={() => setQuantity((quantity) => quantity + 1)}
                >
                  +
                </button>
              </div>

              <br />
              <div>
                <button onClick={addToCart}>add to Cart</button>
                <Link to={`/itemdetails/${item._id}/${quantity}`}>
                  <button>checkout</button>
                </Link>
              </div>
            </div>
            <br />
            <br />

            {checkUserRole === 'customer' && checkUserRole ? (
              <CommentsForm itemId={item._id} />
            ) : null}
            {item.comments.map((comment) => (
              <DisplayComments comment={comment} key={comment._id} />
            ))}
          </>
        ) : (
          <h1>item not exist</h1>
        )}
      </div>
    </>
  )
}

export default ItemDetails
