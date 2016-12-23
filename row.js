import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Row = (props) => (
	<View style={styles.container}>
		<View style={styles.container3}>
		<Text style = {styles.text}>
			{`${props.title}`}
		</Text>
		<Image source={{ uri: props.picture}} style={styles.photo} />
		</View>
		<View style = {styles.container2}>
			<Text style = {styles.ext}>
				{`${props.artist}`} • {`${props.album}`}
			</Text>
		</View>
	</View>
	);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: 'column',
		backgroundColor: 'limegreen',
	},
	container2: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor:'lightblue',
	},
	container3: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor:'pink',

	},
	text: {
		flex: 1,
		marginLeft: 1,
		justifyContent: 'flex-start',
		fontWeight: 'bold',
		fontSize: 18,
	},
	ext: {
		flex: 1,
		marginLeft: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	photo: {
		height: 40,
		width: 40,
	},
});

export default Row;