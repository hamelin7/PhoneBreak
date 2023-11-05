import { DeviceEventEmitter } from 'react-native';
import { Accelerometer } from 'react-native-sensors';

const accelerometerObservable = new Accelerometer();

const startListeningToAccelerometer = (callback) => {
  const subscription = accelerometerObservable.subscribe(({ x, y, z }) => {
    callback({ x, y, z });
  });

  return subscription;
};

const stopListeningToAccelerometer = (subscription) => {
  subscription.unsubscribe();
};

export { startListeningToAccelerometer, stopListeningToAccelerometer };