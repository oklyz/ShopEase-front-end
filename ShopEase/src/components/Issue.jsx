import { useParams } from 'react-router-dom'
import { useRef } from 'react'

const Issue = () => {
  const { orderId } = useParams()
  const descriptionRef = useRef(null)
  const subjectRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      subject: subjectRef.current.value,
      description: descriptionRef.current.value
    })
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

export default Issue
