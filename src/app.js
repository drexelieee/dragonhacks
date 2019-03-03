import './css/app.css';

import React, { Component } from 'react';
import NavBar from './js/section/navbar';
import Section from './js/section';
import Text from './js/text';

export default class App extends Component {
  static data = {
    year: 2019,
  };

  render() {
    return (
      <div>
        <NavBar/>
        <Section/>
        <Section heading={"About DragonHacks " + App.data.year}>
          <Text>
            DragonHacks is Drexel University's 24 hour hardware-focused
            hackathon event hosted by Drexel University IEEE in {App.data.year} in
            the Bossone Research Enterprise Center. DragonHacks {App.data.year} is
            bringing in the brightest minds of the world's best schools to
            spend 24 hours to create ground breaking new products from scratch!
          </Text>
          <Text>
            We will have more than enough East coast exclusive food and
            caffeine to energize hungry and excited hackers. With over $10,000
            in prizes this year, your sleepless efforts will be rewarded!
          </Text>
          <Text>
            Hacking begins at 2 PM Saturday April 20th right after the 1 PM
            opening ceremony and ends at 2 PM Sunday April 21st. You must
            submit your project on Devpost. In order to be eligible for prizes,
            you also must participate on the Sunday judging.
          </Text>
        </Section>
        <Section heading="Schedule"/>
        <Section heading="FAQ"/>
        <div style={{backgroundColor: "var(--bg-color-light)"}}>
          <Section heading="Sponsors"/>
          <Section heading="Sponsor Us!">
            <Text>
              Please support our hackathon! Benefits include: The ability to
              recruit from the hackathon participants, gaining feedback and new
              users from participants using your products, and recognition for your
              company. More information is in the link to the right. Please
              contact <a href="mailto:teamdragonhacks@gmail.com">teamdragonhacks@gmail.com</a> to
              begin sponsoring!
            </Text>
          </Section>
        </div>
      </div>
    );
  }
}
