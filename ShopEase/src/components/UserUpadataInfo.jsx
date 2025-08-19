import { useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import UserContext from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { UserInfo, UserUpdata } from '../services/Auth'
import UserAddresses from './UserAddresses'
import { BASE_URL } from '../globals'
const UserUpadataInfo = () => {
    let redirect = useNavigate()
  const [UserData, setUserData] = useState(null)
  const [strongPasswordMsg,setStrongPasswordMsg]=useState(false)
  const [matchPasswordMsg,setMatchPasswordMsg]=useState(false)
const [flag,setFlag]=useState(false)
  
let passwordRegex=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)

  const strongPasswordValidation=async (password)=>{
    if(password.match(passwordRegex)){
      setStrongPasswordMsg(false)
    }
    else{
      setStrongPasswordMsg(true)
    }
  }
  const matchPasswordValidation=async(password,confirmPassword)=>{
    if(password===confirmPassword){
      setMatchPasswordMsg(false)
    }
    else{
      setMatchPasswordMsg(true)
    }
  }


  const { user } = useContext(UserContext)

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
    const validation=async()=>{
     await strongPasswordValidation(passwordRef.current.value)
    await matchPasswordValidation(passwordRef.current.value,ConformpasswordRef.current.value)
    setFlag(true)
    }
    validation()
if(flag){
  
     if(!strongPasswordMsg && !matchPasswordMsg)
{  

    payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        image: imageRef.current.files[0]
      }
      payload && updata(user.id, payload)
              redirect('/')

    }
}

  

    
  }

  return (
    <>
      {UserData ? (
        <>
          <div className="fromupdata">
            <form onSubmit={handleSubmit}>
              <img
                src={`${BASE_URL}${UserData.image}`}
                alt="User Profile"
                className="profileImage"
              />
              <br />
              <label htmlFor="image">image : </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                ref={imageRef}
                required
              />

              <br />
              <label htmlFor="name">name : </label>
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
              <label htmlFor="password">password : </label>
              <input
                type="password"
                id="passwordRef"
                name="passwordRef"
                ref={passwordRef}
                required
              ></input>
              <br></br>
              <label htmlFor="ConformpasswordRef">Conform password : </label>
              <input
                type="password"
                id="ConformpasswordRef"
                name="ConformpasswordRef"
                ref={ConformpasswordRef}
                required
              ></input>
              <button type="submit"> Submit</button>
             <h5>{strongPasswordMsg  ? "your password is weak try adding lower,uppercase numbers and special charcter and it is 8 charcter": null}</h5>
             <h5>{matchPasswordMsg ? "your password does not match": null }</h5>
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
