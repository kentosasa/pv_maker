import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '80px',
          backgroundColor: '#ECEFF1',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>Made by pv-kit team</span>
        <span> all right reserved </span>
      </div>
    );
  }
}