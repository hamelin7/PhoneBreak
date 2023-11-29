import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';

// Import functions to start and stop listening to gyroscope data
//taking this out because the sensors module isn't working properly with the android virtual device and causing the app to crash
//import { startListeningToGyroscope, stopListeningToGyroscope } from '../components/SensorService';
// Import the Subscription type from RxJS
//import { Subscription } from 'rxjs';

const SoloGamePlay: React.FC = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (startTime) {
      interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime;
        setElapsedTime(elapsed);
      }, 1000); // Update every second
    }

    return () => clearInterval(interval); // Cleanup the interval on component unmount or when startTime is cleared
  }, [startTime]);

  const handleStartButtonPress = () => {
    const currentTime = new Date().getTime();
    setStartTime(currentTime);
  };

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>{formatTime(elapsedTime)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleStartButtonPress}
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(253, 150, 57)',
      height: 75,
    },
    logo: {
      width: '45%',
      height: '45%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row', // Use row to align buttons horizontally
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 80, // Adjust this value to move the content down
      marginVertical: 30, // Adjust this value to change the space between buttons
    },
    customButton: {
      width: 215, // Adjust the width as needed
      height: 120, // Adjust the height as needed
      backgroundColor: 'rgb(253, 150, 57)',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",//helpful sites for generating css for shadows: https://ethercreative.github.io/react-native-shadow-generator/ and https://neumorphism.io/#e0e0e0
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
      elevation: 23,
      borderRadius: 15,
      marginHorizontal: 5,
    },
    buttonText: {
      color: 'black',
      fontFamily: 'Montserrat-Regular',
      fontSize: 50,
      fontWeight: 'normal',
      letterSpacing: 4,
    },
});

export default SoloGamePlay;