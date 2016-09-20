import React, { Component } from 'react';


class Words extends Component {
  constructor(props) {
    super(props)

    this.state = {
      noun: 'string',
      adjective: 'string',
      verb: 'string'
    }
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
export default Words;
