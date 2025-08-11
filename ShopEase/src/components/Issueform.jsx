import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import { createIssue } from '../services/Issue'
import UserContext from '../contexts/UserContext'

const Issueform = () => {
  const { user } = useContext(UserContext)
  const { orderId } = useParams()
  const descriptionRef = useRef(null)
  const subjectRef = useRef(null)
  let payload = {}

  const handleSubmit = (e) => {
    e.preventDefault()
    const Issue = async (data) => {
      await createIssue(data)
    }
    payload = {
      subject: subjectRef.current.value,
      description: descriptionRef.current.value,
      order: orderId,
      userId: user.id
    }
    console.log(payload)
    payload && Issue(payload)
  }

  return (
    <>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <select id="subject" name="subject" ref={subjectRef}>
          <option value="">Select a subject</option>
          <option value="Damage item ">Damage item </option>
          <option value="Bag Package">Bag Package</option>
        </select>
        <br></br>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          ref={descriptionRef}
          required
          rows="5"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Issueform
