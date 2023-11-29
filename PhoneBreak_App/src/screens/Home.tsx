import React from 'react';
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

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView>
      {/* Header section with logo */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode='contain'/>
      </View>

      {/* Button section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("SoloGamePlay")}
        >
          <Text style={styles.buttonText}>SOLO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("VSGamePlay")}
        >
          <Text style={styles.buttonText}>VS</Text>
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
  buttonContainer: {
    flexDirection: 'row', // Use row to align buttons horizontally
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150, // Adjust this value to move the content down
    marginVertical: 10, // Adjust this value to change the space between buttons
  },
  customButton: {
    width: 215, // Adjust the width as needed
    height: 120, // Adjust the height as needed
    backgroundColor: 'rgb(253, 150, 57)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
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
    fontSize: 59,
    fontWeight: 'normal',
    letterSpacing: 4,
  },
});

export default Home;