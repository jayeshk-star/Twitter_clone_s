import React, { useState } from 'react'
import Footer from './Footer'
import style from './Login.module.css'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Login from './Login'

const Register = () => {
  const [firstname, setName] = useState('')
  const [lastname, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [isregister, setIsRegister] = useState(false)

  const handleOnClick = () => {
    var userRegisterdata = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }
    console.log(userRegisterdata)

    if (
      userRegisterdata.setName !== '' &&
      userRegisterdata.setlastName !== '' &&
      userRegisterdata.setemail !== '' &&
      userRegisterdata.setpassword !== ''
    ) {
      setIsRegister(true)
      localStorage.setItem('isregister', JSON.stringify(isregister))
    }

    setemail('')
    setName('')
    setlastName('')
    setpassword('')
  }

  return (
    <div>
      <div>
        <div className={style.signup}>
          <div className={style.mainDiv}>
            {' '}
            <p style={{ color: '#fff' }}>
              <AiOutlineTwitter size='25rem' />
            </p>{' '}
          </div>
          <div>
            <div className={style.secDiv}>
              <p>
                <AiOutlineTwitter size='3.5rem' />
              </p>
              <h1 style={{ fontSize: '70px', marginTop: '40px' }}>
                Happening now
              </h1>
              <h2 style={{ fontSize: '35px', marginTop: '40px' }}>
                Join Twitter today.
              </h2>
              <div className={style.inputdiv}>
                <input
                  type='text'
                  placeholder='First Name'
                  className={style.inputfiled}
                  onChange={e => setName(e.target.value)}
                  value={firstname}
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className={style.inputfiled}
                  onChange={e => setlastName(e.target.value)}
                  value={lastname}
                />
                <input
                  type='text'
                  placeholder='Enter Email'
                  className={style.inputfiled}
                  onChange={e => setemail(e.target.value)}
                  value={email}
                />
                <input
                  type='password'
                  placeholder='password'
                  className={style.inputfiled}
                  onChange={e => setpassword(e.target.value)}
                  value={password}
                />
                <button className={style.Register} onClick={handleOnClick}>
                  Register
                </button>
              </div>
              <p style={{ fontSize: '14px', marginTop: '10px' }}>
                By signing up, you agree to the Terms of Service and Privacy{' '}
                <br></br> Policy, including Cookie Use.
              </p>
              <p className={style.plink} style={{ marginTop: '15px' }}>
                Already have an account?{' '}
                <Link to='/login' className={style.linktonext}>
                  Log in
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
