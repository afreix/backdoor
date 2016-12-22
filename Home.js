import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Row from './row';
import musicdata from './musicdata'

export default class home extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([musicdata])
		};
	}

	render() {
		return (
				<ListView
					style = {styles.container} 
					dataSource = {this.state.dataSource}
					renderRow={(data) => <Row {...data} />}
					renderSeparator={(sectionId, rowId) => <View key={rowId} style = {styles.separator} />}
				/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    paddingLeft: 2,
  },
  separator: {
  	flex: 1,
  	height: StyleSheet.hairlineWidth,
  	backgroundColor: 'black',
  },
});