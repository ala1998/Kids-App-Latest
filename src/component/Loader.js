import React from 'react';
import * as colors from '../styles/Colors';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

const Loader = props => {
  const visible = useSelector(({modal}) => modal.visible);

  return (
    <Modal transparent={true} animationType={'none'} visible={props.visible ?? visible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            color={colors.mainColor}
            size="large"
            // animating={visible}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
