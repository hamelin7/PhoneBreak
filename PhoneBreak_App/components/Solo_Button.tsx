import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SoloButton() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => {
          // Handle button press
        }}
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
    backgroundColor: 'rgb(253, 150, 57)', // Background color
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 15,
  },
  buttonText: {
    color: 'black', // Text color
    fontFamily:'Montserrat',
    fontSize: 54,
    fontWeight: '400',
    letterSpacing: 4
  },
});
