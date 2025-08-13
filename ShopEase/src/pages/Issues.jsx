import { useEffect, useState } from 'react'
import { getIssues } from '../services/issue'

const Issues = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const getAllIssues = async () => {
      const allIssues = await getIssues()

      setIssues(allIssues)
    }
    getAllIssues()
  }, [])

  issues.length > 0 && console.log(issues)

  return (
    <>
      {issues.length > 0 ? (
        <div className="issues-container">
          {issues.map((issue) => (
            <div className="cookie-card" key={issue._id}>
              <span className="title">🍪 {issue.subject}</span>
              <p className="description">{issue.description}</p>
              <div className="actions">
                <span>Order ID:</span>
                <button className="pref">{issue.order}</button>
                {/* <button className="accept">Accept</button> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div>No Issues...</div>
        </>
      )}
    </>
  )
}
export default Issues
