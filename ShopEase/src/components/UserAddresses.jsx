const UserAddresses = ({ addresses }) => {
  console.log(addresses)
  return (
    <>
      {addresses.map((addresse) => (
        <div>
          <h3>Country: {addresse.country}</h3>
          <h3>City: {addresse.city}</h3>
          <h3>Block: {addresse.block}</h3>
          <h3>Street: {addresse.street}</h3>
          <h3>Building: {addresse.building}</h3>
          <h3>Phone: {addresse.phone}</h3>
        </div>
      ))}
    </>
  )
}
export default UserAddresses
