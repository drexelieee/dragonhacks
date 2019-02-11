import React, {Component} from 'react'

export default class FAQ extends Component {
  constructor(props) {
    super(props);
  }

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
