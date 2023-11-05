import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
const Stack = createNativeStackNavigator();
const navi =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='home' component={Home}/>
                <Stack.Screen name='shop' component={Shop}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default navi;