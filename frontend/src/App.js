import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './components/organism/Header';
import Footer from './components/organism/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            minHeight: '100vh'
          }}
        >
          <Header />
          <MuiThemeProvider>
            <div id="body-wrapper">
              {this.props.children}
            </div>
          </MuiThemeProvider>
        </div>
        <Footer />
      </div>
    );
  }
}
