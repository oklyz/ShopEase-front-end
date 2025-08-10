const Search = ({ handleChange, handleSubmit }) => {
  
  return(
    <>
      <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" name="search" onChange={handleChange} className="search-in"/>
          <button className="search-but">Search</button>
        </form>
      </div>
    </>
  )
}

export default Search