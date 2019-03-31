import 'css/Faq.css';

import React, { Component } from 'react';
import Text from './Text';

export default class FAQ extends Component {
  render() {
    return (
      <div className="faq">
        <h3 className="faq__question">{this.props.question}</h3>
        <Text>
          {this.props.children}
        </Text>
      </div>
    );
  }
}
