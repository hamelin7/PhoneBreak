import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

// Import navigation dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import SoloGamePlay from './screens/SoloGamePlay';
import Home from './screens/Home';
import VSGamePlay from './screens/VSGamePlay';

// Create a type for the navigation stack's parameters
export type RootStackParamList = {
  Home: undefined;
  SoloGamePlay: undefined;
  VSGamePlay: undefined;
};

// Create a stack navigator with the defined parameter list
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
    
    return (
      <NavigationContainer>
        {/* Stack Navigator for navigation */}
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false  // Hides the header for all screens in this stack
            }}
        >
            <Stack.Screen 
                name='Home'
                component={Home}
                />
            <Stack.Screen 
                name='SoloGamePlay'
                component={SoloGamePlay}
                />
            <Stack.Screen 
                name='VSGamePlay'
                component={VSGamePlay}
                />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default App;