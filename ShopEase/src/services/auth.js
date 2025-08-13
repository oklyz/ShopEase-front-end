import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}
export const UserInfo = async (data) => {
  try {
    const res = await Client.get(`/auth/${data}`)
    // Set the current signed in users token to localStorage

    return res.data
  } catch (error) {
    throw error
  }
}
export const UserUpdata = async (userId, data) => {
  try {
    const res = await Client.put(`/auth/${userId}`, data)
    // Set the current signed in users token to localStorage

    return res.data
  } catch (error) {
    throw error
  }
}

export const countUsers = async () => {
  try {
    const res = await Client.get('/auth/countusers')

    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
