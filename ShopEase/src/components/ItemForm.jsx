import { useState } from 'react'
import { createItem } from '../services/AdminItem'
import { useNavigate, useParams } from 'react-router-dom'
import { editItem } from '../services/item'
const ItemForm = ({text}) => {
  let navigate = useNavigate()

  let {itemId}=useParams()
  const initialState = {
    image: 'default-img',
    name: '',
    price: '',
    costPrice: '',
    quantity: '',
    description: '',
    category: 'man'
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    if(e.target.name==="image"){
      setFormValues({...formValues,image:e.target.files[0]})
    }
    else
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData=new FormData() 
    formData.append("name",formValues.name)
    formData.append("description",formValues.description)
    formData.append("category",formValues.category)
    formData.append("price",parseInt(formValues.price))
    formData.append("costPrice",parseInt(formValues.costPrice))
    formData.append("quantity",parseInt(formValues.quantity))
    formData.append("image",formValues.image)

    if(itemId){
      await editItem(itemId,formData)
    }else{
      await createItem(formData)
    }


    setFormValues(initialState)
    // navigate('/adminitems')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div>
            <label htmlFor="name">Item Name</label>
            <input
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Item Name"
              value={formValues.name}
              required
              autoComplete="name"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <br />
            {/* <input
              onChange={handleChange}
              id="description"
              type="text"
              placeholder="Description"
              value={formValues.description}
              required
              autoComplete="description"
              name="description"
            /> */}

            <textarea
              onChange={handleChange}
              value={formValues.description}
              required
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Desc..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input
              onChange={handleChange}
              id="price"
              type="number"
              min={0}
              value={formValues.price}
              required
              autoComplete="price"
              name="price"
            />
          </div>

          <div>
            <label htmlFor="costPrice">Cost per unit </label>
            <input
              onChange={handleChange}
              id="costPrice"
              type="number"
              min={0}
              value={formValues.costPrice}
              required
              autoComplete="costPrice"
              name="costPrice"
            />
          </div>

          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              onChange={handleChange}
              id="quantity"
              type="number"
              min={0}
              value={formValues.quantity}
              required
              autoComplete="quantity"
              name="quantity"
            />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              onChange={handleChange}
              value={formValues.category}
            >
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="kids">Kids</option>
            </select>
          
          </div>
          <div>
            <input 
            type="file"
             name="image"
              id="image"
              accept='image/*'
               onChange={handleChange}  
               />
          </div>
          <button>{text}</button>
        </form>
      </div>
    </>
  )
}
export default ItemForm
