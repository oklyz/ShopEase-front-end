import Client from './api'

export const getIssues = async () => {
  try {
    const res = await Client.get('/contact')
    return res.data
  } catch (error) {
    throw error
  }
}
export const countIssues = async () => {
  try {
    const res = await Client.get('/contact/countissues')
    return res.data
  } catch (error) {
    throw error
  }
}
export const createIssue = async (data) => {
  try {
    await Client.post('/contact', data)
  } catch (error) {
    throw error
  }
}