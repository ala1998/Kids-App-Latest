import React from 'react';
import { View } from 'react-native';
import {PlaySvg} from '../assets/images/iconSvg';
import * as Colors from '../styles/Colors'

const Play = ({small}) => {
  return (
    <View 
    style={{
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
      backgroundColor: 'rgba(255, 255, 255, 0.32)',
      transform: [  
        { scaleX: 1 }
      ],
      marginHorizontal: 10,
      marginVertical: small? -50: -45,
      alignItems: 'center',
      justifyContent: 'center'

    }}>
      <PlaySvg />
    </View>
  );
}

export default Play;