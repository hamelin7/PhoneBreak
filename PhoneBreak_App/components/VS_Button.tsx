import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Button_Press} from './Button_Press';

export default function VS_Button() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => {Button_Press}}
      >
        <Text style={styles.buttonText}>VS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 180,
    height: 100,
  },
  customButton: {
    flex: 1,
    backgroundColor: 'rgb(253, 150, 57)', 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 15,
  },
  buttonText: {
    color: 'black', // Text color
    fontFamily:'Montserrat-Light',
    fontSize: 70,
    fontWeight: 'normal',
    letterSpacing: 4
  },
});
