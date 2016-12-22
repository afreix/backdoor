import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Row from './row';

export default class home extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(musicdata)
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

const musicdata = [
	{
		"title" : "Neighbors",
		"artist" : "J.Cole",
		"album" : "4 Your Eyez Only"
	},
	{
		"title" : "The Guide",
		"artist" : "Kid Cudi",
		"album" : "Passion, Pain, & Demon Slayin'"
	},
	{
		"title" : "Foreplay",
		"artist" : "Jalen Santoy",
		"album" : "Foreplay"
	},
	{
		"title" : "Best Me",
		"artist" : "Sylvan LaCue",
		"album" : "Best Me"
	},
	{
		"title" : "Staying Alive",
		"artist" : "070",
		"album" : "The 070 Project: Chapter One"
	},
];