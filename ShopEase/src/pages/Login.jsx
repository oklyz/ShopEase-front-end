import { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

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
    // <div>
    //   <div className="container-form">
    //     <div className="container-card">
    //       <form onSubmit={handleSubmit} className="register-form">
    //         <p className="title">Login</p>
    //         <label htmlFor="email">
    //           <input
    //             className="input"
    //             id="email"
    //             type="email"
    //             onChange={handleChange}
    //             value={formValues.email}
    //             required
    //             autoComplete="email"
    //             name="email"
    //           />
    //           <span>Email</span>
    //         </label>
    //         <label htmlFor="password">
    //           <input
    //             className="input"
    //             onChange={handleChange}
    //             type="password"
    //             id="password"
    //             value={formValues.password}
    //             required
    //             name="password"
    //           />
    //           <span>Password</span>
    //         </label>
    //         <button disabled={!formValues.email || !formValues.password}>
    //           Sign In
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="register-form">
      <form onSubmit={handleSubmit} className="form">
        <span className="input-span">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formValues.email}
            required
            autoComplete="email"
          />
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formValues.password}
            required
            autoComplete="password"
          />
        </span>
        <span className="span">
          <a href="#">Forgot password?</a>
        </span>
        <input className="submit" type="submit" value="Log in" />
        <span className="span">
          Don't have an account? <Link to="/register">register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
