import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Row = (props) => (
	<View style={styles.container}>
		<View style={styles.container2}>
			<Text style = {styles.text}>
				{`${props.title}`}
			</Text>
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
		padding: 10,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	container2: {
		flexDirection: 'row',
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