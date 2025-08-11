import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import { getItemById } from "../services/item"
import CommentsForm from "../components/CommentsForm"
import DisplayComments from "../components/DisplayComments"
import {BASE_URL} from "../services/api"

const ItemDetails = () => {
  const { user } = useContext(UserContext)
  let { itemId } = useParams()

  let checkUserRole
  user? checkUserRole=user.role : checkUserRole=true
  console.log(itemId)

  const [item, setItem] = useState(null)
  useEffect(() => {
    const getItemDetails = async () => {
      const itemdetails = await getItemById(itemId)
      setItem(itemdetails)
    }
    getItemDetails()
  }, [item])

  item && console.log(item.comments[0])
    console.log(user)
  return (
    <>
<div key={itemId}>
{item ? (<>
<h1>{item.name}</h1>
<h2>{item.description}</h2>
<p>{item.price}</p>
<p>{item.quantity}</p>
<p>{item.category}</p>
<img src={`${BASE_URL}/images/${item.image}`} alt="itemImage" />
{console.log(item.image)}
{user.role==='customer' ? (<CommentsForm itemId={item._id}/>) :null}

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
