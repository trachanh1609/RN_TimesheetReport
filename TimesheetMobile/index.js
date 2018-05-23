import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Report from './components/Report';
import Home from './components/Home';
import Newentry from './components/Newentry';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import { createStackNavigator } from 'react-navigation';

const store = configureStore();

const RootStack = createStackNavigator(
  {
    Home:  Home,
    Newentry: Newentry,
    Report: Report,
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
