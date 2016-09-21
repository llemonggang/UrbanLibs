import React, { Component } from 'react';
import axios from 'axios';

class Sentence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: '',
      word: '',
      type: ''
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
      var sentence = (this.state.sentence).split(" ")

      for (var i = 0; i < sentence.length; i++) {
        if ((sentence[i].match('NOUN'))&&(this.state.type) === ('noun')){
          var sentence = (sentence).join(" ")
          var noun = this.state.word
          var newSentence = (this.state.sentence).replace('NOUN', noun);
        }
        else if ((sentence[i].match('VERB'))&&(this.state.type) === ('verb')){
          var sentence = (sentence).join(" ")
          var verb = this.state.word
          var newSentence = (this.state.sentence).replace('VERB', verb)
        }
        else if ((sentence[i].match('ADJECTIVE'))&&(this.state.type) === ('adjective')) {
          var sentence = (sentence).join(" ")
          var adj = this.state.word
          var newSentence = (this.state.sentence).replace('ADJECTIVE', adj)
        }

        this.setState ({
          sentence: newSentence
        });

      }

    }
    //
    // updateSentence() {
    //
    //     if ((this.state.type) === ('adjective')) {
    //       var adj = this.state.word
    //       var newSentence = (this.state.sentence).replace('ADJECTIVE', adj)
    //     } else if ((this.state.type) === ('verb')){
    //       var verb = this.state.word
    //       var newSentence = (this.state.sentence).replace('VERB', verb)
    //     } else {
    //       var noun = this.state.word
    //       var newSentence = (this.state.sentence).replace('NOUN', noun)
    //     }
    //
    //     this.setState ({
    //       sentence: newSentence
    //     });
    //
    // }

    renderWords(e) {
      e.preventDefault()
      axios.get('http://localhost:3000/words/random').then((response) => { this.setState ({
         word: response.data[0].word,
         type: response.data[0].type
       });
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
