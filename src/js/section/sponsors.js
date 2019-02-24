import React, { Component } from 'react';
import SponsorItem from '../component/sponsor_item';
import '../../css/section/sponsors.css';

export default class Sponsors extends Component {
  render() {
    return (
      <section id="sponsors">
        <header>
          <h2>Sponsors</h2>
        </header>
        <div>
          <div className="package gold">
            <SponsorItem link="https://www.ieee.org/"
              logo={require("../../img/logo_ieee.png")}
              alt="IEEE UPP"/>
            <SponsorItem link="https://drexel.edu/engineering/"
              logo={require("../../img/logo_drexel_ece.png")}
              alt="Drexel ECE Dept."/>
            <SponsorItem link="https://drexel.edu/provost/"
              logo={require("../../img/logo_drexel_provost.jpg")}
              alt="Drexel Office of the Provost"/>
          </div>
          <div className="package silver">
            <SponsorItem link="http://www.lutron.com/en-US/Pages/default.aspx"
              logo={require("../../img/logo_lutron.png")}
              alt="Lutron"/>
            <SponsorItem link="https://www.lockheedmartin.com/en-us/index.html"
              logo={require("../../img/logo_lockheed.svg")}
              alt="Lockheed Martin"/>
            <SponsorItem link="https://boomi.com/"
              logo={require("../../img/logo_dell_boomi.svg")}
              alt="Dell Boomi"/>
            <SponsorItem link="https://cloud.google.com/"
              logo={require("../../img/logo_google_cloud.svg")}
              alt="Google Cloud Platform"/>
          </div>
          <div className="package bronze">
            <SponsorItem link="https://investor.vanguard.com/corporate-portal/"
              logo={require("../../img/logo_vanguard.svg")}
              alt="Vanguard"/>
            <SponsorItem link="https://balsamiq.com/"
              logo={require("../../img/logo_balsamiq.svg")}
              alt="Balsamiq"/>
          </div>
          <div className="package none">
            <SponsorItem link="https://www.jetbrains.com/"
              logo={require("../../img/logo_jetbrains.png")}
              alt="JetBrains"/>
            <SponsorItem link="https://www.hedera.com/"
              logo={require("../../img/logo_hedera.png")}
              alt="Hedera Hashgraph"/>
            <SponsorItem link="https://www.sketchapp.com/"
              logo={require("../../img/logo_sketch.png")}
              alt="Sketch"/>
          </div>
        </div>
      </section>
    );
  }
}
