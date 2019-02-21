import React, { Component } from 'react';
import '../../css/section/navbar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  onResize = () => {
    if (window.innerWidth < 625) {
      this.setState({showMenu: true});
    } else {
      this.setState({showMenu: false});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return (
      <nav id="navbar">
        <span>Dragon<span className="accent">Hacks</span></span>
        {this.state.showMenu ? (
          <NavBarMenu/>
        ) : (
          <NavBarList class="inline"/>
        )}
      </nav>
    );
  }
}

class NavBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandMenu: false,
    }
  }

  toggleMenu = () => {
    this.setState((state) => ({
      expandMenu: !state.expandMenu
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleMenu} className="fas fa-bars"></button>
        {this.state.expandMenu && <NavBarList class="expanded"/>}
      </div>
    );
  }
}

class NavBarList extends Component {
  render() {
    return (
      <ul id="navbar-list" className={this.props.class}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
      </ul>
    );
  }
}
