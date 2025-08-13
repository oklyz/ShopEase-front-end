import { useEffect, useState } from 'react'
import { countUsers } from '../services/Auth'
import { countIssues } from '../services/issue'
import { GetItems } from '../services/item'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

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
      <div className="dash-card">
        <div class="card">
          <div class="card-content">
            <p class="card-title">{countCustomers ? countCustomers : 0}</p>
            <p class="card-para">Customers</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="card-title">
              {countCustomerIssues ? countCustomerIssues : 0}
            </p>
            <p class="card-para">Issues</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="card-title">
              $ {totalProfit ? Math.abs(totalProfit) : 0}
            </p>
            <p class="card-para">
              {totalRevenue > totalCost ? 'Net Profit' : 'Net Loss'}
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="card-title">$ {totalRevenue ? totalRevenue : 0}</p>
            <p class="card-para">Revenues</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="card-title">$ {totalCost ? totalCost : 0}</p>
            <p class="card-para">Costs</p>
          </div>
        </div>
      </div>

      <div className="App">
        <div className="dataCard revenueCard">
          {items.length > 0 ? (
            <Line
              data={{
                // labels: revenueData.map((data) => data.label),
                labels: items.map((item) => item.name),
                datasets: [
                  {
                    label: 'Revenue',
                    data: items.map((item) => item.revenue),
                    backgroundColor: '#064FF0',
                    borderColor: '#064FF0'
                  },
                  {
                    label: 'Cost',
                    data: items.map((item) => item.cost),
                    backgroundColor: '#FF3030',
                    borderColor: '#FF3030'
                  }
                ]
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5
                  }
                },
                plugins: {
                  title: {
                    text: 'Monthly Revenue & Cost'
                  }
                }
              }}
            />
          ) : null}
        </div>

        <div className="dataCard customerCard">
          {items.length > 0 ? (
            <Bar
              data={{
                labels: items.map((item) => item.name),
                datasets: [
                  {
                    label: 'Count',
                    data: items.map((item) => item.quantity),
                    backgroundColor: [
                      'rgba(43, 63, 229, 0.8)',
                      'rgba(250, 192, 19, 0.8)',
                      'rgba(253, 135, 135, 0.8)'
                    ],
                    borderRadius: 5
                  }
                ]
              }}
              options={{
                plugins: {
                  title: {
                    text: 'Revenue Source'
                  }
                }
              }}
            />
          ) : null}
        </div>

        <div className="dataCard categoryCard">
          {items.length > 0 ? (
            <Doughnut
              data={{
                labels: items.map((item) => item.name),
                datasets: [
                  {
                    label: 'Quantity Item Sold',
                    data: items.map((item) => item.numberOfSold),
                    backgroundColor: [
                      'rgba(43, 63, 229, 0.8)',
                      'rgba(250, 192, 19, 0.8)',
                      'rgba(253, 135, 135, 0.8)'
                    ],
                    borderColor: [
                      'rgba(43, 63, 229, 0.8)',
                      'rgba(250, 192, 19, 0.8)',
                      'rgba(253, 135, 135, 0.8)'
                    ]
                  }
                ]
              }}
              options={{
                plugins: {
                  title: {
                    text: 'Revenue Sources'
                  }
                }
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Dashboard
