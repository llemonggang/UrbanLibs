import React, { Component } from 'react';
import axios from 'axios';

class Sentence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: '',
      wordAdjective: '',
      wordNoun: '',
      wordVerb: ''
      // adjective: '',
      // noun: '',
      // verb: ''
    }

  }

    renderSentence(e) {
      e.preventDefault()
       axios.get('http://localhost:3000/sentences/random').then((response) => { this.setState ({
          sentence: response.data[0].sentence
        });
      });
    }

    loopSentence() {
        var verb = this.state.wordVerb
        var noun = this.state.wordNoun
        var adj = this.state.wordAdjective
        var oneSentence = (this.state.sentence).replace('VERB', verb);
        var twoSentence = (oneSentence).replace('NOUN', noun);
        var newSentence = (twoSentence).replace('ADJECTIVE', adj);
        this.setState ({
          sentence: newSentence
        });
    }

    renderWords(e) {
      e.preventDefault()
      axios.get('http://localhost:3000/words/random').then((response) => { this.setState ({
         wordAdjective: response.data.adjective[0].word,
         wordNoun: response.data.noun[0].word,
         wordVerb: response.data.verb[0].word
        //  noun: response.data.noun[0].type,
        //  verb: response.data.verb[0].type,
        //  adjective: response.data.adjective[0].type
       });
       console.log(response.data.verb[0].word);
       this.loopSentence()
     });
    }

  render () {

    return(
      <div className="container">
        <header>Urban<span>Libs</span></header>

        <div className="sentence">
          <div>{this.state.sentence}</div>
          <button className="buttons" className="button-one" onClick={this.renderSentence.bind(this)}>Generate Sentence</button>
        </div>

        <div className="word">
          <button className="buttons" className="button-two" onClick={this.renderWords.bind(this)}>Generate Words</button>
        </div>

        <div className="window">
          <p>Definition Window</p>
        </div>
      </div>
    )

  }
}

export default Sentence;
