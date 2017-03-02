import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const movie = [
  {
    title: 'hello man',
    scenes: [
      {
        image: 'sdkflsd',
        text: 'alsdkfjlsdkajf'
      },
      {
        image: 'sdkfjsdlfj',
        text: 'sdfjsdljsldfajdal;',
      },
      {
        hello: 'sdlkfjlsd',
        text: 'sldkfjwlejlw',
      },
    ]
  }
]

export default class MovieCreate extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      scenes: [
        // image, text
      ]
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this._renderModal = this._renderModal.bind(this);
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
              <div
                style={{
                  backgroundColor: 'gray',
                  height: '20vh',
                  width: '50vw',
                  marginBottom: '20px',
                }}
              >
              </div>
              <RaisedButton 
                label='画像を追加'
                primary
                style={{
                  width: '50vw',
                }}
              />
              <TextField
                style={{
                  width: '50vw',
                }}
                floatingLabelText="内容を入力してください。"
                textareaStyle
                multiLine
                rows={5}
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
            backgroundColor: 'gray',
            minHeight: '100vh',
          }}
        >

        </div>
        {/* middle column */}
        <div
          style={{
            display: 'flex',
            flex: 4,
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
        </div>
        {/* right column */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'gray',
            minHeight: '100vh',
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