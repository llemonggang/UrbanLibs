import React, { Component } from 'react';
import './App.css';

import View from './components/view';

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div>
      <View />
      </div>
    );
  }
}

export default App;
