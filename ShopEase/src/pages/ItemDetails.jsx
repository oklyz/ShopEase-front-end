import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { getItemById } from '../services/item'
import CommentsForm from '../components/CommentsForm'
import DisplayComments from '../components/DisplayComments'

const ItemDetails = () => {
  let { itemId } = useParams()
  const { user } = useContext(UserContext)
  const [item, setItem] = useState(null)
  let [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const getItemDetails = async () => {
      const itemdetails = await getItemById(itemId)
      setItem(itemdetails)
    }
    getItemDetails()
  }, [])

  return (
    <>
      <div>
        {item ? (
          <>
            <div>
              <img src={item.image} alt="itemImage" />
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.category}</p>

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

                {/* <Link to={`/itemdetails/:quantity`}> <Link/> */}
                <Link to={`/itemdetails/${item._id}/${quantity}`}>
                  <button>checkout</button>
                </Link>
              </div>
            </div>
            <br />
            <br />
            {user.role === 'customer' ? (
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
