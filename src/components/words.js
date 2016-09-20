import React, { Component } from 'react';
import axios from 'axios';


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
       word: response,
       type: response
     });
   });
    console.log(this.state.type.data);
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
