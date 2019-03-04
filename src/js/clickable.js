import '../css/clickable.css';

import React, { Component } from 'react';

export default class Clickable extends Component {
  // Mapping of props to css modifier class names
  static modifiers = {
    border: 'clickable--border',
    link: 'clickable--link',
    navLink: 'clickable--nav-link',
  }

  getModifiers = () => {
    let mods = [];
    for (let prop in this.props) {
      if (this.props.hasOwnProperty(prop) && Clickable.modifiers[prop]) {
        mods.push(Clickable.modifiers[prop])
      }
    }
    return mods.join(' ');
  }

  render() {
    return (
      <a className={"clickable " + this.getModifiers()} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}
