const UserAddresses = ({ addresses }) => {
  return (
    <>
      <div>
        <h3>{addresses._id}</h3>
        <h3>{addresses.country}</h3>
        <h3>{addresses.city}</h3>
        <h3>{addresses.block}</h3>
        <h3>{addresses.street}</h3>
        <h3>{addresses.building}</h3>
        <h3>{addresses.phone}</h3>
      </div>
    </>
  )
}
export default UserAddresses
