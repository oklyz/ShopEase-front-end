import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../services/item'

const Checkout = () => {
  const { itemId, quantity } = useParams()
  const [overall, setOverall] = useState(null)

  useEffect(() => {
    const getItem = async () => {
      const itemById = await getItemById(itemId)
      setOverall({
        image: itemById.image,
        name: itemById.name,
        description: itemById.description,
        price: itemById.price,
        quantity: itemById.quantity,
        numberOfSold: itemById.numberOfSold,
        quantityOrdered: parseInt(quantity),
        tax: 10,
        subTotal: itemById.price * parseInt(quantity),
        taxAmount: itemById.price * parseInt(quantity) * 0.1,
        total:
          itemById.price * parseInt(quantity) +
          itemById.price * parseInt(quantity) * 0.1
      })
    }
    getItem()
  }, [itemId])

  overall && console.log(overall)

  return (
    <>
      <div>
        {overall ? (
          <>
            <img
              src={`http://localhost:3001/images/${overall.image}`}
              alt="itemImage"
              width={100}
              height={100}
            />
            <p>{overall.name}</p>
            <p>price: {overall.price}</p>
            <p>selected quantity: {overall.quantityOrdered}</p>
            <p>tax amount: ${overall.taxAmount}</p>
            <p>sub total: ${overall.subTotal}</p>
            <p>total: ${overall.total}</p>
          </>
        ) : (
          <>
            <h1>loading...</h1>
          </>
        )}
      </div>
    </>
  )
}
export default Checkout
