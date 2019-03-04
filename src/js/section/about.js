import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <header>
          <h2>About DragonHacks {this.props.year}</h2>
        </header>
        <p>
          DragonHacks is Drexel University's 24 hour hardware-focused
          hackathon event hosted by Drexel University IEEE in {this.props.year} in
          the Bossone Research Enterprise Center. DragonHacks {this.props.year} is
          bringing in the brightest minds of the world's best schools to
          spend 24 hours to create ground breaking new products from scratch!
        </p>
        <p>
          We will have more than enough East coast exclusive food and
          caffeine to energize hungry and excited hackers. With over $10,000
          in prizes this year, your sleepless efforts will be rewarded!
        </p>
        <p>
          Hacking begins at 2 PM Saturday April 20th right after the 1 PM
          opening ceremony and ends at 2 PM Sunday April 21st. You must
          submit your project on Devpost. In order to be eligible for prizes,
          you also must participate on the Sunday judging.
        </p>
      </section>
    );
  }
}
