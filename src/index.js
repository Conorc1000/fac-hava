import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';

class App extends Component {
    render() {
      return (
        < div >
          < Login / >
        < /div>
      );
    }
  }

  ReactDOM.render( < App / > , document.querySelector('.container'))
