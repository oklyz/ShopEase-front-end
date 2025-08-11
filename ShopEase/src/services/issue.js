import Client from './api'

export const getIssues = async () => {
  try {
    const res = await Client.get('/contact')
    return res.data
  } catch (error) {
    throw error
  }
}
export const createIssue = async (data) => {
  try {
    await Client.post('/contact/new', data)
  } catch (error) {
    throw error
  }
}
