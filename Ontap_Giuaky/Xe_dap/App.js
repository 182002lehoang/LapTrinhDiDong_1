import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home1 from './Screen/Home1';
import Home2 from './Screen/Home2';
import Home3 from './Screen/Home3';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown : false}} >
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Home3" component={Home3} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home1" component={Home1} />
        <Tab.Screen name="Home2" component={Home2} />
        <Tab.Screen name="HIHI" component={Home3} />
      </Tab.Navigator> */}
    </NavigationContainer>

  );
}


