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
      <div className='container-form'>
        <div className='container-card'>
          <form onSubmit={handleSubmit}
          className='register-form'>
          <p className='title'>Login</p>
              <label htmlFor="email">
              <input
                className='input'
                onChange={handleChange}
                id="email"
                type="email"
                value={formValues.email}
                required
                autoComplete="email"
                name='email'
              />
              <span>Email</span>
              </label>
              <label htmlFor="password">
              <input
                className='input'
                onChange={handleChange}
                type="password"
                id="password"
                value={formValues.password}
                required
                name='password'
              />
              <span>Password</span>
              </label>
            <button disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Login
