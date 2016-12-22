import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Row = (props) => (
	<View style={styles.container}>
		<Text style = {styles.text}>
			{`${props.title}`}
		</Text>
		<Text style = {styles.text}>
			{`${props.artist}`}
		</Text>
		<Text style = {styles.text}>
			{`${props.album}`}
		</Text>
	</View>
	);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		flex: 1,
		marginLeft: 1,
		fontSize: 12,
		justifyContent: 'flex-start',
	},
	photo: {
		height: 40,
		width: 40,
		borderRadius: 20,
	},
});

export default Row;