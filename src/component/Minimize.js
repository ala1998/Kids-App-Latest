import React from 'react';
import { View } from 'react-native';
import {MinimizeSvg} from '../assets/images/iconSvg';

import * as Colors from '../styles/Colors'

const Minimize = () => {
  return (
    <View style={{
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      backgroundColor: Colors.transparent,
      transform: [
        { scaleX: 1 }
      ],
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 60,
      marginHorizontal: 20

    }}>
      <MinimizeSvg/>
    </View>
  );
}

export default Minimize;