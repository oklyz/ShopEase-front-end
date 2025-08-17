import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)
  const [passwordMsg, setPasswordMsg] = useState(false)
  let passwordRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
  )
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const strongPasswordValidation = (password) => {
    if (password.match(passwordRegex)) {
      setPasswordMsg(false)
    } else {
      setPasswordMsg(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    strongPasswordValidation(formValues.password)
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit} className="form">
        <span className="input-span">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formValues.name}
            required
          />
        </span>

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
          />
        </span>

        <span className="input-span">
          <label htmlFor="confirmePassword" className="label">
            Confirme Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
            required
          />
        </span>

        <span className="span">
          <a href="#">Forgot password?</a>
        </span>
        <input
          className="submit"
          type="submit"
          value="Sign up"
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.password === formValues.confirmPassword)
          }
        />
        <span className="span">
          Already have an account? <Link to="/login">Sign in</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
