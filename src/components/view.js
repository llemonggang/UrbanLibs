import React, { Component } from 'react';

import Sentence from './sentence';

class View extends Component {
  constructor(props) {
    super(props)


  }

  render () {

    return(
      <div>
      <Sentence />
      </div>
  )

  }
}

export default View;
