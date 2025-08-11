import { useContext, useState } from "react"
import { CreateComment } from "../services/comment"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"

const Comment = ({itemId}) => {
  const { user } = useContext(UserContext)
  let navigate = useNavigate()
  const initialState = {
    description: "",
    rate: 0,
    userId: user.id,
    itemId: itemId 
  }

  const [formvalues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formvalues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    CreateComment(formvalues)
    setFormValues(initialState)
    navigate(`/itemdetails/${itemId}`)
  }

  return(
    <>
      <div className="comment-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="desciption">
            <input 
            type="text" 
            name="description" 
            onChange={handleChange} 
            value={formvalues.description} 
            required/>
          </label>
          <label htmlFor="rate">
            <input 
            min={0}
            max={5}
            type="number" 
            name="rate" 
            onChange={handleChange} 
            value={formvalues.rate} 
            required/>
          </label>
          <button className="comment-button">Send</button>
        </form>
      </div>
    </>
  )
}

export default Comment