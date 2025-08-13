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
    confirmPassword: '',
  }

  const [formValues, setFormValues] = useState(initialState)
  const [passwordMsg,setPasswordMsg]=useState(false)
let passwordRegex=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const strongPasswordValidation=(password)=>{
    if(password.match(passwordRegex)){
      setPasswordMsg(false)
    }
    else{
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
  <div className='container-form'>
      <div className='container-card'>
        <div className="col-register">
        <form onSubmit={handleSubmit} className='register-form'>
          <p className='title'>Register</p>
          <p className='message'>Signup now and get full access to our app. </p>
          <div className='flex'>
            <label htmlFor="name">
              <input
                onChange={handleChange}
                id="name"
                type="text"
                placeholder=""
                value={formValues.name}
                required
                autoComplete="name"
                name='name'
                className='input'
              />
              <span>Name</span>
            </label>
          </div>
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
            <label htmlFor="confirmPassword">
            <input
              className='input'
              onChange={handleChange}
              type="password"
              id="confirmPassword"
              value={formValues.confirmPassword}
              required
              name='confirmPassword'
            />
            <span>Confirm Password</span>
            </label>
          <button className='Submit'
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.password === formValues.confirmPassword)
            }
          >
            Register
          </button>
          <p className='signin'>Already have an account ?<Link to="/login">Signin</Link></p>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Register
