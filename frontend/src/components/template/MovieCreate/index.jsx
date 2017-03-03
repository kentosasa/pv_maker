import React, { Component } from 'react';

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
  scenes: [

  ]
}

export default class MovieCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      imageSelect: false,
      imageSelectUrl: '',
      imagePreviewUrl: '',
      text: '',
      title: 'hello man',
      movieMakingData
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addPictureAndText = this.addPictureAndText.bind(this);
    this._renderModal = this._renderModal.bind(this);
    this._renderImageAndText = this._renderImageAndText.bind(this);
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
        image: this.state.imagePreviewUrl,
        text: this.state.text,
      }
    ]
    this.setState({
      movieMakingData: {
        scenes: addedScene,
      },
      imagePreviewUrl: '',
      text: ''
    })
  }

  _renderImageAndText({scene, index}) {
    return (
      <div
        style={{
          marginBottom: '3vh',
        }}
      >
        <Card>
          <CardMedia
            overlay={<CardTitle title={`Scene ${index+1}`} />}
          >
            <img
              src={scene.image}
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
                this.state.imageSelect && this.state.imageSelectUrl ?
                  <img 
                    src={this.state.imagePreviewUrl}
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
                <RaisedButton 
                  label='画像を追加'
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
                          imageSelectUrl: file,
                          imagePreviewUrl: reader.result
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
            <h2 style={{paddingLeft: '1vw'}}>題名：{this.state.title}</h2>
            <hr/>
          </div>
          {
            this.state.movieMakingData.scenes.map((scene, index) => (
              this._renderImageAndText({scene, index})
            ))
          }
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