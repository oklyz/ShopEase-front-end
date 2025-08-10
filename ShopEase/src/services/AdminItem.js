import Client from './api'

export const createItem = async (data) => {
  try {
    const res = await Client.post('/item/new', data)
    console.log(res)
  } catch (error) {
    throw error
  }
}

export const getItems = async () => {
  try {
    const res = await Client.get('/item')
    return res.data
  } catch (error) {
    throw error
    
  }
}