import { useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import UserContext from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { UserInfo, UserUpdata } from '../services/Auth'
const UserUpadataInfo = () => {
  const [UserData, setUserData] = useState(null)

  const { user } = useContext(UserContext)
  const redirect = useNavigate()

  useEffect(() => {
    const userdata = async () => {
      const data = await UserInfo(user.id)
      setUserData(data)
    }
    user && userdata()
  }, [user])

  UserData && console.log(UserData)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const image = useRef(null)
  const addresses = useRef(null)
  let payload = {}

  const handleSubmit = (e) => {
    e.preventDefault()
    const updata = async (data) => {
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
    // payload && updata(payload)
    alert('The user updata')
    redirect('/')
  }
  return (
    <>
      <div className="fromupdata"></div>

      <div className="userAddressUpdata"></div>
    </>
  )
}

export default UserUpadataInfo
