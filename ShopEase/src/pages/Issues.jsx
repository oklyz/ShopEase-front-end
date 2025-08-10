import { useEffect, useState } from 'react'
import { getIssues } from '../services/Issue'

const Issues = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const getAllIssues = async () => {
      const allIssues = await getIssues()
      // console.log(allIssues)
      setIssues(allIssues)
    }

    getAllIssues()
  }, [])

  return (
    <>
      {issues.length > 0 ? (
        <div>
          {issues.map((issue) => {
            return <div key={issue._id}> {issue.subject} </div>
          })}
        </div>
      ) : (
        <>
          <div>No Issues...</div>
        </>
      )}
      {/* <div>Issues..</div> */}
    </>
  )
}
export default Issues
