import Client from './api'

export const createIssueContact = async (data) => {
  try {
    const res = await Client.post('/contact/new/', data)
    return res.data
  } catch (error) {
    throw error
  }
}
