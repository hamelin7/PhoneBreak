import React from 'react';
import SensorDisplay from '../components/SensorDisplay';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity 
} from 'react-native';

//navigation 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) =>{

  return (
    <SafeAreaView>
      <View style={styles.header}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode='contain'/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("GamePlay")}
        >
          <Text style={styles.buttonText}>SOLO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(253, 150, 57)',
    height: 75
  },
  logo: {
    width: '45%',
    height: '45%',
    paddingBottom: 50
  },
  container: {
    flex:1,
    paddingTop: 215,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  }
});

export default Home;