/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Edited by: Harrison Engoren
 * on my workflow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import Home from './components/home';
import Login from './components/login';
import Forgot from './components/forgot';

export default class backdoor extends Component {
  render() {
    // Notice how I changed the spacing. Personally, I think it makes it more readable
    return (
      <Router>
        <Scene key = "root">
          <Scene key='login' component={Login} title="Login" initial = {true} />
          <Scene key='home' component={Home} title="Home" />
          <Scene key='forgot' component={Forgot} title="Help" />
        </Scene>
      </Router>
    );
  }
}