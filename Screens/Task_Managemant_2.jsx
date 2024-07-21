import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const Task_Managemant_2 = () => {

  const navigation = useNavigation()

  const Skip_handle_2 = () => {
    navigation.navigate('Bottom-Tabs');

  }

  const Go_handle_2 = () => {
    navigation.navigate('slider screen 3');
    
  }
  return(
    <View style={styles.container}>
    <ImageBackground source={require('../Images/Get_start_2.jpg')} resizeMode="contain" style={styles.image}>
     <View style={{justifyContent:'center', paddingLeft:34 , width:340}}>
     <Text style={styles.text}>
      Task Management 
      </Text>
      <Text style={styles.text1}>
      Work more <Text style={styles.space}>
      Sturctured </Text> and Organized.
      </Text>
     </View>
      <View style={{flexDirection:'row', paddingVertical:25,paddingHorizontal:25, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={Skip_handle_2}>
            <Text style={{color:'#7361ff',fontSize:18}}>
                Skip
            </Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={Go_handle_2}>
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
    // paddingLeft:5
  },
  text1:{
    paddingBottom:50,
    paddingTop:7,
    color:'black',
    fontWeight:'bold',
    fontSize:40,
    // paddingLeft:10
  },
  space:{
    color:'#7361ff'
  }
});

export default Task_Managemant_2