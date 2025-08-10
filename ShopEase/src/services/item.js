import Client from "./api"

export const GetItems = async () => {
  try{
    const res = await Client.get("/item")
    return res.data
  } catch (error) {
    throw error
  }
}