import React, { Component } from 'react';

import Words from './words';

class View extends Component {
  constructor(props) {
    super(props)


  }

  render () {

    return(
      <div>
        <header>Urban<span>Libs</span></header>
        <div className="container">
        <Words />
        </div>
      </div>
  )

  }
}

export default View;
