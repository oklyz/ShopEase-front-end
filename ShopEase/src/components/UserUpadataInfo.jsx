import { useContext } from 'react'
import { useRef } from 'react'
import { UserUpdata } from '../services/Auth'
import UserContext from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
const UserUpadataInfo = () => {
  const { user } = useContext(UserContext)
  const redirect = useNavigate()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const image = useRef(null)
  const addresses = useRef(null)
  let payload = {}

  const handleSubmit = (e) => {
    e.preventDefault()
    const Issue = async (data) => {
      await UserUpdata(data)
    }

    payload = {
      _id: user.id,
      name: name,
      email: email,
      passwordDigest: password,
      image: image,
      addresses: addresses
    }
    payload && Issue(payload)
    alert('The issue send to the admin ')
    redirect('/')
  }
  return (
    <>
      <h1>user updata</h1>
    </>
  )
}

export default UserUpadataInfo
