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
      verbDefinition: '',
      definitionTypes: []
    }

  }

    useCases() {
      var definitionTypes = [];
      var sentence = (this.state.sentence).split(" ");

      console.log('sentence', sentence);

      for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].match('NOUN')){
          definitionTypes.push('nounDefinition');
        }
        if (sentence[i].match('ADJECTIVE')){
          definitionTypes.push('adjectiveDefinition');
        }
        if (sentence[i].match('VERB')){
          definitionTypes.push('verbDefinition');
        }
      }

      console.log('useCases', definitionTypes);

      this.setState({
        definitionTypes: definitionTypes
      })

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
                adjectiveDefinition: adjectiveDefinition.data.list[0].definition,
                nounDefinition: nounDefinition.data.list[0].definition,
                verbDefinition: verbDefinition.data.list[0].definition
              });
              this.useCases()
              this.loopSentence()

            });
          });
        });
      });
    }

  render () {
    let definitions = this.state.definitionTypes.map((definition) => {
      // definition = adjectiveDefinition
      // definition = nounDefinition
      // definition = verbDefinition
      let word = '';

      if (definition === 'adjectiveDefinition') {
        word = this.state.adjective;
      }
      if (definition === 'nounDefinition') {
        word = this.state.noun;
      }
      if (definition === 'verbDefinition') {
        word = this.state.verb;
      }

      return (
        <li className="li-defs" key={word}>
          <span className="defs">{word}</span>{this.state[definition]}
        </li>
      )
    })
    return(
      <div>
        <header>Urban<span>Libs</span></header>

            <div className="sentence">
              <div>{this.state.sentence}</div>
            </div>

            <div>
            <button className="buttons" className="button-one" onClick={this.renderSentence.bind(this)}>sentence</button>

            <button className="buttons" className="button-two" onClick={this.renderWords.bind(this)}>words</button>
            </div>

            <div className="window">
              <ul>
                {definitions}

              </ul>
            </div>

      </div>
    )

  }
}

export default Sentence;
