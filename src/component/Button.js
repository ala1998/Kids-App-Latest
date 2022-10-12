import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Text from './Text';
import * as Colors from '../styles/Colors';
import FacebookIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';

const Button = ({
  style,
  disabled,
  onPress,
  buttonStyle,
  textStyle,
  textSize,
  fontFamily,
  outline,
  purple,
  green,
  orange,
  children,
  iconName
}) => {
  return (
    <View style={[styles.cont, style]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.button,
          styles.btndarkOrange,
          outline && styles.button_outline,
          purple && styles.btnPurple,
          green && styles.btnGreen,
          orange && styles.btnOrange,
          buttonStyle,
        ]}>
        <Text
          fontFamily={fontFamily}
          color={Colors.white}
          style={[
            outline && { color: Colors.yellow },
            purple && { color: Colors.white },
            green && { color: Colors.mainColor },
            orange && { color: Colors.darkGreyBlue },
            textStyle,
            { top: iconName ? '20%' : null }
          ]}
          size={textSize ? textSize : 16}>
          {children}
        </Text>
        {
          iconName ?
            iconName != "facebook" ?
              <Icon
                style={{ alignSelf: 'flex-end', top: '-20%', left: '-15%', marginRight: "7%" }}
                name={iconName}
                size={22}
                color={Colors.white}
              />
              : iconName == "facebook" ? <FacebookIcon
                style={{ alignSelf: 'flex-end', top: '-20%',left: '-10%',  marginRight: "7%" }}
                name={iconName}
                size={22}
                color={Colors.white}
              /> : null
            : null
        }
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 52,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  button_outline: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.08)"
  },
  btnGreen: {
    backgroundColor: Colors.lightGreen,
    borderColor: Colors.lightGreen,
  },
  btnOrange: {
    backgroundColor: Colors.orangeBackground,
    borderColor: Colors.orangeBackground,
  },
  btndarkOrange: {
    backgroundColor: Colors.darkOrange,
    borderColor: Colors.darkOrange,
  },
  btnPurple: {
    backgroundColor: Colors.purple,
    borderColor: Colors.purple
  }
});
export default Button;
