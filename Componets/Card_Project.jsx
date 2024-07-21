import { View, Text, Image } from 'react-native'
import React from 'react'

const Card_Project = () => {
  return (
    <View>
       <View style={{backgroundColor:'#7361ff',width:300,padding:20,marginLeft:20,borderRadius:20}}>
        <Text style={{color:'white',fontSize:21,fontWeight:'600'}}>
        Application Design
        </Text>
        <Text style={{color:'white',fontSize:15,paddingBottom:15}}>
        UI Design Kit
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:5}}>
          <Image style={{}} resizeMode='cover' source={require('../Images/People[1].png')}/>
          <Text style={{color:'white',fontSize:16,paddingVertical:5}}>
            Progress
          </Text> 
          <Text style={{color:'white',fontSize:16,fontWeight:'500',paddingVertical:5}}>
            50/80
          </Text>
        </View>
      </View>
    </View>
  )
}

export {Card_Project}