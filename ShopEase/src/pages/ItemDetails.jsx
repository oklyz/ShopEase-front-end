import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItemById } from "../services/item"
const ItemDetails = () => {

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
</>) :

<h1>item not exist</h1>}

</div>
    </>
  )
}

export default ItemDetails