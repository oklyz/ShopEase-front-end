import { UserInfo } from '../services/Auth'
import { useState, useEffect } from 'react'

const DisplayComments = ({ comment }) => {
  const [UserData, setUserData] = useState(null)

  useEffect(() => {
    const getDataUser = async () => {
      const dataUser = await UserInfo(comment.userId)
      setUserData(dataUser)
    }
    getDataUser()
  }, [])
  return (
    <>
      {UserData ? (
        <>
          <div>
            <h2>Name :{UserData.name}</h2>
            <h2>Description: {comment.description}</h2>
            <h4>Rate: {comment.rate}</h4>
          </div>
        </>
      ) : (
        <>loading...</>
      )}
    </>
  )
}
export default DisplayComments
