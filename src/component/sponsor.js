import React, {Component} from 'react'

export default class Sponsor extends Component {
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
