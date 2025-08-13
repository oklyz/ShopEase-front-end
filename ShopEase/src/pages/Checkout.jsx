import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getItemById } from '../services/item'
import { createOrder } from '../services/order'
import { createAddress } from '../services/address'
import UserContext from '../contexts/UserContext'
import OrderOverallContext from '../contexts/OrderOverallContext'

const Checkout = () => {
  let navigate = useNavigate()
  const { itemId, quantity } = useParams()
  const { user } = useContext(UserContext)
  const { overall, setOverall } = useContext(OrderOverallContext)

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
  }, [itemId, quantity, setOverall])

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
    setOverall(null)
    navigate('/')
    
  }

  return (
    <>
      {overall ? (
        <div className="checkout-container">
     
          <div className="checkout-summary">
            <img
              src={`http://localhost:3001/images/${overall.image}`}
              alt="itemImage"
              width={150}
              height={150}
            />
            <p><strong>{overall.name}</strong></p>
            <p>Price: ${overall.price}</p>
            <p>Selected Quantity: {overall.quantityOrdered}</p>
            <p>Tax Amount: ${overall.taxAmount}</p>
            <p>Sub Total: ${overall.subTotal}</p>
            <p><strong>Total: ${overall.total}</strong></p>
          </div>

        
          <div className="checkout-form">
            <h2>Fill the form:</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="paymentMethod">Payment Method</label>
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  value={formValues.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={formValues.country}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formValues.city}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="block">Block</label>
                <input
                  type="text"
                  name="block"
                  id="block"
                  value={formValues.block}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  value={formValues.street}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="building">Building</label>
                <input
                  type="text"
                  name="building"
                  id="building"
                  value={formValues.building}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Place Order</button>
            </form>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default Checkout
