import React, { Component } from 'react';
import axios from 'axios';

class Sentence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sentence: '',
      adjective: '',
      noun: '',
      verb: '',
      adjectiveDefinition: '',
      nounDefinition: '',
      verbDefinition: ''
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
        var verb = this.state.verb
        var noun = this.state.noun
        var adj = this.state.adjective
        var oneSentence = (this.state.sentence).replace('VERB', verb);
        var twoSentence = (oneSentence).replace('NOUN', noun);
        var newSentence = (twoSentence).replace('ADJECTIVE', adj);
        this.setState ({
          sentence: newSentence
        });
    }

    renderWords(e) {
      e.preventDefault()
      axios.get('http://localhost:3000/words/random').then((response) => {
        axios.get('http://api.urbandictionary.com/v0/define?term='+ response.data.adjective[0].word).then((adjectiveDefinition) => {
          axios.get('http://api.urbandictionary.com/v0/define?term='+
          response.data.noun[0].word).then((nounDefinition) => {
            axios.get('http://api.urbandictionary.com/v0/define?term='+ response.data.verb[0].word).then((verbDefinition) => {
              this.setState ({
                adjective: response.data.adjective[0].word,
                noun: response.data.noun[0].word,
                verb: response.data.verb[0].word,
                adjectiveDefinition: adjectiveDefinition.data,
                nounDefinition: nounDefinition.data,
                verbDefinition: verbDefinition.data
              });
              console.log(response.data.adjective[0].word);
              console.log(response.data.noun[0].word);
              console.log(response.data.verb[0].word);
              console.log(adjectiveDefinition.data.list[0].definition);
              console.log(nounDefinition.data.list[0].definition);
              console.log(verbDefinition.data.list[0].definition);
              this.loopSentence()
            });
          });
        });
      });
    }

  render () {

    return(
      <div className="container">
        <header>Urban<span>Libs</span></header>

        <div className="sentence">
          <div>{this.state.sentence}</div>
          <button className="buttons" className="button-one" onClick={this.renderSentence.bind(this)}>sentence!</button>
        </div>

        <div className="word">
          <button className="buttons" className="button-two" onClick={this.renderWords.bind(this)}>words!</button>
        </div>

        <div className="window">
          <p>Definition Window</p>
        </div>
      </div>
    )

  }
}

export default Sentence;
