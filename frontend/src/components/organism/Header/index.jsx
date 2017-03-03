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
        <div
          style={{
            width: '30vw',
            height: '10vh',
            marginLeft: '5vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MenuItem to="/" active={router.isActive('/', true)} name="ホーム" />
          <MenuItem to="/gallery" active={router.isActive('/gallery')} name="ギャラリー" />
          <MenuItem to="/movie/create" active={router.isActive('/movie/create')} name="動画作成" />
          <MenuItem to="/me" active={router.isActive('/me')} name="動画管理" />
        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};