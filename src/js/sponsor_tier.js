import '../css/sponsor_tier.css';

import React, { Component } from 'react';

export default class SponsorTier extends Component {
  render() {
    return (
      <div className="sponsor-tier">
        {this.props.children}
      </div>
    );
  }
}
