import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen'
import { createAppContainer, createStackNavigator } from 'react-navigation';



const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Register: {
      screen: RegisterScreen  
    },

  },
  {
    initialRouteName: 'Login',
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}