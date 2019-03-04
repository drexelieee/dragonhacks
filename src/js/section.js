import '../css/section.css';

import React, { Component } from 'react';

export default class Section extends Component {
  getModifiers = () => {
    let mods = ['section'];
    if (this.props.main) {
      mods.push('section--main');
    }
    return mods.join(' ');
  }

  render() {
    return (
      <section className={this.getModifiers()}>
        {this.props.heading && (
        <header className="section__header">
          <h2>{this.props.heading}</h2>
        </header> )}
        {this.props.children}
      </section>
    );
  }
}
