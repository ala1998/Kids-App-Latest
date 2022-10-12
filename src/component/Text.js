import React from 'react';
import { Text, Platform, I18nManager } from 'react-native';
// import * as Fonts from '../styles/Fonts';
import * as Colors from '../styles/Colors';

export default AppText = props => {
  let fontFamily = '';
  if (props.NormalSamim)
    fontFamily = 'NormalSamim'
  else
    fontFamily = props.fontFamily

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily,
          fontSize: props.size ?? 15,
          color: props.color ?? Colors.black,
          textAlign: props.textAlign ?? 'left'
        },
        props.center && { textAlign: 'center' },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};
