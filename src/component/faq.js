import React, {Component} from 'react'

export default class FAQ extends Component {
  render() {
    return (
      <div className="faq">
        <h3>{this.props.question}</h3>
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
}
