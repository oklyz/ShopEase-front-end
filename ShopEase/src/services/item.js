import Client from "./api"

export const GetItems = async () => {
  try{
    const res = await Client.get("/item")
    return res.data
  } catch (error) {
    throw error
  }
}
export const getItemById=async (itemId)=>{
  try {
        const res=await Client.get(`/item/${itemId}`)
    return res.data
  } catch (error) {
    throw error
  }

  }

  export const deleteItem=async(itemId)=>{
    try {
      await Client.delete(`/item/${itemId}`)
    } catch (error) {
      throw error
    }
  }
  export const editItem=async(itemId,data)=>{
    try {
      await Client.put(`/item/${itemId}`,data)
      
    } catch (error) {
      throw error
    }
  }