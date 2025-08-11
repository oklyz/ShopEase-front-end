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

  items.length > 0 && console.log(items)

  return (
    <>
      <div>
        <Link className="dark-btn" to="/adminitems/new">
          {' '}
          add new product
        </Link>
      </div>
      <br />
      <br />
      <div>
        {items.length > 0 ? (
          <>
            {items.map((item) => {
              return <AdminItemDetails key={item._id} item={item} />
            })}
          </>
        ) : (
          <>
            <div>no Items!</div>
          </>
        )}
      </div>
    </>
  )
}
export default AdminItems
