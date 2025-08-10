import { useContext, useState } from "react"
import { CreateComment } from "../services/comment"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"

const Comment = ({item}) => {
  const { user } = useContext(UserContext)
  let navigate = useNavigate()
  const initialState = {
    description: "",
    rate: 0,
    userId: user.id,
    itemId: item._id  
  }

  const [formvalues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formvalues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    CreateComment(formvalues)
    setFormValues(initialState)
    navigate("/itemdetails")
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
            type="number" 
            name="rate" 
            onChange={handleChange} 
            value={formvalues.rate} 
            required/>
          </label>
        </form>
      </div>
    </>
  )
}

export default Comment