import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Report from './components/Report';
import Newentry from './components/Newentry';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import { createStackNavigator } from 'react-navigation';

const store = configureStore();

const RootStack = createStackNavigator(
  {
    Home:  Report,
    Newentry: Newentry
  },
  {
    initialRouteName: 'Home',
  }
);

const MainApp = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)

AppRegistry.registerComponent('TimesheetMobile', () => MainApp);
