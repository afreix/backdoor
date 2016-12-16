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
  Alert
} from 'react-native';

export default class backdoor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          welcome to backdoor
        </Text>
        <View style={styles.container2}>
          <Text style={styles.login}>
            login
          </Text>
          <TextInput 
            style={styles.textfield} 
            defaultValue="username"
            autoCorrect false
          />
          <TextInput
            style={styles.textfield}
            defaultValue="password"
            autoCorrect false
          />
          <Button
            onPress={onButtonPress}
            title="LOGIN"
            color='green'
          />
        </View>
      </View>
    );
  }
}

const onButtonPress = () => {
  Alert.alert('You just entered my backdoor ;)');
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  login: {
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 30,
  },
  textfield: {
    height: 20,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});


AppRegistry.registerComponent('backdoor', () => backdoor);
