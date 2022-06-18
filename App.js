import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Forgot from './src/ForgotPassword';
import SplashScreen from './src/SplashScreen';
import MainPage from './src/MainPage';
import Quran from './src/Quran';
import QuranLogin from './src/QuranLogin';
import TabNav from './src/TabNav';
import F from './src/F';
import Mission from './src/mission';
import Crud from './src/Crud';
import ProfileUsr from './src/ProfileUsr';
import AyatPage from './src/AyatPage';
import Feedback from './src/Feedback';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({

  F: { screen: F },
  Crud: { screen: Crud },
  QuranLogin: { screen: QuranLogin },
  ForgotPassword: { screen: Forgot },
  SplashScreen: { screen: SplashScreen },
  MainPage: { screen: MainPage },
  ProfileUsr: { screen: ProfileUsr },
  AyatPage: { screen: AyatPage },
  Mission: { screen: Mission },
  Quran: { screen: Quran },
  TabNav: { screen: TabNav },
  Feedback: { screen: Feedback }


},
  {
    initialRouteName: 'SplashScreen',
    header: null,
    headerMode: 'none'
  }

);

const AppContainer = createAppContainer(AppStackNavigator);
