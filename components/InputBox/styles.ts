import {StyleSheet} from 'react-native';
import Color from '../../constants/Colors';

const styles= StyleSheet.create({
	container:
	{
		flexDirection: 'row',
		 margin:10,
		 alignItems:'flex-end',
	},
	icon:
	{
		marginHorizontal:5,
	},
	mainContainer:
	{
	     flexDirection: 'row',
	     borderRadius: 50,
	     padding: 10,
	     backgroundColor: 'white',
	     flex: 1,
	     marginRight:10,
	},
	textInput:
	{
       flex:1,
       marginHorizontal:10,
       borderColor:'white',
	},
	buttonContainer:
	{
		color: 'white',
		backgroundColor: '#0c8157',
		borderRadius:'100%',
		height:45,
		padding:10,
		width: 45,
		justifyContent: 'center',
		alignItems: 'center',
	}

})

export default styles;