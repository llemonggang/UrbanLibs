import React, { Component } from 'react';
import './App.css';

import Sentence from './components/sentence';

class App extends Component {

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
