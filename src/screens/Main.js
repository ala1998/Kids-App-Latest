import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Colors from '../styles/Colors';
import { Platform } from 'react-native';

import Favorites from './Favorites';
import Statistics from './Statistics';
import Stories from './Stories';

import {
  StatisticsOnIcon,
  StatisticsOffIcon,
  FavoritesOnIcon,
  FavoritesOffIcon,
  StoriesOnIcon,
  StoriesOffIcon
} from '../assets/images/iconSvg';

import { Text } from '../component';
import { View } from 'react-native-web';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName='Stories'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.bottomMenu,
          height: Platform.OS == 'ios' ? 116 : 90,
          position: 'absolute',
          elevation: 0,
          shadowOffset: {
            width: 0, height: 0 // for iOS
          },
          borderTopWidth: 0
        },
        tabBarLabel: ({ focused }) => {
          let name = '';
          if (route.name === 'Statistics') {
            name = 'الملخّص';
          } else if (route.name === 'Favorites') {
            name = 'المفضّلة';
          } else if (route.name === 'Stories') {
            name = 'القصص';
          }
          return (
            <Text GulfSemiBold color={Colors.white} size={15}
              style={{
                fontWeight: focused ? 'bold' : 'normal',
                marginBottom: 20
              }}>{name}</Text>
          );
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Stories') {
            icon = focused ? <StoriesOnIcon /> : <StoriesOffIcon />;
          } else if (route.name === 'Favorites') {
            icon = focused ? <FavoritesOnIcon /> : <FavoritesOffIcon />;
          }
          else if (route.name === 'Statistics') {
            icon = focused ? <StatisticsOnIcon /> : <StatisticsOffIcon />;
          }

          return icon;
        }
      })}>
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
}
