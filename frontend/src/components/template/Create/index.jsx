import React, { Component } from 'react';
import './style.css';

import Thumbnail from './Thumbnail';

export default class Pinterest extends Component {
  render() {
    return (
      <div id="thumbnail">
        <p>Hello</p>
        <Thumbnail
          type='round'
          height='200px'
          width='200px'
          imageUrl={require('../../../asset/haedal.png')}
          caption='Hello world!'
        />
        <Thumbnail
          type='circle'
          height='250px'
          width='250px'
          imageUrl={'https://s-media-cache-ak0.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc.jpg'}
          caption='How cute catie!'
        />
        <Thumbnail
          type='circle'
          height='250px'
          width='250px'
          imageUrl={'https://s-media-cache-ak0.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc.jpg'}
          caption='1'
        />
      </div>
    );
  }
}