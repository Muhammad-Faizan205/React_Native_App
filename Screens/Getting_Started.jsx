import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Getting_Started = () => {

  const navigation = useNavigation()

  const Get_started= () => {
    navigation.navigate('slider screen 1');
  }

 

  return (
    <View>
    <View style={{backgroundColor:'#7361ff'}}>
      <Image style={{resizeMode:'cover', height:425}} source={require('../Images/Get_start_img.jpg')} />
      </View>
      <View style={{alignItems: 'center', backgroundColor:'white'  }}>
      <View style={{  maxWidth: 310,gap:15 }}>
       <View style={{gap:15}}>
       <Text style={{color:'#7361ff',fontSize:40, paddingTop:20,fontWeight:'bold',textAlign:'center'}}>
          TASKCY
        </Text>
        <Text style={{color:'black',fontSize:33,fontWeight:'bold',textAlign:'center'}}>
          Building Better Workplaces
        </Text>
        <Text style={{color:'grey',fontSize:15,textAlign:'center'}}>
          Create a unique emotional story that describes batter than words
        </Text>
       </View>
      <View style={{alignItems:"center", paddingVertical:15, marginBottom:38}}>
      <TouchableOpacity onPress={Get_started} style={{backgroundColor:'#7361ff', width: 310, height: 45, borderRadius: 9}}>
        <Text style={{color:'white',fontSize:21,textAlign:'center',paddingTop:5,}}>
          Get Started
        </Text>
       </TouchableOpacity>
      </View>
      </View>
     </View>
   
  </View>

  )
}

export default Getting_Started 