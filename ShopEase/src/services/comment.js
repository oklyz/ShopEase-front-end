import Client from "./api"

export const CreateComment = async (data) => {
  try {
    const res = Client.post("/comment/new", data)
    return res.data
    
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (commentId) => {
  try {
    await Client.delete(`/comment/delete/${commentId}`)
  } catch (error) {
    
  }
}