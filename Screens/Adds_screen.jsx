import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
const Adds_screen = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <Text>
            {/* <FontAwesome name='task'/> */}
          Create Task
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>
            <Octicons name='project' />
          Create Project
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>
          <AntDesign name='team'/>
          Create Team
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>
            <MaterialIcons name='event'/>
          Create Event
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Adds_screen