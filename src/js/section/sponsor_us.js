import React, { Component } from 'react';
import '../../css/section/sponsor_us.css';

export default class SponsorUs extends Component {
  render() {
    return (
      <section id="sponsorUs">
        <header>
          <h2>Sponsor Us!</h2>
        </header>
        <p>
          Please support our hackathon! Benefits include: The ability to
          recruit from the hackathon participants, gaining feedback and new
          users from participants using your products, and recognition for your
          company. More information is in the link to the right. Please
          contact <a href="mailto:teamdragonhacks@gmail.com">teamdragonhacks@gmail.com</a> to
          begin sponsoring!
        </p>
        <div className="additional-info">
          <div style={{fontWeight: "bold"}}>In partnership with</div>
          <div>
            <a href="https://mlh.io/">
              <img src={require("../../img/logo_mlh.svg")} width="200" alt="MLH"/>
            </a>
          </div>
          <div>
            <a className="button"
              href={require('../../pdf/Dragon_Hacks_2018_Sponsorship_Document.pdf')}>
              Full&nbsp;Sponsorship&nbsp;Information
            </a>
          </div>
        </div>
      </section>
    );
  }
}
