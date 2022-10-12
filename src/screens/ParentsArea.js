import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { BlueBack, Add, Details } from '../assets/images/iconSvg'
import { Text, Button, CircularIcon } from '../component'
import Child from '../component/Child';
import * as Colors from '../styles/Colors';
import { children } from '../utils/constants.js';

const ParentsArea = ({ navigation }) => {

    return (
        <View style={styles.parentsAccessScreen}>
            <View style={{ backgroundColor: Colors.lightCyan, }}>
                <TouchableOpacity style={styles.parentsAccessHeaderLogs}
                    onPress={() => navigation.goBack()}>
                    <CircularIcon
                        Icon={BlueBack}
                        circleSize={50}
                        borderColor={Colors.parentsAccessTransparent}
                        backgroundColor={Colors.parentsAccessTransparent} />
                </TouchableOpacity>
                <View style={styles.parentsAccessHeaderImages}>
                    <View style={styles.title}>
                        <Text VibesRegular size={45} color={Colors.paua}>
                            {"منطقة "}
                        </Text>
                        <Text VibesRegular size={45} color={Colors.paua} style={{ marginTop: -35 }}>
                            {"الوالدين"}
                        </Text>
                    </View>

                    <Image
                        style={styles.envImg}
                        source={require('../assets/images/Environment2.png')}>
                    </Image>
                </View>
            </View>

            <ScrollView style={styles.mainScrollView}>
                <View style={styles.yourChildren}>
                    <Text GulfSemiBold size={17} color={Colors.paua} style={{ paddingHorizontal: '5%' }}>أطفالك</Text>
                    <Text GulfText size={14} color={Colors.ParentsAreaText} style={{ paddingHorizontal: '5%', lineHeight: 30 }}>
                        معرفة عمر وجنس أطفالك يساعدنا على انتقاء الاختيارات المناسبة لهم.
                    </Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.childrenView}>
                        {
                            children.map((item, index) => {
                                return (<Child item={item} index={index} length={children.length - 1} />)
                            })
                        }
                        <View style={{ display: 'flex', marginHorizontal: "3%" }}>
                            <TouchableOpacity style={styles.add}><Add /></TouchableOpacity>
                            <Text center GulfSemiBold color={Colors.paua} size={15}
                                style={{ right: '10%' }}>أضف</Text>
                        </View>
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.premiumSubscriptionView}
                    onPress={() => navigation.navigate('SubscriptionPlans')}>
                    <Image source={require('../assets/images/PremiumSubscription.png')}
                        style={styles.subscriptionImage}></Image>
                    <View style={styles.subscriptionTexts}>
                        <Text center GulfSemiBold size={19} color={Colors.white} style={{ paddingHorizontal: '5%' }}>خطة الاشتراك</Text>
                        <Text GulfText size={16} color={"#76f6ff"} style={{ paddingHorizontal: '5%' }}>
                            {" ✦ تمتع بوصول كامل لكافة القصص لأطفالك.\n ✦ قصص حصرية للمشتركين فقط.\n ✦ قصص جديدة ستضاف بشكل روتيني."}
                        </Text>
                        <Text center style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                            <Text GulfText size={13} color={Colors.white} style={{ lineHeight: 30 }}>{"تعرّف على الخطط المتوفرة والأسعار واختر ما يناسبك وأطفالك."}</Text>
                            <Text GulfSemiBold size={13} color={Colors.white} style={{ lineHeight: 20 }} >{" تمتع ب ٧ أيام مجانية تجريبية."}</Text>
                        </Text>
                        <Button
                            purple
                            fontFamily="GulfSemiBold"
                            textSize={19}
                            textStyle={{ marginTop: "-2%" }}
                            buttonStyle={styles.btn}
                            style={styles.thankYouButton}
                            onPress={() => navigation.navigate('SubscriptionPlans')}
                        >
                            اشترك الآن
                        </Button>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settings}
                    onPress={() => navigation.navigate('Settings')}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginHorizontal: '7%' }}>
                            <Text GulfSemiBold size={19} color={Colors.paua} style={{}}>الإعدادات</Text>
                            <Text GulfText size={16} color={Colors.ParentsAreaText} style={{ bottom: '10%' }}>إعدادات الحساب والتطبيق.</Text>
                        </View>
                        <TouchableOpacity style={[styles.details, { left: '20%' }]}>
                            <Details />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View >
    );
};
export default ParentsArea;

const styles = StyleSheet.create({
    parentsAccessScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#e6f9fb",
        height: '100%'
    },
    parentsAccessHeaderLogs: {
        paddingTop: Platform.OS == 'ios' ? 70 : 50,
        marginHorizontal: "5%",
        top: '5%'
    },
    parentsAccessHeaderImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: "5%",
        marginTop: "-22%"
    },
    title: {
        zIndex: 1,
        marginBottom: "-20%",
        left: '6%',
        marginLeft: '7%'
    },
    envImg: {
        marginBottom: "-5%",
        marginLeft: "-4%"
    },
    mainScrollView: {
        borderRadius: 20,
        width: '100%',
        top: "-2.5%"
    },
    yourChildren: {
        height: 270,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.white,
        borderRadius: 20,
        marginBottom: '5%',
        paddingVertical: "2%",
    },
    childrenView: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: "4%"
    },
    add: {
        marginRight: '5%'
    },
    premiumSubscriptionView: {
        backgroundColor: Colors.paua,
        alignSelf: 'center',
        width: '90%',
        height: 460,
        borderRadius: 20,
        marginBottom: '5%'
    },
    subscriptionImage: {
        alignSelf: 'center',
        top: '-5%'
    },
    subscriptionTexts: {
        bottom: '17%'
    },
    btn: {
        height: 56,
        width: '90%',
        borderRadius: 16,
        marginVertical: 10
    },
    settings: {
        height: 88,
        borderRadius: 20,
        width: '90%',
        backgroundColor: Colors.white,
        alignSelf: 'center',
        marginBottom: '15%'
    },
    details: {
        alignSelf: 'center'
    },
    thankYouButton: {
        marginHorizontal: '2%',
    }
});