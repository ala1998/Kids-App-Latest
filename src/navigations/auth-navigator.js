
import React from 'react';
// import Login from '../screens/Login'
// import SignUp from '../screens/SignUp'
// import Landing from '../screens/Landing'
import Main from '../screens/Main'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator =(props)=>{
    return(
            <Stack.Navigator
            screenOptions={{
              headerShown:false,
            
            }} 
            headerShown={false}
              >
                {/* <Stack.Screen name="Landing" component={Landing} /> */}
                {/* <Stack.Screen name="Login" component={Login} /> */}
                {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
    )
}

export default AuthNavigator
