import { useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import UserContext from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { UserInfo, UserUpdata } from '../services/Auth'
import UserAddresses from './UserAddresses'
import { BASE_URL } from '../services/api'
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

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const ConformpasswordRef = useRef(null)
  const imageRef = useRef(null)
  let payload = {}

  const handleSubmit = (e) => {
    e.preventDefault()

    const updata = async (userId, data) => {
      await UserUpdata(userId, data)
    }
    if (passwordRef.current.value !== ConformpasswordRef.current.value) {
      alert('password not match!')
    } else {
      payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        image: imageRef.current.files[0]
      }
      payload && updata(user.id, payload)
      alert('The user updata')
      redirect('/')
    }
  }

  return (
    <>
      {UserData ? (
        <>
          <div className="fromupdata"></div>
          <div className="fromupdata">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">name :</label>
              <input
                id="name"
                name="name"
                placeholder={UserData && UserData.name}
                ref={nameRef}
                required
              ></input>
              <br></br>
              <label htmlFor="email">email : </label>
              <input
                id="email"
                name="email"
                placeholder={UserData && UserData.email}
                ref={emailRef}
                required
              ></input>
              <br></br>
              <label htmlFor="password">password :</label>
              <input
                type="password"
                id="passwordRef"
                name="passwordRef"
                ref={passwordRef}
                required
              ></input>
              <br></br>
              <label htmlFor="ConformpasswordRef">Conform password :</label>
              <input
                type="password"
                id="ConformpasswordRef"
                name="ConformpasswordRef"
                ref={ConformpasswordRef}
                required
              ></input>
              <label htmlFor="image">image :</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                ref={imageRef}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="userAddressUpdata">
            {UserData.addresses.length > 0 ? (
              <UserAddresses addresses={UserData.addresses} />
            ) : (
              <h2>No addresses</h2>
            )}
          </div>
        </>
      ) : (
        <>
          <div>loading..</div>
        </>
      )}
    </>
  )
}

export default UserUpadataInfo
