<View style={styles.container}>
        <Image source={require('./backdoor-logo.png')} />
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
          onPress={onLoginPress}
          title="LOGIN"
          color='green'/>
        <Button
          onPress={onHelpPress}
          title="Forgot?"
          color='orange'/>
        </View>