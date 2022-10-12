import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '../styles/Colors';
// import * as Fonts from '../styles/Fonts';
import Text from './Text';
import {Error} from './AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Hide, Show } from '../assets/images/iconSvg';
const InputField = props => {
  const [hidePassword, setHide] = useState(true);
  return (
    <View style={[styles.cont, props.style]}>
      <View>
        {/* label */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {props.label && (
            <Text semibold color={Colors.black} size={14} style={styles.label}>
              {props.label}
            </Text>
          )}
          {props.optional && (
            <Text regular style={styles.optional}>
              Optional
            </Text>
          )}
        </View>

        <View style={styles.input_cont}>
          {/* Icon */}
          <View style={[styles.iconCont, props.iconStyle]}>
            <Icon
              name={props.iconName}
              size={20}
              color={props.iconColor ?? Colors.midGrey}
            />
          </View>

          {/* Input */}
          <TextInput
            secureTextEntry={props.type === 'password' ? hidePassword : false}
            style={[
              styles.input,
              {textAlign: I18nManager.isRTL ? 'right' : 'left'},
              props.inputStyle,
            ]}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.darkGrey}
            autoCapitalize="none"
            {...props}
          />

          {/* password hide eye */}
          {props.type === 'password' && (
            <TouchableOpacity
              style={styles.iconRight}
              activeOpacity={0.8}
              onPress={() => setHide(!hidePassword)}>
                {hidePassword ? <Hide /> : <Show />}
            </TouchableOpacity>
          )}

          {/* select dropdown */}
          {props.type === 'select' && (
            <Icon
              style={styles.iconRight}
              name="chevron-down"
              color={Colors.Gray_Light}
              size={25}
            />
          )}
        </View>
      </View>
      {props.required && props.type !== 'phone' ? (
        <Error style={{paddingTop: 2}}>هذا الحقل مطلوب</Error>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
  },
  input_cont: {
    justifyContent: 'center',
  },
  input: {
    color: '#919191',
    fontSize: 15,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    height: 52,
    borderRadius: 24,
    justifyContent: 'center',
    borderRadius: 32,
    paddingHorizontal: 20,
    fontFamily: 'NormalSamim',
    marginBottom: 5,
  },
  iconCont: {
    position: 'absolute',
    left: 0,
    width: 20,
  },
  iconRight: {
    position: 'absolute',
    right: 8,
    top: 12,
    width:30,
    height:30,
    // backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  label: {
    marginBottom: 9,
  },
  optional: {
    color: Colors.Gray_Light,
    fontSize: 16,
  },
});
export default InputField;
