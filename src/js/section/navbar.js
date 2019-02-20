import React, { Component } from 'react';
import '../../css/section/navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <nav id="navbar">
        <span>Dragon<span className="accent">Hacks</span></span>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
        </ul>
      </nav>
    );
  }
}
