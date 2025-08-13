import UserContext from '../contexts/UserContext'
import { UserInfo } from '../services/Auth'
import { useEffect, useContext, useState } from 'react'
import OrderList from '../components/OrderList'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/api'
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
    <div className="main-profile">
      <div className="UserProfile">
        {UserData ? (
          <>
            <Link to="/user-updata">
              <img
                src={`${BASE_URL}${UserData.image}`}
                alt="User Profile"
                width={100}
                height={100}
              />
            </Link>

            <h1>User: {UserData.name}</h1>
            <h1>e-mail: {UserData.email}</h1>
          </>
        ) : null}
      </div>

      <OrderList />
    </div>
  )
}

export default Profile
