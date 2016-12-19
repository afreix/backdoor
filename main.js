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
  Router,
  Scene
} from 'react-native';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

export default class backdoor extends Component {
  constructor() {
    super();
    this.state= {
      username: '',
      password: ''
    }
  }
  render() {
    // Notice how I changed the spacing. Personally, I think it makes it more readable
    return (
      <Router>
        <Scene key = "root">
          <Scene key="pageOne" component={PageOne} title = "PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title = "PageTwo" />
        </Scene>
      </Router>
    );
  }
}

const onLoginPress = () => {
  Alert.alert('you just entered my backdoor ;)');
}

const onHelpPress = () => {
  Alert.alert('nothing to forget yet silly');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 50,
    margin: 10,
  },
  textfield: {
    height: 20,
    backgroundColor: 'white',
    marginTop: 1,
    marginBottom: 1,
    margin: 20,
    paddingLeft: 2,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});
