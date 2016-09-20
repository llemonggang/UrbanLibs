import React, { Component } from 'react';

import Sentence from './sentence';

class View extends Component {
  constructor(props) {
    super(props)


  }

  render () {

    return(
      <div>
        <header>Urban<span>Libs</span></header>
        <div className="container">
        <Sentence />
        </div>
      </div>
  )

  }
}

export default View;
