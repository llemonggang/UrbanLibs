import React, { Component } from 'react';

import Words from './components/words';

class Sentence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: {}
    }
  }

  renderWords() {
    //generate words
  }

  renderSentence() {
    //generate random sentence
    renderWords()
  }


  render () {
    <div>
      <button onClick={this.renderSentence}></button>

    </div>
  }

}
export default Sentence;
