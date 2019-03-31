import 'css/Text.css';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Text extends Component {
  render() {
    const Root = this.props.inline ? 'span' : 'p';
    let rootClasses = classNames('text', {
      'text--accent': this.props.accent,
      'text--big': this.props.big,
      'text--bigger': this.props.bigger,
    });
    return (
      <Root className={rootClasses}>
        {this.props.children}
      </Root>
    );
  }
}
