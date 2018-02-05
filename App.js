import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Vibration,
} from 'react-native';

import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/Profile';
import RegisterScreen from './Screens/RegisterScreen';
import { StackNavigator } from 'react-navigation'
const DURATION = 10000;
Vibration.vibrate(DURATION);

export default class App extends Component<{}> {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen, navigationOptions: ({ navigation }) => ({
      header: false
    }),
  },
  RegisterScreen: {
    screen: RegisterScreen, navigationOptions: ({ navigation }) => ({
      header: false
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen, navigationOptions: ({ navigation }) => ({
      header: false
    }),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

