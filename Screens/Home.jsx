import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'

const Home = () => {

  const navigation = useNavigation();

  const navigation_handle = () => {
    navigation.navigate ('Contact')
  }


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'black',fontSize:32, fontWeight:'bold'}}>Home</Text>
    </View>
  )
}

export default Home