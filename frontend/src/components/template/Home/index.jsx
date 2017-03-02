import React, { Component } from 'react';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import ThumbWithText from '../../molecule/thumbWithText';
import PictureWithExplain from '../../molecule/PictureWithExplain';

import size from '../../../style/size';
import color from '../../../style/color';
import './style.css';


const mainImage = require('../../../asset/movie_maker.jpg');
const charaData = [
  {
    image: require('../../../asset/speed.png'),
    title: '早い',
    content: 'pvを最低5分で作成することができます。'
  },
  {
    image: require('../../../asset/video_upload.png'),
    title: '便利',
    content: '作成した動画は、クリックすることでYoutubeなどに公開できます。'
  },
  {
    image: require('../../../asset/watching_movie.png'),
    title: 'ギャラリー',
    content: '他人が公開した動画を見て、動画制作を学習することができます。'
  }
];
const howtoImage = [

];

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
            height: '100vh',
            backgroundImage: `url(${mainImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            opacity: .7,
          }}
        >
          {/* Jumbotron */}
          <div>
            <span 
              style={{
                fontColor: 'black', 
                fontSize: '10vh',
              }}
            >
              PV-KIT
            </span>
          </div>
          <div>
            <h2>あなたもできるよ。</h2>
            <h2>自分のための動画作り。</h2>
          </div>
          <Link to="/movie/create">
            <RaisedButton
              primary
              label='5分で動画を作成する'
              style={{
                width: '30vw',
              }}
            />
          </Link>
        </div>
        {/* Characteristic */}
        <div 
          style={{
            height: '75vh',
            backgroundColor: '#FFF',
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
            <h1>我々が提供する素晴らしさ</h1>
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
            charaData.map((data,index) => (
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <ThumbWithText 
                  type='default'
                  height='260px'
                  width='260px'
                  imageUrl={data.image}
                  title={data.title}
                  content={data.content}
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
              alignItems: 'center',
              backgroundColor: '#E8F5E9',
              position: 'relative'
            }}
          >
            <div 
              className='arrow-down teal'
            />
            <h1 style={{ textAlign: 'center' }}>簡単動画作成方法</h1>
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