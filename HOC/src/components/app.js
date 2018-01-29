import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './header';

export default class App extends Component {
  render() {
    console.log("Sss");
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}