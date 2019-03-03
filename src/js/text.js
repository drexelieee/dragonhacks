import '../css/text.css';

import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    const TopLevelTag = this.props.inline ? 'span' : 'p';
    return (
      <TopLevelTag className="text">
        {this.props.children}
      </TopLevelTag>
    );
  }
}
