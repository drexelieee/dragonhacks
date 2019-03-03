import '../css/logo.css';

import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <a className="logo__link" href={this.props.href}>
          <img className="logo__image"
            src={require(this.props.imgSrc)}
            alt={this.props.altText}/>
        </a>
      </div>
    );
  }
}
