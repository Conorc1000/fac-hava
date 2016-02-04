import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CustomerLogin from './components/CustomerLogin.js';
import BarLogin from './components/BarLogin.js';

import { Router, Route, Link } from 'react-router'


class App extends Component {
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}


ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="bar" component={BarLogin}>
      </Route>
      <Route path="customer" component={CustomerLogin}>
      </Route>
    </Route>
  </Router>
),document.querySelector('.container'))
