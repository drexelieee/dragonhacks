import '../css/clickable.css';

import React, {Component} from 'react';
import classNames from 'classnames';

export default class Clickable extends Component {
  render() {
    let rootClasses = classNames('clickable', {
      'clickable--border': this.props.border,
      'clickable--link': this.props.link,
      'clickable--nav-link': this.props.navLink,
    });
    return (
      <a className={rootClasses} href={this.props.href}
        onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}
