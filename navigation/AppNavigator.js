import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Auth from './auth';
import { INTERRUPTION_MODE_ANDROID_DUCK_OTHERS } from 'expo/build/av/Audio';
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
 auth : Auth,
  Main: MainTabNavigator,
}));