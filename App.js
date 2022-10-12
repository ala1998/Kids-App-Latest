// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { I18nManager, LogBox, StatusBar, Platform, Alert, StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import AppNavigator from './src/navigations';
import { Loader } from './src/component';
import { Alert as AlertRedux } from 'react-native-redux-alert';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import RNRestart from 'react-native-restart';
import deviceStorage from './src/services/deviceStorage';
// import {StripeProvider} from '@stripe/stripe-react-native';
import * as Colors from './src/styles/Colors';
import useFonts from './hooks/useFonts';

let store = configureStore();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  useEffect(() => {
    LogBox.ignoreAllLogs(true);

   

    // StatusBar.setHidden(true)
    //       StatusBar.setBarStyle("dark-content");
    // if (Platform.OS === "android") {
    //   StatusBar.setBackgroundColor("transparent");
    //   StatusBar.setTranslucent(true);
    // }


  }, []);

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }

  return (
    //  <View>
    <SafeAreaView style={{ flex: 1 }}>
      {/* <GeneralStatusBarColor backgroundColor="transparent"
      barStyle="light-content"/> */}

      <StatusBar
        hidden={true}
        translucent
        // barStyle="light-content"
        backgroundColor='transparent'
      />
            <Provider store={store}>
      <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

