import {Link} from 'react-router-dom'
import { BASE_URL } from '../services/api'
const Items = ({ item }) => {
  
  return(
    <>
    
          <div className='single-item'>
<Link className='item-detail-link' to= {`/itemdetails/${item._id}`}>
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
        <img src={`${BASE_URL}/images/${item.image}`} alt={`${item.image}`} width={200} height={200}/>
    </Link>
      </div>

    </>
  )
}

export default Items