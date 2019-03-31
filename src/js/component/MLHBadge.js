import 'css/MLHBadge.css';

import React, { Component } from 'react';

export default class MLHBadge extends Component {
  render() {
    return (
      <a className="mlh-badge" style={{top: this.props.topOffset}}
        href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=black"
        target="_blank"
        rel="noopener noreferrer">
        <img className="mlh-badge__image"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-black.svg"
          alt="Major League Hacking 2019 Hackathon Season"/>
      </a>
    );
  }
}
