import React, { Component } from 'react';
import Sponsor from './component/sponsor';
import './css/app.css';

export default class App extends Component {
  static year = 2019;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <section id="home">
          <h1>DragonHacks!</h1>
          <div>Drexel's very own 24-hour hackathon!</div>
          <div>
            <a href="https://goo.gl/maps/EQj1FVXS1UG2">
              <span className="fas fa-map-marker-alt">
                &nbsp;Bossone Research Enterprise Center
              </span>
            </a>
          </div>
          <div>
            <time className="fas fa-calendar" dateTime="2019-04-20">
              &nbsp;April 20<sup>th</sup>-21<sup>st</sup> {App.year}
            </time>
          </div>
        </section>


        <section id="about">
          <h2>About DragonHacks {App.year}</h2>
          <p>
            DragonHacks is Drexel University's 24 hour hardware-focused
            hackathon event hosted by Drexel University IEEE in {App.year} in
            the Bossone Research Enterprise Center. DragonHacks {App.year} is
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


        <section id="sponsors">
          <h2>Sponsors</h2>
          <Sponsor link="https://drexel.edu/engineering/"
                   logo={require("./img/logo_drexel_ece.png")}/>
          <Sponsor link="http://www.lutron.com/en-US/Pages/default.aspx"
                   logo={require("./img/logo_lutron.jpg")}/>
          <Sponsor link="https://boomi.com/"
                   logo={require("./img/logo_dell_boomi.svg")}/>
          <Sponsor link="https://drexel.edu/provost/"
                   logo={require("./img/logo_drexel_provost.jpg")}/>
          <Sponsor link="https://www.hedera.com/"
                   logo={require("./img/logo_hedera.png")}/>
          <Sponsor link="https://investor.vanguard.com/corporate-portal/"
                   logo={require("./img/logo_vanguard.svg")}/>
          <Sponsor link="https://www.jetbrains.com/"
                   logo={require("./img/logo_jetbrains.png")}/>
          <Sponsor link="https://www.lockheedmartin.com/en-us/index.html"
                   logo={require("./img/logo_lockheed.svg")}/>
          <Sponsor link="https://www.ieee.org/"
                   logo={require("./img/logo_ieee.png")}/>
          <Sponsor link="https://www.sketchapp.com/"
                   logo={require("./img/logo_sketch.png")}/>
        </section>


        <section id="faq">

        </section>


        <section id="sponsorUs">
          <h2>Sponsor Us!</h2>
          <p>
            Please support our hackathon! Benefits include: The ability to
            recruit from the hackathon participants, gaining feedback and new
            users from participants using your products, and recognition for your
            company. More information is in the link to the right. Please
            contact <a href="mailto:teamdragonhacks@gmail.com">teamdragonhacks@gmail.com</a> to
            begin sponsoring!
          </p>
          <div>
            In partnership with
          </div>
          <img src={require("./img/logo_mlh.svg")} width="300"/>
        </section>


        <footer>
          Copyright &copy; {App.year} Technical Chairs, Drexel IEEE. All Rights Reserved.
        </footer>
      </div>
    );
  }
}
