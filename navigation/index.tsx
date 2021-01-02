import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { View ,Text } from 'react-native';
import Color from '../constants/Colors.ts';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Feather, Ionicons, Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
//import { Ionicons } from '@expo/vector-icons';
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    /*ViewContainer.navigationOptions = {
  header: {
    style: { shadowColor: 'transparent' },
  },
};*/
    <Stack.Navigator screenOptions={{ 
      headerStyle:
      {
        backgroundColor: Color.dark.background,
        borderBottomWidth: 0,
      },
      headerTintColor: Color.light.tint,
      headerTitleAlign: 'left',
      headerTitleStyle:
      {
         fontWeight: 'bold',
      },
     }}>
      
      <Stack.Screen
       name="Root"
       component={MainTabNavigator}
       options={{
        headerTitle:'Chat App',
        headerRight: () =>
        {
          return(
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width:60 , marginRight: 5 }}>
          <Octicons name='search' color="white" size={22} />
          <MaterialCommunityIcons name="dots-vertical" color="white" size={26} />
          </View>
          );
        }
       }}
        />
      <Stack.Screen
       name="ChatRoom" 
       component={ChatRoomScreen} 
       options={ ({route})=>(
        {
        title: route.params.name,
        headerRight: () =>
        (
              <View style={{flexDirection:'row', justifyContent:'space-between', width:100, marginRight:10}}>
              <FontAwesome5 name="video" color="white" size={22} />
              <MaterialIcons name="call" color="white" size={22} />
              <MaterialCommunityIcons name="dots-vertical" color="white" size={24} />
              </View>
        )
        }
       )} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
