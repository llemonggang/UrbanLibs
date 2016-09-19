import React, { Component } from 'react';
import './App.css';

import Sentence from './components/sentence';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: ''
    }

  }

  render() {

    return (
      <div>
      <Sentence />
      </div>
    );
  }
}

export default App;
