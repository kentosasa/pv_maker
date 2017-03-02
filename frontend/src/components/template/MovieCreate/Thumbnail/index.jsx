import React, { Component, PropTypes } from 'react';

export default class Thumbnail extends Component {
  static propTypes = {
    type: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    caption: PropTypes.string,
  }
  static defaultProps = {
    caption: '',
  }
  _renderType(type) {
    switch (type) {
      case 'round':
        return '15%';
      case 'circle':
        return '50%';
      default:
        return '0%';
    }
  }
  render() {
    const { type, width, height, caption, imageUrl } = this.props;
    return (
      <div style={{
        display: 'inline-block',
        flexDirection: 'row',
        width: width,
        height: height,
        margin: '10px',
      }}
      >
        <div style={{
          width: '100%',
          height: '90%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: `url(${imageUrl})`,
          borderRadius: this._renderType(type),
        }}
        />
        <div style={{
          width: '100%',
          height: '10%',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          {caption}
        </div>
      </div>
    );
  }
}