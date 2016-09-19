import React, { Component } from 'react';

import Sentence from './components/sentence';
// import Words from './components/words';

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
