import Client from './api'

export const createAddress = async (data) => {
  try {
    const res = await Client.post('/address', data)
    
  } catch (error) {
    throw error
  }
}
