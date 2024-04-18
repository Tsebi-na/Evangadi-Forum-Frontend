import React from 'react'
import Login from './Login'

function SignUp() {
  return (
    <div className="sign-up ">
    <div className="container last">
      <div className="row">
        <div className="col-md col-xs-1">
          <Login />
        </div>
        <div className="col-md col-xs-1">
          <About />
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp