import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/api'
import { deleteItem } from '../services/item'
import { Link } from 'react-router-dom'
import ItemForm from './ItemForm'
const AdminItemDetails = ({ item }) => {
  let navigate = useNavigate()
  const handleDelete = async () => {
    deleteItem(item._id)
    navigate('/')
  }

  return (
    <>
      <div className="admin-item-card">
        <img
          src={`${BASE_URL}/images/${item.image}`}
          alt="no image"
          width={100}
          height={100}
        />
        <h1 className="admin-item-title">{item.name}</h1>
        <p className="admin-item-desc">{item.description}</p>
        <p className="admin-item-price">${item.price}</p>
        <p className="admin-item-qty">quantity: {item.quantity}</p>
        <div className="admin-item-actions">
          <button onClick={handleDelete}>Delete Item</button>
          <Link to={`/adminitems/edit/${item._id}`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default AdminItemDetails
