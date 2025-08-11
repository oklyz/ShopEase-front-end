import { useParams } from "react-router-dom"

const Checkout = () => {
  const {itemId, quantity} = useParams()
  // console.log(`${itemId}   ${quantity}`)
  return  (
    <>
    <div>
      checkout
    </div>
    </>
  )
}
export default Checkout