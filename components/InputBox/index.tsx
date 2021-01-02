import React,{useState} from 'react';
import {Text,View,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Entypo, Fontisto, Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

const InputBox = () =>
{
	const [message, setMessage] = useState('');

    const onMicrophonePress=()=>
    {
    	console.warn('Mic press');
    }
   const onSendPress=()=>
    {
    	console.warn('Sending: ${message}');
    	//Send to DB
        setMessage('');
    }
    const onPress= ()=>
    {
    	if(!message)
    		onMicrophonePress();
    	else
    		onSendPress();
    }

	return (
		<View style={styles.container}>  
		<View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" color='grey' size={24} />
        <TextInput style={styles.textInput} 
        placeholder={'Type a message'}
        multiline
        value={message}
        onChangeText={setMessage}
        />
        <Entypo name="attachment" color='grey' size={24} style={styles.icon}/>
        { !message && <Fontisto name="camera" color='grey' size={24} style={styles.icon}/>}
		</View>
		<TouchableOpacity onPress={onPress}>
		<View style={styles.buttonContainer}>
		{
			!message
			? <MaterialCommunityIcons name="microphone" size={28} color="white" />
			: <MaterialIcons name="send" size={28} color="white" />
		}
		</View>
		</TouchableOpacity>
		</View>
		);
}

export default InputBox;