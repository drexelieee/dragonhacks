import '../css/navbar.css';

import React, {Component} from 'react';
import Text from './text';
import Clickable from './clickable';

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
      <div className="navbar">
        <div className="navbar__logo">
          <Text inline bigger>
            Dragon<Text inline bigger accent>Hacks</Text>
          </Text>
        </div>
        {this.state.showMenu ? (
          <NavBarMenu/>
        ) : (
          <NavBarList/>
        )}
      </div>
    );
  }
}

class NavBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenu = () => {
    console.log('click');
    this.setState((state) => ({
      open: !state.open
    }));
  }

  render() {
    return (
      <div className="navbar__menu">
        <Clickable button onClick={this.toggleMenu}>
          <span className="fas fa-bars"/>
        </Clickable>
        {this.state.open && <NavBarList dropdown/>}
      </div>
    );
  }
}

class NavBarList extends Component {
  static modifiers = {
    dropdown: 'navbar__list--dropdown',
  };

  getModifiers = () => {
    let mods = ['navbar__list'];
    for (let prop in this.props) {
      if (this.props.hasOwnProperty(prop) && NavBarList.modifiers[prop]) {
        mods.push(NavBarList.modifiers[prop]);
      }
    }
    return mods.join(' ');
  }

  render() {
    return (
      <nav className={this.getModifiers()}>
        <div className="navbar__list-item">
          <Clickable navLink href="#home">Home</Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#about">About</Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#schedule">Schedule</Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#faq">FAQ</Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#sponsors">Sponsors</Clickable>
        </div>
      </nav>
    );
  }
}
