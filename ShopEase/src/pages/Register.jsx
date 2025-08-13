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
    // <div className='container-form'>
    //     <div className='container-card'>
    //       <div className="col-register">
    //       <form onSubmit={handleSubmit} className='register-form'>
    //         <p className='title'>Register</p>
    //         <p className='message'>Signup now and get full access to our app. </p>

    //         <div className='flex'>
    //           <label htmlFor="name">
    //             <input
    //               id="name"
    //               type="text"
    //               placeholder=""
    //               onChange={handleChange}
    //               value={formValues.name}
    //               autoComplete="name"
    //               required
    //               name='name'
    //               className='input'
    //             />
    //             <span>Name</span>
    //           </label>
    //         </div>

    //           <label htmlFor="email">
    //           <input
    //             className='input'
    //             onChange={handleChange}
    //             id="email"
    //             type="email"
    //             value={formValues.email}
    //             required
    //             autoComplete="email"
    //             name='email'
    //           />
    //           <span>Email</span>
    //           </label>
    //           <label htmlFor="password">
    //           <input
    //             className='input'
    //             onChange={handleChange}
    //             type="password"
    //             id="password"
    //             value={formValues.password}
    //             required
    //             name='password'
    //           />
    //           <span>Password</span>
    //           </label>
    //           <label htmlFor="confirmPassword">
    //           <input
    //             className='input'
    //             onChange={handleChange}
    //             type="password"
    //             id="confirmPassword"
    //             value={formValues.confirmPassword}
    //             required
    //             name='confirmPassword'
    //           />
    //           <span>Confirm Password</span>
    //           </label>
    //         <button className='Submit'
    //           disabled={
    //             !formValues.email ||
    //             (!formValues.password &&
    //               formValues.password === formValues.confirmPassword)
    //           }
    //         >
    //           Register
    //         </button>
    //         <p className='signin'>Already have an account ?<Link to="/login">Signin</Link></p>
    //       </form>
    //       </div>
    //     </div>
    //   </div>

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
