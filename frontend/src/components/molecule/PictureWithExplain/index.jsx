import React, { Component, PropTypes } from 'react';

export default class PictureWithExplain extends Component {
  static propTypes = {
  }
  static defaultProps = {
    caption: '',
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '50vh',
          paddingTop: '5vh',
          marginTop: '3vh',
          backgroundColor: '#ECEFF1',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '35vw',
              height: '30vh',
              backgroundImage: `url(${this.props.imageURL})`,
              backgroundSize:     'cover',
              backgroundRepeat:   'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h2>
              1. まずはインストール
            </h2>
            <p>
              Hi man myname is min
            </p>
          </div>
        </div>
      </div>
    );
  }
}


