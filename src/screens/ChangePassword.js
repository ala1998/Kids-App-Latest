import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BlueBack } from '../assets/images/iconSvg'
import { Text, Button, CircularIcon, SettingCell } from '../component'
import * as Colors from '../styles/Colors';
import {
    settingsCells,
} from '../utils/constants.js';


const changePasswordCells = settingsCells.slice(-4).slice(0,2)

console.log(changePasswordCells);

const ChangePassword = ({ navigation }) => {

    return (
        <View style={styles.changePasswordScreen}>
            <View>
                <TouchableOpacity style={styles.changePasswordHeaderLogs}
                    onPress={() => navigation.goBack()}>
                    <CircularIcon
                        Icon={BlueBack}
                        circleSize={50}
                        borderColor={Colors.parentsAccessTransparent}
                        backgroundColor={Colors.parentsAccessTransparent} />
                </TouchableOpacity>
                <View style={styles.changePasswordHeaderImages}>
                    <Text center GulfSemiBold size={19} color={Colors.paua}
                        style={styles.title}
                    >كلمة المرور
                    </Text>

                    <Image
                        style={styles.envImg}
                        source={require('../assets/images/Background.png')}>
                    </Image>
                </View>
            </View>

            <View style={styles.changePasswordSettingsView}>
                {changePasswordCells.map((item, i) => {
                    return <SettingCell item={item} length={changePasswordCells.length} index={i} />
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
                style={styles.changePasswordButton}
            >
                تغيير
            </Button>

        </View >
    );
};
export default ChangePassword;

const styles = StyleSheet.create({
    changePasswordScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#e6f9fb",
        height: '100%'
    },
    changePasswordHeaderLogs: {
        paddingTop: Platform.OS == 'ios' ? 70 : 50,
        marginHorizontal: "8%",
    },
    changePasswordHeaderImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: "5%",
        marginTop: "-25%"
    },
    title: {
        zIndex: 1,
        right: '-115%',
        top: "4%"
    },
    envImg: {
        marginBottom: "-10%",
        marginLeft: "-7%",
        top: '2%'
    },
    changePasswordSettingsView: {
        width: '90%',
        height: 60 * changePasswordCells.length,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: '4%'
    },
    btnStyle: {
        height: 56,
        borderRadius: 16,
    },
    changePasswordButton: {
        display: 'flex',
        marginHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});