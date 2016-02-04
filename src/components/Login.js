import React from 'react';
import Firebase from 'firebase';

var firebaseRef = new Firebase("https://havamvp.firebaseio.com/customer");
var firebaseRefPush = firebaseRef.push();


var checkCookie = () => {
  if(document.cookie.match('havaid')) {
    console.log('COOKIE IS HERE');
    //route to offers page
  } else {
    return;
  }
}

var checkUser = () => {
  var userPhoneNumber = document.getElementById('phoneNumber').value;
  console.log(userPhoneNumber, typeof userPhoneNumber);
  var userPhoneNumberRegex = new RegExp('\\b' + userPhoneNumber + '\\b');
  firebaseRef.on('value', function(snapshot){
    var databaseSnapshot = JSON.stringify(snapshot.val());
    databaseSnapshot.match(userPhoneNumberRegex) ? console.log('exists') : submitUser();
  });
}


var submitUser = () => {
  console.log('user details submitted');
  firebaseRefPush.set({
    email: document.getElementById('email').value,
    phoneNumber: document.getElementById('phoneNumber').value
  })
  setCookie();
}

var setCookie = () => {
  firebaseRef.on('value', function(snapshot){
    var allUsers = snapshot.val();
    var allUsersArr = Object.keys(allUsers)
    var userNo = allUsersArr.length - 1;
    var user = allUsersArr[userNo];
    document.cookie = "havaid=" + user + "; path=/";
  })
}

var Login = React.createClass({

  componentWillMount: function() {
    checkCookie();
  },

  componentDidMount: function() {
    document.getElementById('button').addEventListener('click', function(){
      checkUser();
      // submitUser();
    })
  },

  render: function() {
    return (
      <div>
           <h2>To get details please enter your:</h2>

              <label for="txtRegEmail">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />


              <label>Phone Number</label>
              <input class="form-control" id="phoneNumber" placeholder="phoneNumber" />

          <button id="button">Register</button>
      </div>
    )
  }
});

export default Login;
