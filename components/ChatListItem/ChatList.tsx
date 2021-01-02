import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { ChatRoom } from '../../types.tsx';
import chatRoom from '../../data/ChatRooms.ts';
import styles from './styles.ts';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';


export type ChatListProps={
	chatRoom: ChatRoom;
}



const ChatList= ( props : ChatListProps ) => {
	const {chatRoom} = props;

  const navigation= useNavigation();

	const user = chatRoom.users[1];  

   const onClick= () =>
  {
    navigation.navigate('ChatRoom', { 
      id: chatRoom.id,
      name: user.name });
  }

	
	return(

<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.leftContainer}>
     <Image source={{ uri: user.imageUri }} style= {styles.avatar} resizeMode={'cover'} />
     <View style={styles.midContainer}>
       <Text style={ styles.username }> { user.name } </Text>
       <Text style={styles.message}> { chatRoom.lastMessage.content } </Text>
     </View>
    </View>
    <Text style={styles.time}>

{/*{ moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY') }*/}
{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}


</Text>
</View>

</TouchableWithoutFeedback>
		);

};

export default ChatList;