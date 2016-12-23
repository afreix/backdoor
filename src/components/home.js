import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Row from './row';

export default class Home extends Component {
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
					style={styles.container} 
					dataSource = {this.state.dataSource}
					renderRow={(data) => <Row {...data} />}
					renderSeparator={(sectionId, rowId) => <View key={rowId} style = {styles.separator} />} />
		);
	}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    paddingLeft: 2,
  },
  separator: {
  	height: StyleSheet.hairlineWidth,
  	backgroundColor: 'black',
  },
});

const musicdata = [
	{
		"title" : "Neighbors",
		"artist" : "J.Cole",
		"album" : "4 Your Eyez Only",
		"picture" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/4_Your_Eyes_Only.jpg/220px-4_Your_Eyes_Only.jpg"

	},
	{
		"title" : "The Guide",
		"artist" : "Kid Cudi",
		"album" : "Passion, Pain, & Demon Slayin'",
		"picture" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Kid_Cudi's_Passion,_Pain_%26_Demon_Slayin'_Cover.jpg/220px-Kid_Cudi's_Passion,_Pain_%26_Demon_Slayin'_Cover.jpg"
	},
	{
		"title" : "Foreplay",
		"artist" : "Jalen Santoy",
		"album" : "Foreplay",
		"picture" : "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/4_Play_(Cold_Sweat_album).jpg/220px-4_Play_(Cold_Sweat_album).jpg"
	},
	{
		"title" : "Best Me",
		"artist" : "Sylvan LaCue",
		"album" : "Best Me",
		"picture" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Far_From_Familiar.jpg/220px-Far_From_Familiar.jpg"
	},
	{
		"title" : "Staying Alive",
		"artist" : "070",
		"album" : "The 070 Project: Chapter One",
		"picture" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Projectxepcover.png/220px-Projectxepcover.png"
	},
];