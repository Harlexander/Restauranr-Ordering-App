import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from '../pages/signpage'
import Home from '../pages/Home/Home';
import { StyleSheet, Text } from 'react-native';
import AgentPanel from '../pages/AgentPanel';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
        component={SignInPage}
        name="Sign In"
        />
         <Stack.Screen 
        component={Home}
        name="Black Drop"
        options={{ title: 'Welcome' }}
        headerMode="screen"/>
         <Stack.Screen 
        component={AgentPanel}
        name="Agent Panel"/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}
const home= () => {
  return(
    <Text>Hello World</Text>
  )}
export default Navigation
