import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({

container: 
{
flexDirection: 'row',
width: '100%',
justifyContent: 'space-between',
padding :10,
},
midContainer:
{
  justifyContent: 'space-around'
},
leftContainer: 
{
flexDirection: 'row',
},
username:
{
 fontWeight: 'bold',
 fontSize: 16,
},
message:
{
	fontSize:16,
	color: 'grey',
},
time:
{
	fontSize:14,
	color: 'grey',
},
avatar: 
{
	width: 60,
	height: 60,
	borderRadius: 50,
	marginRight: 15,
}
});

export default styles;