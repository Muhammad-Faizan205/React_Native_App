import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const Task_Managemant_3 = () => {
  const navigation = useNavigation()


  const Go_handle_3 = () => {
    navigation.navigate('Bottom-Tabs');
    
  }

  return(
    <View style={styles.container}>
    <ImageBackground source={require('../Images/Get_start_3.jpg')} resizeMode="contain" style={styles.image}>
     <View style={{justifyContent:'center' ,paddingLeft:34, width:270}}>
     <Text style={styles.text}>
      Task Management 
      </Text>
      <Text style={styles.text1}>
      Manage your <Text style={styles.space}>
      Task</Text> quickly for Results.
      </Text>
     </View>
      <View style={{flexDirection:'row', paddingVertical:25,paddingHorizontal:25, justifyContent:'flex-end'}}>
     
       
        <TouchableOpacity onPress={Go_handle_3}>
        <AntDesign  style={{color:'black',fontWeight:'bold',fontSize:20 }} name='arrowright' />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f4f4f4'
  },
  image: {
    flex: 1,
    justifyContent:'flex-end',
  },
  text: {
    color:'#7361ff',
    fontSize:17,
    fontWeight:'bold'
 
  },
  text1:{
    paddingBottom:50,
    paddingTop:7,
    color:'black',
    fontWeight:'bold',
    fontSize:40,
    
  },
  space:{
    color:'#7361ff'
  }
});

export default Task_Managemant_3