import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {GameLogic} from './Button_Press';

export default function SoloButton() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={GameLogic}
      >
        <Text style={styles.buttonText}>SOLO</Text>
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
    color: 'black',
    fontFamily:'Montserrat-Regular',
    fontSize: 50,
    fontWeight: 'normal',
    letterSpacing: 4
  },
});