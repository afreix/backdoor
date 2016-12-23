import React, { Component } from 'react';
import { ListView, Text } from 'react-native';

import { login } from '../api';

export default class SpotifyTester extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    login();
  }

  render() {
    return (
      <Text>Hello Andrew!</Text>
    );
  }
}
