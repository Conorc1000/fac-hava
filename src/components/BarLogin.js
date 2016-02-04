import React from 'react';
import Firebase from 'firebase';

var firebaseRef = new Firebase("https://havamvp.firebaseio.com/customer");

function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}

var checkUser = function () {
  firebaseRef.authWithPassword({
    email    : document.getElementById('email').value,
    password : document.getElementById('password').value
  }, authHandler);
}

var BarLogin = React.createClass({

  componentDidMount: function() {
    checkUser();
  },

  render: function() {
    return (
      <div>
         <h2> Bar Login</h2>

              <label for="txtRegEmail">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />


              <label for="txtRegPassword">Password</label>
              <input type="password" class="form-control" id="password" placeholder="password" />

          <button id="button">Login</button>
      </div>
    )
  }
});

export default BarLogin;
