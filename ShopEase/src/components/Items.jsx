import {Link} from 'react-router-dom'
const Items = ({ item }) => {
  
  return(
    <>
    <Link className='item-detail-link' to= {`/itemdetails/${item._id}`}>
    
          <div>
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
        <h3>quantity: {item.quantity}</h3>
        <img src={`${item.image}`} alt={`${item.image}`} />
      </div>
    </Link>

    </>
  )
}

export default Items