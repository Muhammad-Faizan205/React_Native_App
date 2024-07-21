import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Contact = () => {

  const navigation = useNavigation();

  const navigation_handle = () => {
    navigation.goBack();
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:32,fontWeight:'bold',color:'black'}}>Contact</Text>
    </View>
  )
}

export default Contact