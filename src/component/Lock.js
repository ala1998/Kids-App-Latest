import React from 'react';
import { View } from 'react-native';
import {LockSvg} from '../assets/images/iconSvg';
import * as Colors from '../styles/Colors'

const Lock = ({small}) => {
  return (
    <View style={{
      width: 28,
      height: 28,
      borderRadius: 28 / 2,
      backgroundColor: Colors.transparent,
      transform: [
        { scaleX: 1 }
      ],
      marginHorizontal: 5,
    //   marginVertical: small? -48: -60,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center'

    }}>
      <LockSvg />
    </View>
  );
}

export default Lock;