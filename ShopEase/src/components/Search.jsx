const Search = ({ handleChange, handleSubmit, search }) => {
  return (
    <>
      {/* <div className="search-container"> */}
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="srch-div">
          <input
            type="text"
            name="search"
            onChange={handleChange}
            className="search-in"
            value={search}
          />
        </div>
        <div className="bbtn-div">
          <button id="sss" className="search-button">Search</button>
        </div>
      </form>
      {/* </div> */}
    </>
  )
}

export default Search
