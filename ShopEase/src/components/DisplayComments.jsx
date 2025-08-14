import UserContext from '../contexts/UserContext'
import { UserInfo } from '../services/Auth'
import { useState, useEffect, useContext } from 'react'
import { DeleteComment } from '../services/comment'
const DisplayComments = ({ comment }) => {
  const [UserData, setUserData] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const getDataUser = async () => {
      const dataUser = await UserInfo(comment.userId)
      setUserData(dataUser)
    }
    getDataUser()
  }, [])

  const handleClick = () => {
    DeleteComment(comment._id)
  }

  return (
    <div className="DisplayComments">
      {UserData ? (
        <>
          <div>
            <h2>Name :{UserData.name}</h2>
            <h2>Description: {comment.description}</h2>
            <h4>Rate: {comment.rate}</h4>
            {comment.userId === user.id ?(
              <>
              <button onClick={handleClick}>Delete</button>
              </>
            ): null} 
          </div>
        </>
      ) : (
        <>loading...</>
      )}
    </div>
  )
}
export default DisplayComments
