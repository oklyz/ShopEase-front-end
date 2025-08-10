import { createContext, useState } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // user structure will be like this:
  // user = {
  //   id: user._id,
  //   email: user.email,
  //   role: user.role
  // }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
