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

  renderWords(e) {
    e.preventDefault()
    console.log('working');
  }

  render () {
    return(
      <div>
        <button className="buttons" onClick={this.renderWords.bind(this)}>Generate Words</button>
      </div>
    )
  }

}
export default Words;
