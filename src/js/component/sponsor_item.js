import React, { Component } from 'react';
import '../../css/component/sponsor_item.css';

export default class SponsorItem extends Component {
  render() {
    return (
      <div className="sponsor">
        <a href={this.props.link}>
          <img src={this.props.logo} alt={this.props.alt} width="200"/>
        </a>
      </div>
    );
  }
}
