import 'css/logo.css';

import React, {Component} from 'react';
import classNames from 'classnames';
import Clickable from './clickable';

export default class Logo extends Component {
  render() {
    let rootClasses = classNames('logo', {
      'logo--mlh': this.props.mlh,
    });
    return (
      <div className={rootClasses}>
        <Clickable href={this.props.href}>
          <img className="logo__image"
            src={require('img/' + this.props.imgSrc)}
            alt={this.props.altText}/>
        </Clickable>
      </div>
    );
  }
}
