import UserContext from '../contexts/UserContext'
import { UserInfo } from '../services/Auth'
import { useEffect, useContext, useState } from 'react'
import OrderList from '../components/OrderList'
const Profile = () => {
  const [UserData, setUserData] = useState(null)

  const { user } = useContext(UserContext)

  useEffect(() => {
    const getDataUser = async () => {
      const dataUser = await UserInfo(user.id)
      setUserData(dataUser)
    }
    user && getDataUser()
  }, [user])

  return (
    <>
      <div className="UserProfile">
        {UserData ? (
          <>
            <img
              src={UserData.image}
              alt="User Profile"
              width={100}
              height={100}
            />
            <h1>User: {UserData.name}</h1>
            <h1>e-mail: {UserData.email}</h1>
          </>
        ) : null}
      </div>

      <OrderList />
    </>
  )
}

export default Profile
