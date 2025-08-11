import Client from './api'

export const createAddress = async (data) => {
  try {
    const res = await Client.post('/address/new', data)
    console.log(res.data)
  } catch (error) {
    throw error
  }
}
