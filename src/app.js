import './css/app.css';

import React, { Component } from 'react';
import NavBar from './js/section/navbar';
import Section from './js/section';
import Text from './js/text';
import Logo from './js/logo';
import SponsorTier from './js/sponsor_tier';

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
          <Section heading="Sponsors">
            <SponsorTier>
              <Logo href="https://www.ieee.org/"
                imgSrc="logo_ieee.png"
                altText="IEEE UPP"/>
              <Logo href="https://drexel.edu/engineering/"
                imgSrc="logo_drexel_ece.png"
                altText="Drexel ECE Dept."/>
              <Logo href="https://drexel.edu/provost/"
                imgSrc="logo_drexel_provost.jpg"
                altText="Drexel Office of the Provost"/>
            </SponsorTier>
            <SponsorTier>
              <Logo href="http://www.lutron.com/en-US/Pages/default.aspx"
                imgSrc="logo_lutron.png"
                altText="Lutron"/>
              <Logo href="https://www.lockheedmartin.com/en-us/index.html"
                imgSrc="logo_lockheed.svg"
                altText="Lockheed Martin"/>
              <Logo href="https://boomi.com/"
                imgSrc="logo_dell_boomi.svg"
                altText="Dell Boomi"/>
              <Logo href="https://cloud.google.com/"
                imgSrc="logo_google_cloud.svg"
                altText="Google Cloud Platform"/>
            </SponsorTier>
            <SponsorTier>
              <Logo href="https://investor.vanguard.com/corporate-portal/"
                imgSrc="logo_vanguard.svg"
                altText="Vanguard"/>
              <Logo href="https://balsamiq.com/"
                imgSrc="logo_balsamiq.svg"
                altText="Balsamiq"/>
            </SponsorTier>
            <SponsorTier>
              <Logo href="https://www.jetbrains.com/"
                imgSrc="logo_jetbrains.png"
                altText="JetBrains"/>
              <Logo href="https://www.hedera.com/"
                imgSrc="logo_hedera.png"
                altText="Hedera Hashgraph"/>
              <Logo href="https://www.sketchapp.com/"
                imgSrc="logo_sketch.png"
                altText="Sketch"/>
            </SponsorTier>
          </Section>
          <Section heading="Sponsor Us!">
            <Text>
              Please support our hackathon! Benefits include: The ability to
              recruit from the hackathon participants, gaining feedback and new
              users from participants using your products, and recognition for your
              company. More information is in the link to the right. Please
              contact <a href="mailto:teamdragonhacks@gmail.com">teamdragonhacks@gmail.com</a> to
              begin sponsoring!
            </Text>
            <Logo href="https://mlh.org"
              imgSrc="logo_mlh.svg"
              altText="MLH"/>
          </Section>
        </div>
      </div>
    );
  }
}
