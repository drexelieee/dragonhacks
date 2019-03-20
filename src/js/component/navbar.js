import 'css/navbar.css';

import React, {Component} from 'react';
import classNames from 'classnames';
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
      <div id="page-navbar" className="navbar">
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
  render() {
    let rootClasses = classNames('navbar__list', {
      'navbar__list--dropdown': this.props.dropdown,
    });
    return (
      <nav className={rootClasses}>
        <div className="navbar__list-item">
          <Clickable navLink href="#home" onClick={scrollToId('home')}>
            Home
          </Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#about" onClick={scrollToId('about')}>
            About
          </Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#schedule" onClick={scrollToId('schedule')}>
            Schedule
          </Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#faq" onClick={scrollToId('faq')}>
            FAQ
          </Clickable>
        </div>
        <div className="navbar__list-item">
          <Clickable navLink href="#sponsors" onClick={scrollToId('sponsors')}>
            Sponsors
          </Clickable>
        </div>
      </nav>
    );
  }
}

function scrollToId(id) {
  let elm = document.getElementById(id);
  let pageNavBar = document.getElementById('page-navbar');
  return (event) => {
    event.preventDefault();
    elm.focus();
    window.scrollTo({
      left: 0,
      top: elm.offsetTop - pageNavBar.offsetHeight,
      behavior: 'smooth',
    });
  };
}
