import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class MenuItem extends Component {
  render() {
    const { to, name, active } = this.props;
    return (
      <Link to={to} className={`menuItem ${active ? 'active' : ''}`}>
        {name}
      </Link>
    );
  }
}