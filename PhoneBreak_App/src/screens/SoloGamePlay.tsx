import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firestore } from '../components/firebase'; // Import Firebase configuration file

const SoloGamePlay: React.FC = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>('START');
  const [longestTimer, setLongestTimer] = useState<number | null>(null);
  const [recentTimer, setRecentTimer] = useState<number | null>(null);
  const [totalPlays, setTotalPlays] = useState<number>(0);

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

  const handleStartButtonPress = async () => {
    if (startTime) {
      // If startTime is set, it means the timer is already running, so stop the timer
      clearInterval(interval);
      setStartTime(null);
      setButtonText('START');

      // Store the elapsed time in Firebase
      const userId = 'TEST_USER'; // Replace with the actual user ID in the future
      const timerValuesRef = firestore.collection('timerValues').doc(userId);
      const newTimerData = {
        date: new Date(),
        timer_value: elapsedTime,
      };
      await timerValuesRef.collection('entries').add(newTimerData);

      // Calculate longest timer
      if (longestTimer === null || elapsedTime > (longestTimer || 0)) {
        setLongestTimer(elapsedTime);
      }

      // Set recent timer
      setRecentTimer(elapsedTime);

      // Increment total plays
      setTotalPlays((prevTotalPlays) => prevTotalPlays + 1);

      // Display or use storedElapsedTime as needed
      console.log(`Elapsed Time: ${formatTime(elapsedTime)}`);
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
        <Text style={{ fontSize: 50, fontFamily: 'MontserratSubrayada-Regular', color: 'black' }}>PhoneBrake</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>{formatTime(elapsedTime)}</Text>
        <Text style={{ fontSize: 20, marginVertical: 10 }}>
          Longest Timer: {longestTimer !== null ? formatTime(longestTimer) : 'N/A'}
        </Text>
        <Text style={{ fontSize: 20, marginVertical: 10 }}>
          Recent Timer: {recentTimer !== null ? formatTime(recentTimer) : 'N/A'}
        </Text>
        <Text style={{ fontSize: 20, marginVertical: 10 }}>Total Plays: {totalPlays}</Text>
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
    marginHorizontal: 5
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