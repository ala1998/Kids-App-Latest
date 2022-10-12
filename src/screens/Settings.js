import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { BlueBack, Facebook, Twitter, Youtube } from '../assets/images/iconSvg'
import { Text, CircularIcon, SettingCell } from '../component'
import * as Colors from '../styles/Colors';

const Settings = ({ navigation }) => {

    return (
        <View style={styles.settingsScreen}>
            <View style={{}}>
                <TouchableOpacity style={styles.settingsHeaderLogs}
                    onPress={() => navigation.goBack()}>
                    <CircularIcon
                        Icon={BlueBack}
                        circleSize={50}
                        borderColor={Colors.parentsAccessTransparent}
                        backgroundColor={Colors.parentsAccessTransparent} />
                </TouchableOpacity>
                <View style={styles.settingsHeaderImages}>
                    <Text center GulfSemiBold size={19} color={Colors.paua}
                        style={styles.title}
                    >الإعدادات
                    </Text>

                    <Image
                        style={styles.envImg}
                        source={require('../assets/images/Background.png')}>
                    </Image>
                </View>
            </View>

            <ScrollView style={styles.mainScrollView}>
                <Text GulfSemiBold size={19} color={Colors.settingDarkBlue}
                    style={styles.subTitles}
                >إعدادات الحساب
                </Text>
                <View style={styles.accountSettingsView}>
                    
                </View>
                <Text GulfSemiBold size={19} color={Colors.settingDarkBlue}
                    style={styles.subTitles}
                >التنبيهات
                </Text>
                <View style={styles.notificationSettingsView}>
                </View>
                <Text GulfSemiBold size={19} color={Colors.settingDarkBlue}
                    style={styles.subTitles}
                >التطبيق
                </Text>
                <View style={styles.appSettingsView}>
                 
                </View>
                <Text GulfSemiBold size={19} color={Colors.settingDarkBlue}
                    style={styles.subTitles}
                >أخرى
                </Text>
                <View style={styles.otherSettingsView}>
                  
                </View>

                <View style={styles.socialMedia}>
                    <TouchableOpacity style={{ marginHorizontal: '4%' }}>
                        <Youtube />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Twitter />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: '4%' }}>
                        <Facebook />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    );
};
export default Settings;

const styles = StyleSheet.create({
    settingsScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#e6f9fb",
        height: '100%'
    },
    settingsHeaderLogs: {
        paddingTop: Platform.OS == 'ios' ? 70 : 50,
        marginHorizontal: "8%",
    },
    settingsHeaderImages: {
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
        marginLeft: "-4%",
        top: '2%'
    },
    mainScrollView: {
        borderRadius: 20,
        width: '100%',
        alignSelf: 'center',
        top: "-4%"
    },
    subTitles: {
        zIndex: 1,
        marginLeft: "6%",
        lineHeight: 60
    },
    accountSettingsView: {
        width: '90%',
        height: 60 * accountCells.length,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: '4%'
    },
    notificationSettingsView: {
        width: '90%',
        height: 60,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: '4%'
    },
    appSettingsView: {
        width: '90%',
        height: 60 * appCells.length,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: '4%'
    },
    otherSettingsView: {
        width: '90%',
        height: 60 * othersCells.length,
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: '10%'
    },
    socialMedia: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: '10%'
    }
});