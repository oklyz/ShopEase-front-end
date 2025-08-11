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

    </>
  )
}

export default ItemDetails