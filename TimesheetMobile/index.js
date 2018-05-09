import { AppRegistry } from 'react-native';
import App from './App';
import Report from './components/Report';
import Newentry from './components/Newentry';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home:  Report,
    Newentry: Newentry
  },
  {
    initialRouteName: 'Home',
  }
);

AppRegistry.registerComponent('TimesheetMobile', () => RootStack);
