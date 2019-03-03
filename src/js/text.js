import '../css/text.css'

import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    if (this.props.inline) {
      var jsx = (
        <span className="text">
          {this.props.children}
        </span>
      );
    } else {
      var jsx = (
        <p className="text">
          {this.props.children}
        </p>
      );
    }
    return jsx;
  }
}
