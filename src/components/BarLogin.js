import React from 'react';
import Firebase from 'firebase';
import { Router, Route, Link } from 'react-router';
import CreateOffers from './CreateOffers.js';

var firebaseRef = new Firebase("https://havamvp.firebaseio.com/customer");



var BarLogin = React.createClass({

  getInitialState : function() {
      return {
        loggedIn : "false"
      };
    },

  componentDidMount: function() {
    var self = this;
    document.getElementById('button').addEventListener('click', function(){
      firebaseRef.authWithPassword({
        email    : document.getElementById('email').value,
        password : document.getElementById('password').value
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
          alert('Login failed. Check your username or password.')
        } else {
          self.setState({
            loggedIn : "true"
          });
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    })
  },

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   //ROUTE TO NEXT PAGE
  //   return true
  // },

  render: function() {
    return (
      <div>
         <h2> Bar Login</h2>

              <label for="txtRegEmail">Email address</label>
              <input value="conorc1000@gmail.com" type="email" class="form-control" id="email" placeholder="Enter email" name="email" />


              <label for="txtRegPassword">Password</label>
              <input type="password" class="form-control" id="password" placeholder="password" />

          <button id="button"><Link to="createOffers">Login</Link></button>

      </div>
    )
  }
});

export default BarLogin;
