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
          {/* {issues.map((issue) => {
            return (
              <div key={issue._id}>
                <p>{issue.subject}</p>
                <p>{issue.description}</p>
                <p>{issue.order}</p>
              </div>
            )
          })} */}

          <div className="cookie-card">
            <span className="title">🍪 Cookie Notice</span>
            <p className="description">
              We use cookies to ensure that we give you the best experience on
              our website Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, aperiam!
            </p>
            <div className="actions">
              <span>Order ID:</span>
              <button className="pref">GFREH46VG5G6BH49F56</button>
              {/* <button className="accept">Accept</button> */}
            </div>
          </div>
          <div className="cookie-card">
            <span className="title">🍪 Cookie Notice</span>
            <p className="description">
              We use cookies to ensure that we give you the best experience on
              our website Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, aperiam!
            </p>
            <div className="actions">
              <span>Order ID:</span>
              <button className="pref">GFREH46VG5G6BH49F56</button>
              {/* <button className="accept">Accept</button> */}
            </div>
          </div>
          <div className="cookie-card">
            <span className="title">🍪 Cookie Notice</span>
            <p className="description">
              We use cookies to ensure that we give you the best experience on
              our website Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, aperiam!
            </p>
            <div className="actions">
              <span>Order ID:</span>
              <button className="pref">GFREH46VG5G6BH49F56</button>
              {/* <button className="accept">Accept</button> */}
            </div>
          </div>
          <div className="cookie-card">
            <span className="title">🍪 Cookie Notice</span>
            <p className="description">
              We use cookies to ensure that we give you the best experience on
              our website Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, aperiam!
            </p>
            <div className="actions">
              <span>Order ID:</span>
              <button className="pref">GFREH46VG5G6BH49F56</button>
              {/* <button className="accept">Accept</button> */}
            </div>
          </div>
          <div className="cookie-card">
            <span className="title">🍪 Cookie Notice</span>
            <p className="description">
              We use cookies to ensure that we give you the best experience on
              our website Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, aperiam!
            </p>
            <div className="actions">
              <span>Order ID:</span>
              <button className="pref">GFREH46VG5G6BH49F56</button>
              {/* <button className="accept">Accept</button> */}
            </div>
          </div>
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
