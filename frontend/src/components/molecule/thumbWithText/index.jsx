import React, { Component, PropTypes } from 'react';

export default class Thumbnail extends Component {
  static propTypes = {
    type: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
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
    const { type, width, height, title, content, imageUrl } = this.props;
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
          height: '100%',
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
          marginTop: '3vh',
          marginBottom: '3vh',
          textAlign: 'center',
          fontSize: '4vh',
        }}>
          {title}
        </div>
        <div style={{
          width: '100%',
          height: '10%',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          {content}
        </div>
      </div>
    );
  }
}
