import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home2 from './Screen/Home2';
import Home1 from './Screen/Home1';
import Home3 from './Screen/Home3';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home1" screenOptions={{headerShown : false}}  >
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Home3" component={Home3} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}


