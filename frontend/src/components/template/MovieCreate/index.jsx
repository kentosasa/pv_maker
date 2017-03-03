import React, { Component } from 'react';

import api from '../../../service/backendService';
import { canvasMovie } from '../../../utils/synthesis';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : 3,
  }
};

const movieMakingData = {
  scenes: []
};

export default class MovieCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      imageSelect: false,
      file: '',
      mediaUrl: '',
      text: '',
      title: '',
      type: '',
      duration: null, // op : 6 , image : 2, movie : 3
      movieMakingData
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addPictureAndText = this.addPictureAndText.bind(this);
    this.makeMovie = this.makeMovie.bind(this);
    this._renderModal = this._renderModal.bind(this);
    this._renderImageAndText = this._renderImageAndText.bind(this);
  }

  babelizeImage(media) {
    return `${require(media)}`
  }

  makeMovie() {
    console.log(this.state.movieMakingData);
    console.log('pressed');
    const processedData = {
      backColor: '#333333',
      textColor: '#ffffff',
      scenes: [
        ...this.state.movieMakingData.scenes.map((scene) => {
          return ({
            ...scene,
          });
        })
        // {
        //   text: 'Promo',
        //   logo: `${require('./img/logo.png')}`,
        //   duration: 6,
        //   opBackColor: '#ffffff',
        //   opBoxColor: '#333333',
        //   opTextColor: '#ffffff',
        //   type: 'op'
        // }
        // ,{
        //   text: 'こんな感じで\n画像と文字が映像になります',
        //   image: `${require('./img/screenshot.PNG')}`,
        //   duration: 2,
        //   type: 'image'
        // },
        // {
        //   text: 'これは動画を簡単に\n作成できるツールです。\n\nスマホで撮影した映像を\n投稿するとこんな感じになります。',
        //   movie: `${require('./img/movie.mov')}`,
        //   duration: 3,
        //   type: 'movie'
        // },
        // {
        //   text: '動画２つ目だ\n\nスマホで撮影した映像を\n投稿するとこんな感じになります。',
        //   movie: `${require('./img/movie.mov')}`,
        //   duration: 10,
        //   type: 'movie'
        // }
      ]
    }
    console.log(processedData);
    // canvasMovie();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  addPictureAndText() {
    const addedScene = [
      ...this.state.movieMakingData.scenes,
      {
        media: this.state.mediaUrl,
        file: this.state.file,
        text: this.state.text,
        type: this.state.type,
        duration: this.state.duration,
      }
    ]
    this.setState({
      movieMakingData: {
        scenes: addedScene,
      },
      media: '',
      mediaUrl: '',
      text: '',
      file: '',
    })
  }

  _renderImageAndText({scene, index}) {
    return (
      <div
        style={{
          marginBottom: '3vh',
        }}
        key={index}
      >
        <Card>
          <CardMedia
            overlay={<CardTitle title={`Scene ${index+1}`} />}
          >
            <img
              src={scene.media}
              height={350}
            />
          </CardMedia>
          <CardText>
            {scene.text}
          </CardText>
          <CardActions style={{zIndex: 0}}>
            <FlatButton label="修正" />
            <FlatButton
              label="削除"
            />
          </CardActions>
        </Card>
      </div>
    )
  }

  _renderModal() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50vw',
            minHeight: '50vh',
          }}
        >
          <h2>画像と内容を追加する</h2>
          <form>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {
                this.state.imageSelect && this.state.file ?
                  <img
                    src={this.state.mediaUrl}
                    height='300'
                    width='600'
                  /> : (
                  <div
                    style={{
                      backgroundColor: 'gray',
                      height: '20vh',
                      width: '50vw',
                      marginBottom: '20px',
                    }}
                  />
                )
              }
                <div
                  style={{
                    marginBottom: '2vh',
                  }}
                >
                  {
                    ['op', 'image', 'movie'].map((type, index) => {
                      let name = '';
                      let duration;
                      switch (type) {
                        case 'op':
                        {
                          name = 'オプニング';
                          duration = 6;
                          break;
                        }
                        case 'image':
                        {
                          name = 'イメージ';
                          duration = 2;
                          break;
                        }
                        case 'movie':
                        {
                          name = '動画';
                          duration = 3;
                          break;
                        }
                        default:
                          break;
                      }
                      console.log(index);
                      return (
                        <RaisedButton
                          primary={ this.state.type === type }
                          style={{
                            margin: '1vw',
                          }}
                          key={index}
                          label={name}
                          onClick={() => {
                            this.setState({
                              type,
                              duration
                            })
                          }}
                        />
                      );
                    })
                  }
                </div>
                <RaisedButton
                  label='画像もしくは、映像を追加する'
                  primary
                  style={{
                    width: '50vw',
                  }}
                >
                  <input
                    type="file"
                    onChange={(e) => {
                      e.preventDefault();

                      let reader = new FileReader();
                      let file = e.target.files[0];

                      reader.onloadend = () => {
                        this.setState({
                          imageSelect: true,
                          file: file,
                          mediaUrl: reader.result
                        });
                      }
                      reader.readAsDataURL(file)
                    }}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      left: 0,
                      width: '100%',
                      opacity: 0,
                    }}
                  />
                </RaisedButton>
                <TextField
                  style={{
                    width: '50vw',
                  }}
                  floatingLabelText="内容を入力してください。"
                  textareaStyle
                  multiLine
                  onChange={(e) => {
                    e.preventDefault();
                    this.setState({
                      text: e.target.value
                    })
                  }}
                  rows={3}
                />
            </div>
          </form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <RaisedButton
              label='貼り付け'
              style={{
                marginRight: '1vw'
              }}
              onClick={() => {
                this.addPictureAndText()
                this.closeModal()
              }}
            />
            <RaisedButton
              onClick={this.closeModal}
              style={{
                marginLeft: '1vw'
              }}
              secondary
              label='close'
            />
          </div>
        </div>
      </Modal>
    )
  }
  render() {
    console.log(this.state);
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10vh',
        minHeight: '100vh',
        alignItems: 'center',
      }}>
        {/* left column */}
        <div
          style={{
            flex: 1,
          }}
        >

        </div>
        {/* middle column */}
        <div
          style={{
            display: 'flex',
            flex: 2,
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '1vh',
            paddingBottom: '1vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h1>PV 作成</h1>
          </div>
          <div>
            <hr/>
              <TextField
                hintText="動画のタイトルを入力してください。"
                fullWidth
                underlineDisabledStyle={false}
                style={{
                  fontSize: '1.5rem'
                }}
                onChange={(e) => {
                  this.setState({
                    title: e.target.value
                  })
                }}
              />
          </div>
          {
            this.state.movieMakingData.scenes.length ?
            this.state.movieMakingData.scenes.map((scene, index) => (
              this._renderImageAndText({scene, index})
            )) :
            <p>まだ画像がありません。</p>
          }
          <RaisedButton
            onClick={this.makeMovie}
            style={{
              marginLeft: '1vw',
              zIndex: 0,
              margin: '1vh'
            }}
            primary
            label='動画を作る'
          />
        </div>
        {/* right column */}
        <div
          style={{
            flex: 1,
          }}
        />
        {/* Fixed button */}
        <div style={{
          position: 'fixed',
          bottom: '10vh',
          right: '10vw'
        }}
        >
          <FloatingActionButton
            onClick={this.openModal}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        {
          this._renderModal()
        }
      </div>
    );
  }
}
