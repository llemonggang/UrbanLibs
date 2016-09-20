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
     axios.get('http://localhost:3000/sentences/random').then((response) => { this.setState ({
        sentence: response.data[0].sentence
      });
    });
  }

  render () {
    return(
      <div>
        <button onClick={this.renderSentence.bind(this)}>Generate Sentence</button>
          <div>{this.state.sentence}</div>
      </div>
    )
  }

}
export default Sentence;
