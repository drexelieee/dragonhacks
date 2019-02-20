import React, { Component } from 'react';
import '../../css/section/home.css';

export default class Home extends Component {
  render() {
    return (
      <section id="home">
        <h1>Dragon<wbr/>Hacks!</h1>
        <div className="quick-info">
          <div>Drexel's very own 24-hour hackathon!</div>
          <div>
            <a href="https://goo.gl/maps/EQj1FVXS1UG2">
              <span className="fas fa-map-marker-alt prepend"/>
              <span>
                Bossone Research Enterprise Center
              </span>
            </a>
          </div>
          <div>
            <span className="fas fa-calendar prepend"/>
            <time dateTime="2019-04-20">
              April 20<sup>th</sup>&ndash;21<sup>st</sup> {this.props.year}
            </time>
          </div>
        </div>
      </section>
    );
  }
}
