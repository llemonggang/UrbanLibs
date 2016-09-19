import React, { Component } from 'react';
import axios from 'axios';

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

  renderSentence(sentence) {
    console.log('working');
    axios.get('http://localhost:3000/' + sentence._id).then((response) => {
      this.setState ({
        sentence: response.data
      });
    });
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
