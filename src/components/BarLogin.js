import React from 'react';
import Firebase from 'firebase';

var firebaseRef = new Firebase("https://havamvp.firebaseio.com/customer");


var BarLogin = React.createClass({

  

  render: function() {
    return (
      <div>
         <h2> Bar Login</h2>

              <label for="txtRegEmail">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />


              <label>Password</label>
              <input class="form-control" id="password" placeholder="password" />

          <button id="button">Login</button>
      </div>
    )
  }
});

export default BarLogin;
