import { useEffect, useState } from 'react'
import { countUsers } from '../services/auth'
import { countIssues } from '../services/issue'
import { GetItems } from '../services/item'

const Dashboard = () => {
  const [countCustomers, setCountCustomers] = useState(0)
  const [countCustomerIssues, setCountCustomerIssues] = useState(0)
  const [items, setItems] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalProfit, setTotalProfit] = useState(0)

  useEffect(() => {
    const countAllUser = async () => {
      const allUser = await countUsers()
      setCountCustomers(allUser)
    }

    const countAllIssues = async () => {
      const allIssues = await countIssues()
      setCountCustomerIssues(allIssues)
    }

    // array of objects and each object consist of item info, item revenue, item cost, and item profit
    const getAllItem = async () => {
      const allItem = await GetItems()
      let dashItems = allItem.map((item) => {
        return {
          _id: item._id,
          name: item.name,
          description: item.description,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
          numberOfSold: item.numberOfSold,
          costPrice: item.costPrice,
          revenue: item.numberOfSold * item.price,
          cost: item.costPrice * item.numberOfSold,
          profit:
            item.numberOfSold * item.price - item.costPrice * item.numberOfSold
        }
      })
      // set the array in items state
      setItems(dashItems)
    }

    // return the total revenue of all items
    const getTotalRevenue = () => {
      const revenue = items.reduce((total, item) => {
        return total + item.revenue
      }, 0)
      setTotalRevenue(revenue)
    }

    // return the total cost of all items
    const getTotalCost = () => {
      const cost = items.reduce((total, item) => {
        return total + item.cost
      }, 0)
      setTotalCost(cost)
    }

    // return the total profit od all items
    const getTotalProfit = () => {
      const profit = items.reduce((total, item) => {
        return total + item.profit
      }, 0)
      setTotalProfit(profit)
    }

    getAllItem()
    countAllUser()
    countAllIssues()

    items.length > 0 && getTotalRevenue()
    items.length > 0 && getTotalCost()
    items.length > 0 && getTotalProfit()
  }, [items])

  return (
    <>
      <div>Dashboard...</div>
      <h2>number of users: {countCustomers ? countCustomers : 0}</h2>

      <h2>number of Issues: {countCustomerIssues ? countCustomerIssues : 0}</h2>
      <h2>total revenue: {totalRevenue ? totalRevenue : 0}</h2>
      <h2>total cost: {totalCost ? totalCost : 0}</h2>
      <h2>total profit: {totalProfit ? totalProfit : 0}</h2>

      <br />
      <br />

      <div>
        <h1>each Item profit:</h1>
        {items.length > 0
          ? items.map((item, index) => (
              <div key={item._id}>
                <p>
                  {index + 1}- item name: <b>{item.name}</b>{' '}
                  <span>
                    {' '}
                    and profit: <b>{item.profit}</b>
                  </span>
                </p>
              </div>
            ))
          : null}
      </div>
    </>
  )
}

export default Dashboard
