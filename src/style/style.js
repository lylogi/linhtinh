import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  	container: {
  		flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
  	},
  	text:{
  		justifyContent: 'center',
  		color: 'pink',
  		fontWeight: '600',
  		fontSize: 30,
  		marginBottom: 20,
  		opacity: 0.6,
  	},
  	flex:{
        flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
    	flexDirection: 'column',
  	},
  	backgroundImage: {
   	   	flex: 1,
      	width: null,
      	height: null,
  	},
  	header:{
  		flex: 2,
  		alignSelf: 'stretch',
  		alignItems: 'center',
    	justifyContent: 'flex-end',


  	},
  	textbutton:{
  		color: '#fff',
  		fontSize: 18,
  		fontWeight: '600',
  	},
  	content: {
  		flex: 1,
  		flexDirection: 'row',
  		alignSelf: 'stretch',
  		justifyContent: 'center',
  		alignItems: 'center',
  	},
  	button:{
  		width: 130,
  		height: 50,
  		marginRight: 10,
  		marginLeft: 10,
  		backgroundColor: 'pink',
  		alignItems: 'center',
  		justifyContent: 'center',
  		borderRadius: 5,
  	},
  	footer: {
  		flex: 4,
  		alignSelf: 'stretch',
        justifyContent: 'flex-end',
  	},
  	textfooter: {
  		color: 'pink',
  		fontSize: 13,

  	}

});

export default styles;