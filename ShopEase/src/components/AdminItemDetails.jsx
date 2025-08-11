import { BASE_URL } from '../services/api'

const AdminItemDetails = ({ item }) => {
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
      </div>
    </>
  )
}
export default AdminItemDetails
