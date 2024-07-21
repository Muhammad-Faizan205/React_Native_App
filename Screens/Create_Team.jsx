import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";

const Create_Team = () => {
    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View>
                    <View style={{ padding: 20, alignItems: 'center', gap: 15 }}>
                        <Image style={{ width: 170, height: 170 }} source={require('../Images/userimg.jpeg')} />
                        <View>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: '400', textAlign: 'center' }}>Upload logo file</Text>
                            <Text style={{ color: 'grey', fontSize: 16, textAlign: 'center' }}>
                                Your logo will publish always
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'black', fontSize: 20, paddingVertical: 10, paddingHorizontal: 10 }}>
                            Team Name
                        </Text>
                        <View style={{ alignItems: 'center', gap: 10, paddingBottom: 20 }}>
                            <TextInput style={{ width: 350, fontSize: 18, borderWidth: 1, borderColor: 'grey', borderRadius: 9 }} placeholder='Team Name' keyboardType='name-phone-pad' />
                        </View>
                    </View>
                    <Text style={{ color: 'black', fontSize: 19, fontWeight: '400', padding: 15 }}>
                        Team Member
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ padding: 10 }}>
                            <Image style={{ width: 80, height: 80, borderRadius: 45 }} source={require('../Images/profile.jpg')} />
                            <Text style={{ color: 'black', paddingLeft: 22 }}>
                                Jeny
                            </Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Image style={{ width: 80, height: 80, borderRadius: 45 }} source={require('../Images/profile.jpg')} />
                            <Text style={{ color: 'black', paddingLeft: 22 }}>
                                Jeny
                            </Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Image style={{ width: 80, height: 80, borderRadius: 45 }} source={require('../Images/profile.jpg')} />
                            <Text style={{ color: 'black', paddingLeft: 22 }}>
                                Jeny
                            </Text>
                        </View>
                        <View Style={{ width: 80, height: 80, borderRadius: 45, }}>
                            <AntDesign color='#7361ff' size={80} name='plus' />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingVertical: 15 }}>

                        <TouchableOpacity style={{ width: 110, height: 40, borderWidth: 1, borderColor: '#7361ff', paddingTop: 6, marginHorizontal: 10 }}>
                            <Text style={{ color: 'black', fontSize: 17, fontWeight: '600', textAlign: 'center' }}>
                                Private
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 110, height: 40, borderWidth: 1, borderColor: 'grey', paddingTop: 6, marginHorizontal: 10 }}>
                            <Text style={{ color: 'black', fontSize: 17, fontWeight: '600', textAlign: 'center' }}>
                                Public
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 110, height: 40, borderWidth: 1, borderColor: 'grey', paddingTop: 6, marginHorizontal: 10 }}>
                            <Text style={{ color: 'black', fontSize: 17, fontWeight: '600', textAlign: 'center' }}>
                                Secret
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center", paddingVertical: 15, paddingBottom: 15, marginBottom: 38 }}>
                        <TouchableOpacity style={{ backgroundColor: '#7361ff', width: 310, height: 45, borderRadius: 9 }}>
                            <Text style={{ color: 'white', fontSize: 21, textAlign: 'center', paddingTop: 5, }}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Create_Team