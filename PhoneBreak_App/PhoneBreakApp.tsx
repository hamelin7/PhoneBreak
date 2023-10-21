import React from 'react';
import Solo_Button from './components/Solo_Button';
import VS_Button from './components/VS_Button';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView
} from 'react-native';

function PhoneBreakApp(): JSX.Element {


  return (
    
  <SafeAreaView>
    <View style={styles.header}>
        <Image source={require('./assets/images/logo.png')} style={styles.logo} resizeMode='contain'/>
    </View>
    <View style={styles.container}>
          <Solo_Button/>
    </View>
    <View style={styles.container}>
      <VS_Button/>
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
    paddingTop: 125,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default PhoneBreakApp;