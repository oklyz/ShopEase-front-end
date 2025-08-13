import Search from '../components/Search'
import { useState, useEffect } from 'react'
import { GetItems } from '../services/item'
import Items from '../components/Items'
import MostSales from '../components/MostSales'
const Home = () => {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState()
  const [getitem, setGetItem] = useState([])
  const [toggleSearch, setToggleSearch] = useState(false)
  const [toggleMostSales, setToggleMostSales] = useState(false)
  useEffect(() => {
    const handleItems = async () => {
      const data = await GetItems()
      setGetItem(data)
    }
    handleItems()
  }, [])

  if (!getitem) {
    return <h1>loding ...</h1>
  }

  const filterArray = (array) => {
    let newArray = array
    const filtered = newArray.filter((data) => {
      return data.name.toLowerCase().includes(search.toLowerCase())
    })
    return filtered
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSearchResult(filterArray(getitem))
    setSearch('')
    setToggleSearch(true)
  }

  const handleSubmitMostSales = async () => {
    setToggleSearch(false)
    setToggleMostSales(!toggleMostSales)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

 
  return (
    <>
      <div>
        <Search handleChange={handleChange} handleSubmit={handleSubmit} search={search}/>
      </div>
      <div>
        <button onClick={handleSubmitMostSales}>MostSales</button>
      </div>
      {toggleSearch ? (
        <div>
          {searchResult.map((item) => (
            <Items item={item} key={item._id} />
          ))}
        </div>
      ) : (
        <div>
          {toggleMostSales ? (
            <>
            <MostSales handleSubmitMostSales={handleSubmitMostSales}/>
            </>
          ) : 
          <>
          {getitem.map((item) => (
            <Items item={item} key={item._id} />
          ))}
          </>
          }
        </div>
      )}
    </>
  )
}

export default Home
