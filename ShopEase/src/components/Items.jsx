import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'
const Items = ({ item }) => {
  return (
    <>
      <div className="single-item">
        <Link className="item-detail-link" to={`/itemdetails/${item._id}`}>
          <div className="img-div">
            <img
              src={`${BASE_URL}/images/${item.image}`}
              alt={`${item.image}`}
              width={200}
              height={200}
            />
          </div>
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Items
