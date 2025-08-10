const Items = ({ item }) => {
  
  
  return(
    <>
      <div>
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
        <h3>quantity: {item.quantity}</h3>
        <img src={`${item.image}`} alt={`${item.image}`} />
      </div>
    </>
  )
}

export default Items