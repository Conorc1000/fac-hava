import React from 'react';

const Login = () => {
  return (

      <form id="frmRegister" role="form">
           <h2>Register</h2>

          <div class="form-group">
              <label for="txtRegEmail">Email address</label>
              <input type="email" class="form-control" id="txtEmail" placeholder="Enter email" name="email" />
          </div>
          <div class="form-group">
              <label for="txtRegPass">Password</label>
              <input type="password" class="form-control" id="txtPass" placeholder="Password" name="password" />
          </div>
          <button type="submit" class="btn btn-default">Register</button>
      </form>

    )
  }

export default Login;
