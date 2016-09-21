import React, { Component } from 'react';
import axios from 'axios';

class Sentence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: ''
    }

    // this.state = {
    //   word: '',
    //   type: ''
    // }

  }

    renderSentence(e) {
      e.preventDefault()
       axios.get('http://localhost:3000/sentences/random').then((response) => { this.setState ({
          sentence: response.data[0].sentence
        });
      });
    }

    // renderWords(e) {
    //   e.preventDefault()
    //   axios.get('http://localhost:3000/words/random').then((response) => { this.setState ({
    //      word: response.data[0].word,
    //      type: response.data[0].type
    //    });
    //  });
    //   console.log(this.state.type);
    //   console.log(this.state.word);
    //
    //   console.log(this.props.children);
    //   // (this.props.sentence).replaceString('NOUN', "working")
    // }



  render () {

    return(
      <div className="container">
        <header>Urban<span>Libs</span></header>
        <div className="sentence">
          <div>{this.state.sentence}</div>
          <button className="buttons" className="button-one" onClick={this.renderSentence.bind(this)}>Generate Sentence</button>
        </div>

        {/* <div className="word">
          <button className="buttons" className="button-two" onClick={this.renderWords.bind(this)}>Generate Words</button>
        </div>

        <div className="window">
          <p>Definition Window</p>
        </div> */}
      </div>
  )

  }
}

export default Sentence;
