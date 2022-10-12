import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BlueBack } from '../assets/images/iconSvg'
import { Text, Button, CircularIcon, SettingCell } from '../component'
import * as Colors from '../styles/Colors';
import {
    signupCells,
} from '../utils/constants.js';


const SignUp = ({ navigation }) => {
    const [inputErrors, setInputErrors] = useState({
        email: false,
        password: false,
        username: false,
      });

      const validate = () => {
        if (email === '' || password === '' || username === '') {
          setInputErrors({
            email: email === '' ? true : false,
            password: password === '' ? true : false,
            username: username === '' ? true : false,
          });
          return false;
        }
        return true;
      };
      
    return (
        <View style={styles.signupScreen}>
            <View>
                <TouchableOpacity style={styles.signupHeaderLogs}
                    onPress={() => navigation.goBack()}>
                    <CircularIcon
                        Icon={BlueBack}
                        circleSize={50}
                        borderColor={Colors.parentsAccessTransparent}
                        backgroundColor={Colors.parentsAccessTransparent} />
                </TouchableOpacity>
                <View style={styles.signupHeaderImages}>
                    <Text center GulfSemiBold size={19} color={Colors.paua}
                        style={styles.title}
                    >إنشاء حساب جديد
                    </Text>

                    <Image
                        style={styles.envImg}
                        source={require('../assets/images/Background.png')}>
                    </Image>
                </View>
            </View>

            <View style={styles.signupView}>
                {signupCells.map((item, i) => {
                    return <SettingCell item={item} length={signupCells.length} index={i} />
                })}
            </View>

            <Button
                fontFamily="GulfSemiBold"
                textSize={16}
                textStyle={{ marginTop: '-2%', color: Colors.white }}
                buttonStyle={[styles.btnStyle, {
                    backgroundColor: Colors.purple,
                    borderColor: Colors.purple
                }]}
                style={styles.signupButton}
            >
                إنشاء
            </Button>

        </View >
    );
};
export default SignUp;

const styles = StyleSheet.create({
    signupScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#e6f9fb",
        height: '100%'
    },
    signupHeaderLogs: {
        paddingTop: Platform.OS == 'ios' ? 70 : 50,
        marginHorizontal: "8%",
    },
    signupHeaderImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: "5%",
        marginTop: "-25%"
    },
    title: {
        zIndex: 1,
        right: '-100%',
        top: "4%"
    },
    envImg: {
        marginBottom: "-10%",
        marginLeft: "-20%",
        top: '2%'
    },
    signupView: {
        width: '90%',
        height: 60 * signupCells.length,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: '4%'
    },
    btnStyle: {
        height: 56,
        borderRadius: 16,
    },
    signupButton: {
        display: 'flex',
        marginHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});