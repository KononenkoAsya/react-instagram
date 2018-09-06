import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    console.log(this.props.test);
    return (
      <div className="App">

      </div>
    );
  }
}

export default connect(
  state => ({
    test: state
  }),
  dispatch => ({})
)(App);
