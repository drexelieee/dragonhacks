import '../css/section.css';

import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <section className="section">
        {this.props.heading && (
        <header className="section__header">
          <h2>{this.props.heading}</h2>
        </header> )}
        {this.props.children}
      </section>
    );
  }
}
