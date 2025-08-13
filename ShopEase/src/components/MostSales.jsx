import { useEffect, useState } from 'react'
import { GetItems } from '../services/item'
import Items from './Items'

const MostSales = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    const getItem = async () => {
      const data = await GetItems()
      setItem(data)
    }
    getItem()
  }, [])

  const sortedArray = (item) => {
    let newArray = item
    const sortedArray = newArray.sort((a, b) => {
      return b.numberOfSold - a.numberOfSold
    })
    return sortedArray
  }

  const sortedItem = sortedArray(item)

  return (
    <>
      {sortedItem.map((item) => (
        <Items item={item} key={item._id} />
      ))}
    </>
  )
}

export default MostSales
