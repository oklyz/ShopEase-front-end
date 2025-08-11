<<<<<<< HEAD
import { useParams } from 'react-router-dom'
=======
import { useParams, Link } from 'react-router-dom'
>>>>>>> a77a09df0b2c95fd8fd3b80e338fadc54d9de414
import { useEffect, useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { getItemById } from '../services/item'
import CommentsForm from '../components/CommentsForm'
import DisplayComments from '../components/DisplayComments'
<<<<<<< HEAD
import { BASE_URL } from '../services/api'
=======
>>>>>>> a77a09df0b2c95fd8fd3b80e338fadc54d9de414

const ItemDetails = () => {
  let { itemId } = useParams()
  const { user } = useContext(UserContext)
  const [item, setItem] = useState(null)
  let [quantity, setQuantity] = useState(0)
  let checkUserRole
  user ? (checkUserRole = user.role) : (checkUserRole = true)
  console.log(itemId)

  useEffect(() => {
    const getItemDetails = async () => {
      const itemdetails = await getItemById(itemId)
      setItem(itemdetails)
    }
    getItemDetails()
  }, [])

<<<<<<< HEAD
  item && console.log(item.comments[0])
  console.log(user)
  return (
    <>
      <div key={itemId}>
        {item ? (
          <>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.category}</p>
            <img src={`${BASE_URL}/images/${item.image}`} alt="itemImage" />
            {console.log(item.image)}
            {checkUserRole === 'customer' && checkUserRole ? (
              <CommentsForm itemId={item._id} />
            ) : null}
=======
  return (
    <>
      <div>
        {item ? (
          <>
            <div>
              <img
                src={`http://localhost:3001/images/${item.image}`}
                alt="itemImage"
              />
              {console.log(item.image)}
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.category}</p>
>>>>>>> a77a09df0b2c95fd8fd3b80e338fadc54d9de414

              <div>
                <button onClick={() => setQuantity((quantity) => quantity - 1)}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((quantity) => quantity + 1)}>
                  +
                </button>
              </div>

              <br />
              <div>
                <button>add to Cart</button>

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
