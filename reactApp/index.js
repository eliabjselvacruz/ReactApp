/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Contador from './src/components/contador/contador';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Contador);
