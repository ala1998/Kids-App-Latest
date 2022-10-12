import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
// import User from '../assets/images/iconSvg/user.svg';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Avatar = ({}) => {
  const user = useSelector(({auth}) => auth.user);
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.jumpTo('TopTabs')}>
      {/* {user?.avatar ? (
        <Image
          source={{
            uri: user?.avatar,
          }}
          style={styles.avatar}
        />
      ) : (
        <User />
      )} */}
    </TouchableOpacity>
  );
};
export default Avatar;

const styles = StyleSheet.create({
  subview: {
    marginTop: 40,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
