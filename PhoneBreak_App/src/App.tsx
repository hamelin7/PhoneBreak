import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

//import navigation dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import GamePlay from './screens/GamePlay';
import Home from './screens/Home';

//create RootStackParamList with our list of screens 
export type RootStackParamList = {
  Home: undefined;
  GamePlay: undefined;
};

//add the screens into a single variable
const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
    
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name='Home'
                component={Home}
                />
            <Stack.Screen 
                name='GamePlay'
                component={GamePlay}
                />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default App;