import Search from "../components/Search"
import { useState, useEffect } from "react"
import { GetItems } from "../services/item"

const Home = () => {
  
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState()
  
  useEffect(() => {
    GetItems()
  },[])

  console.log(GetItems())

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchResult(search)
    setSearch("")
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  

  return(
    <>
    <div>
      <Search handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
    </>
  )
}

export default Home