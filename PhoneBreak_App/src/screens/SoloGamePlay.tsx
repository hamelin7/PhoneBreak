import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SoloGamePlay = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>('START');
  const intervalRef = useRef<NodeJS.Timeout>();
  const [mostRecentData, setMostRecentData] = useState<{
    play_date: string;
    play_time: number;
  } | null>(null);

  const fetchMostRecentData = async () => {
    try {
      const response = await fetch('http://192.168.2.44:3001/getRecentData?userId=1');//using my ip address so the emulator can reach the mysql api connection
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response data:', data);
      setMostRecentData(data);
    } catch (error) {
      console.error('Error fetching most recent data:', error);
    }
  };

  useEffect(() => {
    fetchMostRecentData();
  }, []);

  const handleStartButtonPress = async () => {
    if (startTime) {
      clearInterval(intervalRef.current);
      setStartTime(null);
      setButtonText('START');

      const playDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const userId = 1;
      const playTimeInSeconds = Math.floor(elapsedTime / 1000);
      const gameData = {
        userId,
        playDateTime,
        playTime: playTimeInSeconds,
      };

      try {
        const response = await fetch('http://192.168.2.44:3001/updateData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(gameData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          console.log('Data sent successfully');
          const responseData = await response.json();
          console.log(responseData);
        }
      } catch (error) {
        console.error('Error:', error);
      }

      fetchMostRecentData();
      setElapsedTime(0);
    } else {
      const currentTime = new Date().getTime();
      setStartTime(currentTime);
      setButtonText('STOP');
      setElapsedTime(0);

      intervalRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
      }, 1000);
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
      <View>
        <Text style={styles.message}>How long can you go without touching your phone?</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.timercontainer}>{formatTime(elapsedTime)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleStartButtonPress}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        {mostRecentData && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataTextHeader}>Most Recent Game:</Text>
          <Text style={styles.dataText}>Date/Time: {mostRecentData.play_date}</Text>
          <Text style={styles.dataText}>Duration: {mostRecentData.play_time} seconds</Text>
        </View>
      )}
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
    paddingTop: 10,
    marginVertical: 90,
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
  dataContainer: {
    padding: 5,
  },
  dataText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    padding: 2,
  },
  dataTextHeader: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    paddingBottom: 5,
  },
  message: {
    marginTop: 10,
    padding: 25,
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  timercontainer: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'grey',
  },
});

export default SoloGamePlay;
