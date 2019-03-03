import './css/app.css';

import React, { Component } from 'react';
import NavBar from './js/section/navbar';
import Section from './js/section.js';
import Home from './js/section/home';
import About from './js/section/about';
import Schedule from './js/section/schedule';
import FAQ from './js/section/faq';
import Sponsors from './js/section/sponsors';
import SponsorUs from './js/section/sponsor_us';

export default class App extends Component {
  static data = {
    year: 2019,
  };

  render() {
    return (
      <div>
        <NavBar/>
        <Section/>
        <Section heading={"About DragonHacks " + App.data.year}/>
        <Section heading="Schedule"/>
        <Section heading="FAQ"/>
        <div style={{backgroundColor: "var(--bg-color-light)"}}>
          <Section heading="Sponsors"/>
          <Section heading="Sponsor Us!"/>
        </div>
      </div>
    );
  }
}
