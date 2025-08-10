const AdminItemDetails = ({ item }) => {
  return (
    <>
      <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </div>
    </>
  )
}
export default AdminItemDetails
