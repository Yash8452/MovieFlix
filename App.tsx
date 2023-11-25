import 'react-native-gesture-handler';
import { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DetailsScreen from './components/DetailsScreen';
import SearchScreen from './components/SearchScreen';


export type RootStackParamList = {
  Home: undefined;
  Details: { movie: { show: { id: number; name: string; summary: string; image?: { medium: string } } } };
  Search: undefined;
};
const Stack = createStackNavigator();

export default function App() {
  
    useEffect(() => {
      SplashScreen.hide(); 
    }, [])
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})