import { useParams } from "react-router-dom"
import { useEffect, useState,useContext } from "react"
import UserContext from "../contexts/UserContext"
import { getItemById } from "../services/item"
import Comment from "../components/Comments"
const ItemDetails = () => {
const {user}=useContext(UserContext)
  let {itemId} = useParams()
  console.log(itemId)

  const [item,setItem]=useState()
useEffect(()=> {
  const getItemDetails=async()=>{
    const itemdetails= await getItemById(itemId)  
  setItem(itemdetails)

  }
getItemDetails()
},[])


  return(
    
    <>
<div>
{item ? (<>
<h1>{item.name}</h1>
<h2>{item.description}</h2>
<p>{item.price}</p>
<p>{item.quantity}</p>
<p>{item.category}</p>
<img src={item.image} alt="itemImage" />
{user.role==='customer' ? (<Comment itemId={item._id}/>) :null}
</>) :

<h1>item not exist</h1>}

</div>
    </>
  )
}

export default ItemDetails