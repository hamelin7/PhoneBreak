import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity 
} from 'react-native';

// Import navigation dependencies
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// Define the props type for the Home component based on navigation
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const phrases = [
  "Embrace the world beyond the screen.",
  "Disconnect to reconnect with life's vibrant moments.",
  "Let the beauty of the present unfold without digital distractions.",
  "Rediscover the joy of genuine connections, nature's wonders, and the simple pleasure of being fully present.",
  "Break free from the virtual to savor the richness of reality."
];

const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};

const Home = ({navigation}: HomeProps) => {
  const [randomPhrase, setRandomPhrase] = useState<string>(getRandomPhrase()); // Initial random phrase

  return (
    <SafeAreaView>
      {/* Header section*/}
      <View style={styles.header}>
        {/*<Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode='contain'/>*/}
        <Text style={{ fontSize: 50, fontFamily: 'MontserratSubrayada-Regular', color: 'black' }}>PhoneBrake</Text>
      </View>

      {/* Random phrase section */}
      <View style={styles.phraseContainer}>
        <Text style={styles.phraseContainer}>{randomPhrase}</Text>
      </View>

      {/* Button section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("SoloGamePlay")}
        >
          <Text style={styles.buttonText}>PLAY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles for the Home component
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
  phraseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 25,
    fontFamily: 'Montserrat-Regular',
    fontSize: 35, 
    marginVertical: 10, 
    color: 'black', 
  },
  buttonContainer: {
    flexDirection: 'row', // Using row to align buttons horizontally
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: '50%', 
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
    marginHorizontal: '25%',
    marginTop: '10%'
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 59,
    fontWeight: 'normal',
    letterSpacing: 4,
  },
});

export default Home;
