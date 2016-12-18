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
  Image
} from 'react-native';

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
      <View style={styles.container}>
        <Image source={require('./backdoor-logo.png')} />
        <Text style={styles.welcome}>
          backdoor
        </Text>
        <View style={styles.container2}>
          <TextInput 
            autoCapitalize="none"
            style={styles.textfield} 
            placeholder='username'
            placeholderTextColor='lightgray'
            autoCorrect = {false}
            onChangeText={(text) => this.setState({username:text})}/>
          <TextInput
            autoCapitalize="none"
            placeholder='password'
            placeholderTextColor='lightgray'
            style={styles.textfield}
            autoCorrect = {false}
            onChangeText = {(text) => this.setState({password:text})}/>
          <View style={styles.container3}>
            <Button
              onPress={onLoginPress}
              title="LOGIN"
              color='green'/>
            <Button
              onPress={onHelpPress}
              title="Forgot?"
              color='orange'/>
          </View>
        </View>
      </View>
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
  container2: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 50,
    margin: 10,
  },
  login: {
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 2,
  },
  textfield: {
    height: 20,
    backgroundColor: 'white',
    margin: 1,
    paddingLeft: 2,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});
