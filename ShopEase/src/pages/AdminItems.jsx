import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getItems } from '../services/AdminItem'
import AdminItemDetails from '../components/AdminItemDetails'

const AdminItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getAllItem = async () => {
      const allItems = await getItems()
      setItems(allItems)
    }
    getAllItem()
  }, [])

  return (
    <>
      <div className="admin-items-container">
        <div className="admin-items-header">
          <Link className="dark-btn" to="/adminitems/new">
            add new product
          </Link>
        </div>
        <div className="admin-items-list">
          {items.length > 0 ? (
            <>
              {items.map((item) => {
                return <AdminItemDetails key={item._id} item={item} />
              })}
            </>
          ) : (
            <div className="no-items-message">no Items!</div>
          )}
        </div>
      </div>
    </>
  )
}
export default AdminItems
