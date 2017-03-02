import React, { Component } from 'react';

import MenuItem from '../../atom/MenuItem';

import './style.css';

export default class Header extends Component {
  render() {
    const { router } = this.context;
    return (
      <div className="headerWrapper">
        <div className="logo">
          <a href="/" style={{textDecoration: 'none', color: 'white'}}>pv-kit</a>
        </div> 
        <div style={{width: '30vh', marginLeft: '5vh'}}>
          <MenuItem to="/" active={router.isActive('/', true)} name="Home" />
          <MenuItem to="/how" active={router.isActive('/how')} name="How" />
          <MenuItem to="/create" active={router.isActive('/create')} name="Create" />
        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};