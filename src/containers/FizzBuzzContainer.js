import React, { Component } from 'react';

import FizzBuzz from '../components/FizzBuzz';

export default class FizzBuzzContainer extends Component {
  state = {
    count: 0,
    fizzBuzz: '',
  };

  _fizzBuzz = num => {
    /**
     * It's OK...Google how to solve FizzBuzz 😸
     */
    let fizzBuzz = '';
    return fizzBuzz;
  };

  _handleIncrementClick = () => {
    console.log('+ click');
  };

  _handleDecrementClick = () => {
    console.log('- click');
  };

  render() {
    return <FizzBuzz />;
  }
}
