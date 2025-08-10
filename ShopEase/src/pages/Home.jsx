import Search from "../components/Search"
import { useState, useEffect } from "react"
import { GetItems } from "../services/item"
import Items from "../components/Items"

const Home = () => {
  
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState()
  const [getitem, setGetItem] = useState([])
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    const handleItems = async () => {
      const data = await GetItems()
      setGetItem(data)
    }
    handleItems()
  },[])
  
  const filterArray = (array) => {
    let newArray = array
    const filtered = newArray.filter((data) => {
      return data.name === search
    })
    return filtered
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSearchResult(filterArray(getitem))
    setSearch("")
    setToggle(true)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  
  searchResult && console.log(searchResult)
  return(
    <>
    <div>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
    {toggle ? (
      <div>
        {searchResult.map((item) => (
          <Items item={item} key={item._id}/>
        ))}
      </div>
    ) : (
      <div>
      {getitem.map((item) => (
        <Items item={item} key={item._id}/>
      ))}
    </div>
    )}
    </>
  )
}

export default Home