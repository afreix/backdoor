import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux'

export default class Login extends Component {
  constructor() {
    super();
    this.state= {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/backdoor-logo.png')} />
        <Text style={styles.welcome}>
          backdoor
        </Text>
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
          secureTextEntry = {true}
          autoCorrect = {false}
          onChangeText = {(text) => this.setState({password:text})}/>
        <Button
          onPress={Actions.home}
          title="LOGIN"
          color='green'/>
        <Button
          onPress={Actions.forgot}
          title="Forgot?"
          color='orange'/>
        </View>
      );
  }
}

const onLoginPress = () => {
  Alert.alert('yo');
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
    // height: 20,
    width: 200,
    backgroundColor: 'white',
    marginTop: 1,
    marginBottom: 1,
    margin: 20,
    paddingLeft: 2,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});