import React, {
  Component
}
from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Test';


class App extends Component {


    render() {
      return (
        < div >
          < Hello / >
        < /div>
      );
    }
  }

  ReactDOM.render( < App / > , document.querySelector('.container'))
