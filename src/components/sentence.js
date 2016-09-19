import React, { Component } from 'react';

// import Words from './components/words';

class Sentence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: 'String'
    }
  }

  // renderWords() {
  //   //generate words
  // }

  renderSentence() {
    //generate random sentence
    // renderWords()
  }


  render () {

    return(
      <div>
        <button onClick={this.renderSentence}>Generate Sentence</button>
      </div>
  )

  }

}
export default Sentence;
