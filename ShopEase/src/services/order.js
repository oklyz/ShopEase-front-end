import Client from './api'

export const getUserOrders = async (data) => {
  try {
    const res = await Client.get(`/order/user/${data}`)

    return res.data
  } catch (error) {
    return null
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
