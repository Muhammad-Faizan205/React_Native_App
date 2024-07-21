import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const Task_Managemant_1 = () => {
  const navigation = useNavigation()

  const Skip_handle_1 = () => {
    navigation.navigate('Bottom-Tabs'); 

  }

  const Go_handle_1 = () => {
    navigation.navigate('slider screen 2');

    
  }
  return(
    <View style={styles.container}>
    <ImageBackground source={require('../Images/Get_start_1.jpg')} resizeMode="contain" style={styles.image}>
     <View style={{justifyContent:'center' ,paddingLeft:34, width:310}}>
     <Text style={styles.text}>
      Task Management 
      </Text>
      <Text style={styles.text1}>
      Let's create a <Text style={styles.space}>
      Space </Text>for your workflows.
      </Text>
     </View>
      <View style={{flexDirection:'row', paddingVertical:25,paddingHorizontal:25, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={Skip_handle_1}>
            <Text style={{color:'#7361ff',fontSize:18}}>
                Skip
            </Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={Go_handle_1}>
        <AntDesign  style={{color:'black',fontWeight:'bold',fontSize:20 }} name='arrowright' />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
  )
};

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

export default Task_Managemant_1