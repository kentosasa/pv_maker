import React, { Component } from 'react';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import ThumbWithText from '../../molecule/thumbWithText';
import PictureWithExplain from '../../molecule/PictureWithExplain';

import './style.css';

const charaImage = [
  require('../../../asset/haedal.png'),
  require('../../../asset/haedal.png'),
  require('../../../asset/haedal.png'),
]

export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', backgroundColor: 'blue'
          }}
        >
          {/* Jumbotron */}
          <div>
          <h1>Hello</h1>
          </div>
          <div>
          <h2>I love you</h2>
          </div>
          <Link to="/movie/create">
            <RaisedButton
              primary
              label='動画を作成する'
              style={{
                width: '300px',
              }}
            />
          </Link>
        </div>
        {/* Characteristic */}
        <div 
          style={{
            height: '75vh',
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '15vh',
              width: '100vw',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>Hello world!</h1>
          </div>
          <div
            style={{
              flex: 1,
              width: '100vw',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
          {
            charaImage.map((image,index) => (
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <ThumbWithText 
                  type='round'
                  height='250px'
                  width='250px'
                  imageUrl={image}
                  caption=''
                />
              </div>
            ))
          }
          </div>

        </div>
        {/* How to? */}        
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white'
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '20vh',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h1 style={{ textAlign: 'center' }}>How to?</h1>
          </div>
          {/* content */}
          <PictureWithExplain 
            imageURL={require('../../../asset/haedal.png')}
          />
          <PictureWithExplain 
            imageURL={require('../../../asset/haedal.png')}
          />
          <PictureWithExplain 
            imageURL={require('../../../asset/haedal.png')}
          />
        </div>
        {/* Demo video */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '80vh',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>デモ 動画</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/aYi9rjg1gZA" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}