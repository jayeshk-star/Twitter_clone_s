import React, { useState } from 'react'
import style from './Login.module.css'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'

const Login = () => {
  const [email1, setEmail1] = useState('')
  const [pass1, setpass1] = useState('')
  var isregister = JSON.parse(localStorage.getItem('isregister'))

  const handlelogin = () => {
    console.log(email1, pass1)
    setEmail1('')
    setpass1('')
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
              <h1 style={{ fontSize: '70px', marginTop: '50px' }}>
                Happening now
              </h1>
              <h2 style={{ fontSize: '35px', marginTop: '40px' }}>
                Log in to Twitter
              </h2>
              <div className={style.inputdiv}>
                <input
                  type='email'
                  placeholder='Enter Email'
                  className={style.inputfiled}
                  onChange={e => setEmail1(e.target.value)}
                  value={email1}
                />
                <input
                  type='password'
                  placeholder='password'
                  className={style.inputfiled}
                  onChange={e => setpass1(e.target.value)}
                  value={pass1}
                />
              </div>
              <button className={style.Register} onClick={handlelogin}>
                Register
              </button>
              <p className={style.plink} style={{ marginTop: '15px' }}>
                Don’t have an account?{' '}
                <Link to='/register' className={style.linktonext}>
                  Sign up
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
