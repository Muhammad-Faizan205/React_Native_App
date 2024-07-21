import { View, Text, Image, TextInput, KeyboardAvoidingView, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Signin = () => {

    const navigation = useNavigation()

    const Signup_handle = () => {
        navigation.navigate('Sign Up')
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View>
                    <View style={{ padding: 30, gap: 20 }}>
                        <Text style={{ color: 'black', fontSize: 34, fontWeight: '700' }}>
                            Welcome Back
                        </Text>
                        <Text style={{ color: 'grey', fontSize: 17, width: 240 }}>
                            Please inter your email address and password for login
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, gap: 18 }}>
                        <View style={{}}>
                            <Text style={{color:'black',fontSize:18}}>
                                Email
                            </Text>
                            <TextInput style={{ fontSize: 17, borderWidth: 1, height:60, borderColor: 'grey', borderRadius: 5 }} placeholder='Enter your Email' keyboardType='email-address'>
                            </TextInput>
                        </View>
                        <View>
                            <Text style={{color:'black',fontSize:18}}>
                                Passwords
                            </Text>
                            <TextInput style={{ fontSize: 17, borderWidth: 1, height:60,borderColor: 'grey', borderRadius: 5, }} placeholder='Enter your Password' keyboardType='visible-password'>
                            </TextInput>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity>
                                <Text style={{fontSize:15,paddingRight:6,color:'grey',paddingBottom:20
                                }}>
                                    Forget Password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',paddingBottom:20}}>
                            <TouchableOpacity style={{ backgroundColor: '#7361ff', width: 300, height: 45, borderRadius: 25 }}>
                                <Text style={{ color: 'white', fontWeight:'600',fontSize: 25, textAlign: 'center', paddingTop: 5, }}>
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',paddingBottom:20}}>
                            <Text style={{color:'black',fontSize:16 ,paddingBottom:20}}>
                                Signin With
                            </Text>
                            <View style={{flexDirection:'row',gap:40,paddingVertical:20 ,paddingBottom:20}}>
                                <Image style={{width:50,height:50,borderRadius:10}} source={require('../Images/th.jpeg')}/>
                                <Image style={{width:50,height:50,borderRadius:10}} source={require('../Images/iphone.jpeg')}/>
                                </View>
                                <View style={{}}>
                                    <Text style={{color:'black',fontSize:15}}>
                                    Not registrar yet? <TouchableOpacity onPress={Signup_handle}><Text style={{color:'#7361ff',top:2}}>
                                    Sign Up</Text></TouchableOpacity> 
                                    </Text>
                            </View>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Signin