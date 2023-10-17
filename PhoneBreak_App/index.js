/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App'; <--example for how to format import statement, would match with a corresponding App.tsx file. 
import PhoneBreakApp from './PhoneBreakApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PhoneBreakApp);
