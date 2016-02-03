import React from 'react';
import Firebase from 'firebase';

var firebaseRef = new Firebase("https://havamvp.firebaseio.com/customer").push();

var submitUser = () => {
  firebaseRef.set({
    email: document.getElementById('email').value,
    phoneNumber: document.getElementById('phoneNumber').value
  });
}

var Login = React.createClass({

  componentDidMount: function() {
    document.getElementById('button').addEventListener('click', function(){
      submitUser();
    })
  },

  render: function() {
    return (
      <div>
           <h2>Register</h2>

              <label for="txtRegEmail">Email address</label>
              <input type="email" class="form-control" id="email" value="Ruth@ruth.ruth" placeholder="Enter email" name="email" />

              <label>Phone Number</label>
              <input class="form-control" id="phoneNumber" value="12345" placeholder="phoneNumber" />

          <button id="button">Register</button>
      </div>
    )
  }
});

export default Login;
