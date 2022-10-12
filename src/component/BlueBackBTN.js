import React from 'react';
import { View } from 'react-native';
import {WhiteBackSvg} from '../assets/images/iconSvg';

import * as Colors from '../styles/Colors'

const BlueBackBTN = () => {
  return (
    <View style={{
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      backgroundColor: Colors.darkBlue,
      transform: [
        { scaleX: 1 }
      ],
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 60,
      marginHorizontal: 20

    }}>
      <WhiteBackSvg/>
    </View>
  );
}

export default BlueBackBTN;