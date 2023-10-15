import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet, // Added StyleSheet import
} from 'react-native';

function PhoneBreakApp(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darktext : styles.whitetext}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whitetext: {
    color: '#FFFFFF',
  },
  darktext: {
    color: '#000000',
  },
});

export default PhoneBreakApp;