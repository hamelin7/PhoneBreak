import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';

const SoloGamePlay: React.FC = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>('START');
  let interval: NodeJS.Timeout;

  useEffect(() => {
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
    if (startTime) {
      // If startTime is set, it means the timer is already running, so stop the timer
      clearInterval(interval);
      setStartTime(null);
      setButtonText('START');
      // Store the elapsed time in a variable or use it as needed
      const storedElapsedTime = elapsedTime;
      // Display or use storedElapsedTime as needed
      console.log(`Elapsed Time: ${formatTime(storedElapsedTime)}`);
    } else {
      // If startTime is not set, it means the timer is not running, so start the timer
      const currentTime = new Date().getTime();
      setStartTime(currentTime);
      setButtonText('STOP');
      // Reset elapsedTime when starting the timer
      setElapsedTime(0);
    }
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
            <Text style={styles.buttonText}>{buttonText}</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    marginVertical: 30,
  },
  customButton: {
    width: 215,
    height: 120,
    backgroundColor: 'rgb(253, 150, 57)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
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
