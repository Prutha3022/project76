import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPic';
import  SpaceCraftScreen from './screens/SpaceCrafts';
import  StarMapScreen from './screens/StarMaps';
import {createStackNavigator} from 'reacr-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} /> 
          <Stack.Screen name="StarMaps" component={StarMapScreen} /> 
          <Stack.Screen name="DailyPic" component={DailyPicScreen} />
          <Stack.Screen name="SpaceCrfats" component={SpaceCraftScreen} />
       </Stack.Navigator> 
    </NavigationContainer>
    
  );
}
const stack = createStackNavigator()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
