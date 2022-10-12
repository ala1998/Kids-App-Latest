import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Back, BackOrange} from '../assets/images/iconSvg';
import * as Colors from '../styles/Colors';
import Text from './Text';
const BackButton = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.cont, props.style]}>
      <TouchableOpacity
        style={[styles.button, props.btnStyle, props.orange && { alignItems: 'flex-start',}]}
        onPress={!props.onPress ? () => navigation.goBack() : props.onPress}>
        {props.orange ? (
          <BackOrange />
        ) : (
          <>
            <Back />
            <Text size={15} style={{marginLeft: 8}} color={Colors.mainColor}>
              رجوع
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    // padding:10,
    paddingBottom: 0,
  },
  button: {
    flexDirection: 'row',
    width: 'auto',
    marginLeft: 14,
    alignItems: 'center',
  },
});
export default BackButton;
