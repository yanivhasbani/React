import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//setup test env to run like a browser in the CMD
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
// init jquery with the fake dom we created in JSDom
// $ - the jquery library handler by default
const $ = _$(window);

// Setup chai-jquery
chaiJquery(chai, chai.util, $);

// Build 'renderComponent' - helper to render a given react component
function renderComponent(ComponentClass, props = {}, state = {}) {
  // https://reactjs.org/docs/test-utils.html#renderintodocument
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  //We wrap our React with JQuery;
  //This is done so we can use chai-jquery.
  return $(ReactDOM.findDOMNode(componentInstance));// produce HTML
}

// Build helper for simulating events
//$('div').simulate for example
// this = $('div')
$.fn.simulate = function(eventName, value) {
  if (value) {
    //jquery to set the html element
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
