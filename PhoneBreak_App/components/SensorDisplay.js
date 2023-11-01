import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { startListeningToAccelerometer, stopListeningToAccelerometer } from './SensorService';

class SensorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceleration: { x: 0, y: 0, z: 0 },
    };
  }

  componentDidMount() {
    this.accelerometerSubscription = startListeningToAccelerometer((data) => {
      this.setState({ acceleration: data });
    });
  }

  componentWillUnmount() {
    stopListeningToAccelerometer(this.accelerometerSubscription);
  }

  render() {
    const { acceleration } = this.state;

    return (
      <View>
        <Text>X: {acceleration.x}</Text>
        <Text>Y: {acceleration.y}</Text>
        <Text>Z: {acceleration.z}</Text>
      </View>
    );
  }
}

export default SensorDisplay;