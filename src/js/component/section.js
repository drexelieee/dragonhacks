import 'css/section.css';

import React, {Component} from 'react';
import classNames from 'classnames';

export default class Section extends Component {
  render() {
    let sectionClasses = classNames('section', {
      'section--main': this.props.main,
    });
    let headerClasses = classNames('section__header', {
      'section__header--main': this.props.main,
    });
    return (
      <section id={this.props.id} className={sectionClasses}>
        {this.props.heading && (
          <header className={headerClasses}>
            <h2>{this.props.heading}</h2>
          </header>
        )}
        {this.props.children}
      </section>
    );
  }
}
