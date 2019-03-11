import '../css/logo.css';

import React, {Component} from 'react';
import Clickable from './clickable';

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Clickable href={this.props.href}>
          <img className="logo__image"
            src={require("../img/" + this.props.imgSrc)}
            alt={this.props.altText}/>
        </Clickable>
      </div>
    );
  }
}
