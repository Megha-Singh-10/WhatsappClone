import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
//import { Text, View, Image } from 'react-native';
import ChatList from '../components/ChatListItem/ChatList.tsx';
import chatRoom from '../data/ChatRooms.ts';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
   <FlatList 
   style={{width: "100%"}}
   data={chatRoom}
   renderItem={({item})=>
    <ChatList chatRoom={item} />}
  /*  keyExtractor={({ item }) => item.id}*/
   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
