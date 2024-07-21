import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screens/Home'
import Bottom_Tabs_Navigation from './Bottom_Tabs_Navigation'
import Getting_Started from '../../Screens/Getting_Started';
import Task_Managemant_1 from '../../Screens/Task_Managemant_1';
import Task_Managemant_2 from '../../Screens/Task_Managemant_2';
import Task_Managemant_3 from '../../Screens/Task_Managemant_3';
import Signin from '../../Screens/signin';
import Signup from '../../Screens/Signup';

const Stack = createNativeStackNavigator();

const App_Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen  name='GettingStarted' component={Getting_Started}/>
                <Stack.Screen  name='slider screen 1' component={Task_Managemant_1}/>
                <Stack.Screen  name='slider screen 2' component={Task_Managemant_2}/>
                <Stack.Screen  name='slider screen 3' component={Task_Managemant_3}/>
                <Stack.Screen name='Bottom-Tabs' component={Bottom_Tabs_Navigation} />
                {/* <Stack.Screen name='Sign In' component={Signin}/> */}
                {/* <Stack.Screen name='Sign Up' component={Signup}/> */}


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App_Navigation