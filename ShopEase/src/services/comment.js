import Client from "./api"

export const CreateComment = async (data) => {
  try {
    const res = Client.post("/comment", data)
    return res.data
    
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (commentId) => {
  try {
    await Client.delete(`/comment/${commentId}`)
  } catch (error) {
    
  }
}