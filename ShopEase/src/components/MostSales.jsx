import { useEffect, useState } from "react"
import { GetItems } from "../services/item"
import Items from "./Items"

const MostSales = () => {
  
  const [item, setItem] = useState([])

  useEffect(()=> {
    const getItem = async () => {
      const data = await GetItems()
      setItem(data)
    }
    getItem()
  },[])
  
  item &&console.log(item)
  
  return(
    <>
      <h1>MostSales</h1>
      {item.map((item) => (
            <Items item={item} key={item._id} />
      ))}
    </>
  )
}

export default MostSales