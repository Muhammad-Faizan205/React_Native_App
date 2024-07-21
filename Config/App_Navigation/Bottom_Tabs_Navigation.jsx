import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from "react-native-vector-icons/AntDesign";
import Signin from '../../Screens/signin';
import First_page from '../../Screens/First_page';
import Create_Team from '../../Screens/Create_Team';

const Tab = createBottomTabNavigator();

const Bottom_Tabs_Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#7361ff',
        tabBarInactiveBackgroundColor: 'white'
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons color={color} name='account' size={25} />
          }
        }}
        name='Sign In' component={Signin} />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Octicons color={color} name='project' size={25} />
          }
        }}
        name='Project' component={First_page} />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign color={color} name='team' size={25} />
          }
        }}
        name='Team' component={Create_Team} />

    </Tab.Navigator>
  )
}

export default Bottom_Tabs_Navigation