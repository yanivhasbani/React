import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 
            When using routes,
            this.props.children will contain
            all of the routes children
            we need to place them inside the HTML though :) 
        */}
        {this.props.children}
      </div>
    );
  }
}
