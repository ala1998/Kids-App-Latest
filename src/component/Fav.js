import React from 'react';
import { View } from 'react-native';
import {FavSvg} from '../assets/images/iconSvg';

import * as Colors from '../styles/Colors'

const Fav = () => {
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
      <FavSvg/>
    </View>
  );
}

export default Fav;