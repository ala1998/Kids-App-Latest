import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import AlbumStories from '../screens/AlbumStories';
import StoryDetails from '../screens/StoryDetails';
import ParentsAccess from '../screens/ParentsAccess';
import ParentsArea from '../screens/ParentsArea';
import SubscriptionPlans from '../screens/SubscriptionPlans';
import Settings from '../screens/Settings';
import ChangeEmail from '../screens/ChangeEmail';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ChangePassword from '../screens/ChangePassword';
import LoginByEmail from '../screens/LoginByEmail';

import {useSelector} from 'react-redux';
// import {TransitionPresets } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  // const isSign = useSelector(({auth}) => auth.isSign);
  return (
    <Stack.Navigator
    // initialRouteName={!isSign ? 'Questions' : 'Main'}
    initialRouteName= 'Main'
      screenOptions={{
        headerShown: false,
      }}>
    {/*   <Stack.Screen
        name="Questions"
        component={Questions}
        options={{
          presentation: 'modal',
        }}
      /> */}
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="AlbumStories" component={AlbumStories} />
      <Stack.Screen name="StoryDetails" component={StoryDetails} />
      <Stack.Screen name="ParentsAccess" component={ParentsAccess} />
      <Stack.Screen name="ParentsArea" component={ParentsArea} />
      <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="LoginByEmail" component={LoginByEmail} />

    {/*   <Stack.Screen
        name="Therapist"
        component={Therapist}
        // options={{
        //   presentation: 'containedModal',
        // }}
      /> */}
     

    </Stack.Navigator>
  );
};

export default MainNavigator;
