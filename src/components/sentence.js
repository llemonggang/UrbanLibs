import React, { Component } from 'react';
import axios from 'axios';

class Sentence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: ''
    }
  }

  renderSentence(e) {
    e.preventDefault()

    console.log('working');
    axios.get('http://localhost:3000/sentences/random').then((response) => {
      this.setState ({
        sentence: response[0]
      });
    });
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
