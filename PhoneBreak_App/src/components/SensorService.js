import { Gyroscope } from 'react-native-sensors';

const gyroscopeObservable = new Gyroscope();
console.log('Gyroscope observable created');

const startListeningToGyroscope = (callback) => {
  const subscription = gyroscopeObservable.subscribe(({ x, y, z }) => {
    callback({ x, y, z });
  });

  return subscription;
};

const stopListeningToGyroscope = (subscription) => {
  subscription.unsubscribe();
};

export { startListeningToGyroscope, stopListeningToGyroscope };