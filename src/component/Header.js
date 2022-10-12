import React from 'react';
import * as colors from '../styles/Colors';
import {StyleSheet, View, Platform} from 'react-native';
import Text from './Text'
import Avatar  from './Avatar';
const Header = ({title}) => {
  return (
    <View>
      <View style={styles.subview}>
        <Text size={20} color={colors.mainColor} extraBold>
          {title}
        </Text>
        <Avatar />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  subview: {
    marginTop: 15,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
