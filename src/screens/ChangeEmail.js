import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BlueBack } from '../assets/images/iconSvg'
import { Text, Button, CircularIcon, SettingCell } from '../component'
import * as Colors from '../styles/Colors';
import {
    settingsCells,
} from '../utils/constants.js';


const changeEmailCells = settingsCells.slice(-2);

const ChangeEmail = ({ navigation }) => {

    return (
        <View style={styles.changeEmailScreen}>
            <View>
                <TouchableOpacity style={styles.changeEmailHeaderLogs}
                    onPress={() => navigation.goBack()}>
                    <CircularIcon
                        Icon={BlueBack}
                        circleSize={50}
                        borderColor={Colors.parentsAccessTransparent}
                        backgroundColor={Colors.parentsAccessTransparent} />
                </TouchableOpacity>
                <View style={styles.changeEmailHeaderImages}>
                    <Text center GulfSemiBold size={19} color={Colors.paua}
                        style={styles.title}
                    >الإيميل
                    </Text>

                    <Image
                        style={styles.envImg}
                        source={require('../assets/images/Background.png')}>
                    </Image>
                </View>
            </View>

            <View style={styles.changeEmailSettingsView}>
                {changeEmailCells.map((item, i) => {
                    return <SettingCell item={item} length={changeEmailCells.length} index={i} />
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
                style={styles.changeEmailButton}
            >
                تغيير
            </Button>

        </View >
    );
};
export default ChangeEmail;

const styles = StyleSheet.create({
    changeEmailScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#e6f9fb",
        height: '100%'
    },
    changeEmailHeaderLogs: {
        paddingTop: Platform.OS == 'ios' ? 70 : 50,
        marginHorizontal: "8%",
    },
    changeEmailHeaderImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: "5%",
        marginTop: "-25%"
    },
    title: {
        zIndex: 1,
        right: '-118%',
        top: "4%"
    },
    envImg: {
        marginBottom: "-10%",
        marginLeft: "-1%",
        top: '2%'
    },
    changeEmailSettingsView: {
        width: '90%',
        height: 60 * changeEmailCells.length,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: '4%'
    },
    btnStyle: {
        height: 56,
        borderRadius: 16,
    },
    changeEmailButton: {
        display: 'flex',
        marginHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});