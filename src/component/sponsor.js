import React, {Component} from 'react'

export default class Sponsor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sponsor">
        <a href={this.props.link}>
          <img src={this.props.logo} width="200"/>
        </a>
      </div>
    );
  }
}
