import { useParams } from 'react-router-dom'
const Issue = () => {
  const { orderId } = useParams()
  return (
    <>
      <h1>issue :{orderId}</h1>
    </>
  )
}

export default Issue
