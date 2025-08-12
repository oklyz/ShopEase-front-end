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
      const res=await Client.delete(`/item/delete/${itemId}`)
    } catch (error) {
      throw error
    }
  }