import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Main from '../screens/Main';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {navigationRef} from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
const App = props => {
  // const isLoading = true
  // const {isLoggedIn, isLoading} = useSelector(({auth}) => ({
  //   isLoggedIn: auth.isLoggedIn,
  //   isLoading: auth.isLoading,
  // }));

  // if (isLoading) {
  //   return <Main />;
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {isLoggedIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator /> 

    </NavigationContainer>
  );
};

export default App;
