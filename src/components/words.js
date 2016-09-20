import React, { Component } from 'react';
import axios from 'axios';

import Sentence from './sentence';

class Words extends Component {
  constructor(props) {
    super(props)

    this.state = {
      word: '',
      type: ''
    }
  }

  renderWords(e) {
    e.preventDefault()
    axios.get('http://localhost:3000/words/random').then((response) => { this.setState ({
       word: response.data[0].word,
       type: response.data[0].type
     });
   });
    console.log(this.state.type);
    console.log(this.state.word);
    console.log(this.props.sentence);
    (this.props.sentence).replaceString('NOUN', "working")
  }

  // addWord(e) {
  //   e.preventDefault()
  // }

  render () {
    return(
      <div>
        <button className="buttons" className="button-two" onClick={this.renderWords.bind(this)}>Generate Words</button>
      </div>
    )
  }

}
export default Words;
