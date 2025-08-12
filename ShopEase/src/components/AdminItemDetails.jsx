import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/api'
import { deleteItem } from '../services/item'
import { Link } from 'react-router-dom'
import ItemForm from './ItemForm'
const AdminItemDetails = ({ item }) => {
  let navigate=useNavigate()
  const handleDelete= async ()=>{
    deleteItem(item._id)
    navigate("/")
  }
  
  return (
    <>
      <div>
        <img
          src={`${BASE_URL}/images/${item.image}`}
          alt="no image"
          width={100}
          height={100}
        />
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
        <button onClick={handleDelete} >Delete Item </button>
        <Link to={`/adminitems/edit/${item._id}`}>
        <button>Edit</button>
        </Link>
      </div>
    </>
  )
}
export default AdminItemDetails
