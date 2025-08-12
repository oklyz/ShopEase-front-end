import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../services/item'
import { createOrder } from '../services/order'
import { createAddress } from '../services/address'
import UserContext from '../contexts/UserContext'

const Checkout = () => {
  const { itemId, quantity } = useParams()
  const [overall, setOverall] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const getItem = async () => {
      const itemById = await getItemById(itemId)
      setOverall({
        itemId: itemById._id,
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



  const initialState = {
    paymentMethod: 'creditCard',
    country: '',
    city: '',
    block: '',
    street: '',
    building: '',
    phone: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createAddress({
      country: formValues.country,
      city: formValues.city,
      block: formValues.block,
      street: formValues.street,
      building: formValues.building,
      phone: formValues.phone,
      userId: user.id
    })
    await createOrder({
      userId: user.id,
      itemIds: overall.itemId,
      paymentMethod: formValues.paymentMethod,
      quantityOrder: overall.quantityOrdered
    })
    setFormValues(initialState)
    // navigate('/login')
  }

  return (
    <>
      <div>
        {overall ? (
          <>
            <div>
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
            </div>
            <div>
              <h2>fill the form:</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="paymentMethod">payment method </label>
                  <select
                    name="paymentMethod"
                    id="paymentMethod"
                    onChange={handleChange}
                  >
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
                <br />
                <br />
                <div>
                  <div>
                    <label htmlFor="country">Country </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="block">Block </label>
                    <input
                      type="text"
                      name="block"
                      id="block"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="street">Street </label>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="building">Building </label>
                    <input
                      type="text"
                      name="building"
                      id="building"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <button>place order</button>
                </div>
              </form>
              <br />
              <br />
            </div>
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
