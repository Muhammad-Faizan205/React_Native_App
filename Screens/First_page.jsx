import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Card_Project } from '../Componets/Card_Project'

const First_page = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 30, width: 299 }}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: '700' }}>
          Let’s make a habits together 🙌
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card_Project />
        <Card_Project />
        <Card_Project />
        <Card_Project />
      </ScrollView>
      <View style={{padding:17}}>
        <Text style={{color:'black',fontSize:22,fontWeight:'600'}}>
          In Progress
        </Text>
      </View>
     <ScrollView>
      <View style={{backgroundColor:'white',padding:15,borderRadius:10,margin:15,borderWidth:2,borderColor:'grey'}}>
        <Text style={{color:'grey',fontSize:15}}>
        Productivity Mobile App
        </Text>
        <Text style={{color:'black',fontSize:20,fontWeight:'500'}}>
        Create Detail Booking
        </Text>
        <Text>
        2 min ago 
        </Text>
      </View>
      <View style={{backgroundColor:'white',padding:15,borderRadius:10,margin:15,borderWidth:2,borderColor:'grey'}}>
      <Text style={{color:'grey',fontSize:15}}>
        Banking Mobile App
        </Text>
        <Text style={{color:'black',fontSize:20,fontWeight:'500'}}>
        Revision Home Page
        </Text>
        <Text>
        5 min ago
        </Text>
      </View>
      <View style={{backgroundColor:'white',padding:15,borderRadius:10,margin:15,borderWidth:2,borderColor:'grey'}}>
      <Text style={{color:'grey',fontSize:15}}>
      Online Course
        </Text>
        <Text style={{color:'black',fontSize:20,fontWeight:'500'}}>
        Working On Landing Page 
        </Text>
        <Text>
        7 min ago
        </Text>
      </View>
     </ScrollView>
    </ScrollView>
  )
}

export default First_page