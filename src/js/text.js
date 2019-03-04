import '../css/text.css';

import React, { Component } from 'react';

export default class Text extends Component {
  static modifiers = {
    accent: 'text--accent',
    prefix: 'text--prefix',
    big: 'text--big',
    bigger: 'text--bigger',
  }

  getModifiers = () => {
    let mods = ['text'];
    for (let prop in this.props) {
      if (this.props.hasOwnProperty(prop) && Text.modifiers[prop]) {
        mods.push(Text.modifiers[prop]);
      }
    }
    return mods.join(' ');
  }

  render() {
    const TopLevelTag = this.props.inline ? 'span' : 'p';
    return (
      <TopLevelTag className={this.getModifiers()}>
        {this.props.children}
      </TopLevelTag>
    );
  }
}
