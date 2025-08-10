import { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  const initialState = { email: '', password: '' }

  const { setUser } = useContext(UserContext)
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            autoComplete="email"
            name='email'
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
            name='password'
          />
        </div>

        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login
