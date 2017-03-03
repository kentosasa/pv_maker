import React, { Component } from 'react';

export default class Empty extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '10vh',
        }}
      >
        <h1>残念だけどまだまだなにもないよ。ヘヘッ</h1>
        <h1>{`> - <`}</h1>
      </div>
    );
  }
}
