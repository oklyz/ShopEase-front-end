import Client from './api'

export const createItem = async (data) => {
  try {
       const config = {headers: {'Content-Type': 'multipart/form-data'}}
    const res = await Client.post('/item/new', data,config)
    

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