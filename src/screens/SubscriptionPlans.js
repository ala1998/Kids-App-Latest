import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { BackIcon } from '../assets/images/iconSvg'
import { Text, Button, CircularIcon } from '../component'
import Child from '../component/Child';
import * as Colors from '../styles/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const SubscriptionPlans = ({ navigation }) => {


    return (
        <View style={styles.parentsAccessScreen}>
            <ScrollView style={styles.mainScrollView}>
                <View style={styles.premiumSubscriptionView}>
                <TouchableOpacity style={styles.parentsAccessHeaderLogs}
                    onPress={() => navigation.goBack()}>
                    <CircularIcon
                        Icon={BackIcon}
                        circleSize={50}
                        borderColor={Colors.subscriptionPlansTransparent}
                        backgroundColor={Colors.subscriptionPlansTransparent} />
                </TouchableOpacity>
                
                    <Image source={require('../assets/images/PremiumSubscription-Large.png')}
                        style={styles.subscriptionImage}></Image>
                    <View style={styles.subscriptionTexts}>
                        <Text center GulfSemiBold size={19} color={Colors.white} style={{ paddingHorizontal: '5%', top: '-55%' }}>خطة الاشتراك</Text>
                        <Text GulfText size={16} color={"#76f6ff"} 
                        style={{ paddingHorizontal: '5%' }}>
                            {"✦ تمتع بوصول كامل لكافة القصص لأطفالك.\n\n✦ قصص حصرية للمشتركين فقط.\n\n✦ قصص جديدة ستضاف بشكل روتيني."}</Text>
                        <Text center style={{ paddingHorizontal: '10%', marginTop: '5%' }}>
                            <Text GulfText size={13} color={Colors.white} style={{ lineHeight: 30 }}>{"تعرّف على الخطط المتوفرة والأسعار واختر ما يناسبك وأطفالك."}</Text>
                            <Text GulfSemiBold size={13} color={Colors.white} style={{ lineHeight: 20 }} >{" تمتع ب ٧ أيام مجانية تجريبية."}</Text>
                        </Text>

                    </View>

                    <View style={styles.plansPlates}>
                        <ImageBackground style={styles.monthlyYearlyPlan}
                        >
                            <Image source={require('../assets/images/Yearly-Plan.png')}
                                style={{ top: '-5%', alignSelf: 'center' }}></Image>
                            <Text center GulfText size={14} color={"#ff6c56"}
                                style={{ top: '-13%' }} >الخطة السنوية</Text>
                            <Text style={{ alignSelf: 'center', top: '-17%' }}>
                                <Text center SFProRoundedMedium size={26} color={Colors.white}
                                    style={{}} >$71.99</Text>
                                <Text center GulfText size={15} color={"#f0f0f2"}
                                    style={{}} > سنوياً</Text>
                            </Text>
                            <Text style={{ alignSelf: 'center', top: '-23%' }}>
                                <Text center SFProRoundedLight size={16} color={Colors.white}
                                    style={{}} >{"( $6 "}</Text>
                                <Text center GulfText size={13} color={"#f0f0f2"}
                                    style={{}} > / شهر</Text>
                                <Text center SFProRoundedLight size={16} color={Colors.white}
                                    style={{}} >{" )"}</Text>
                            </Text>
                            <Text center GulfSemiBold size={13} color={Colors.white}
                                style={{ top: '-23%', opacity: 0.5 }} >أول 7 أيام مجانية</Text>
                            <View style={styles.bestValue}>
                                <Text center GulfText size={15} color={Colors.white}
                                    style={{ marginVertical: '-7%' }} >القيمة الأفضل</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={[styles.monthlyYearlyPlan, { borderWidth: 0, height: 230, bottom: '-3.5%' }]}
                        >
                            <Image source={require('../assets/images/Monthly-Plan.png')}
                                style={{ top: '-10%', alignSelf: 'center' }}></Image>
                            <Text center GulfText size={14} color={"#efd62c"}
                                style={{ top: '-18%' }} >الخطة الشهرية</Text>
                            <Text style={{ alignSelf: 'center', top: '-22%' }}>
                                <Text center SFProRoundedMedium size={26} color={Colors.white}
                                    style={{}} >$9.99</Text>
                                <Text center GulfText size={15} color={"#f0f0f2"}
                                    style={{}} > شهرياً</Text>
                            </Text>
                            {/* <Text style={{alignSelf: 'center', top: '-23%'}}>
                            <Text center SFProRoundedLight size={16} color={Colors.white}
                            style={{}} >{""}</Text>
                             <Text center GulfText size={13} color={"#f0f0f2"}
                            style={{}} ></Text>
                               <Text center SFProRoundedLight size={16} color={Colors.white}
                            style={{}} >{""}</Text>
                               </Text> */}
                            <Text center GulfSemiBold size={13} color={Colors.white}
                                style={{ top: '-14%', opacity: 0.5 }} >أول 7 أيام مجانية</Text>

                        </ImageBackground>
                    </View>
                    <Button
                        purple
                        fontFamily="GulfSemiBold"
                        textSize={19}
                        textStyle={{ marginTop: -10 }}
                        buttonStyle={styles.btn}
                        style={styles.thankYouButton}
                    >
                        جرب مجاناً واشترك
                    </Button>
                    <Text center style={{ paddingHorizontal: '8%', bottom: '14.5%' }}>
                        <Text GulfText size={13} color={Colors.white} style={{ lineHeight: 20 }}>بعد ال </Text>
                        <Text SFProRoundedRegular size={13} color={Colors.white} style={{ lineHeight: 20 }}>7 </Text>
                        <Text GulfText size={13} color={Colors.white} style={{ lineHeight: 20 }}>أيام المجانية التجريبية، سيتم تحصيل </Text>
                        <Text SFProRoundedRegular size={13} color={Colors.white} style={{ lineHeight: 20 }}>71.99</Text>
                        <Text GulfText size={13} color={Colors.white} style={{ lineHeight: 20 }}> دولارًا منك ما لم تقم بإلغاء الاشتراك ما لا يقل عن 24 ساعة قبل التجديد في 24 يناير 2022. أول 7 أيام مجاناً.</Text>
                    </Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', bottom:'40%' }}>
                        <Text GulfText size={13} color={Colors.lightPurple} style={{ marginRight: '3%' }}>سياسة الخصوصية وشروط الاستخدام</Text>
                        <CircularIcon
                            style={{ top: '50%', }}
                            circleSize={3}
                            borderColor={Colors.white}
                            backgroundColor={Colors.white} />
                        <Text GulfText size={13} color={Colors.lightPurple} style={{ marginLeft: '3%' }}>استعادة الشراء</Text>
                    </View>
                    
                    <LinearGradient >
                    <Text center GulfSemiBold size={20} color={Colors.paua} >لماذا يحبنا الأطفال والأهالي؟</Text>
                    <Text center GulfText size={15} color={Colors.paua} style={{ paddingHorizontal: '16%' }}>{"تعرّف على بعض من آراء الأطفال والآباء حول قصصنا والتطبيق."}</Text>
                    <Image source={require('../assets/images/ChildrenAndAnimals.png')}
                    style={styles.childrenAnimals}></Image>
                </LinearGradient>
                </View>           
            </ScrollView>
        </View >
    );
};
export default SubscriptionPlans;

const styles = StyleSheet.create({
    parentsAccessScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colors.paua,
        height: '100%',
    },
    parentsAccessHeaderLogs: {
        paddingTop: Platform.OS == 'ios' ? 70 : 50,
        marginHorizontal: '-1%',
        // top: '0%',
        position: 'absolute',
        zIndex: 1
    },
    parentsAccessHeaderImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: "5%",
        marginTop: "-25%"
    },
    title: {
        zIndex: 1,
        marginBottom: "-30%",
        marginLeft: "5%",
        left: '-5%',
        lineHeight: 60
    },
    mainScrollView: {
        borderRadius: 20,
        width: '100%',
        alignSelf: 'center',
        height: '100%',
    },
    parentsAccessTexts: {
        textAlign: 'center',
        marginVertical: -5,
    },
    premiumSubscriptionView: {
        alignSelf: 'center',
        width: '90%',
        marginBottom: '100%',
    },
    subscriptionImage: {
        alignSelf: 'center',
        width: '100%',
        height: '37%',
        left: '3%',
        resizeMode: 'contain',
        top: '-9%'
    },
    subscriptionTexts: {
        bottom: '23%',
    },
    btn: {
        height: 65,
        // marginHorizontal: 30,
        width: '90%',
        borderRadius: 20,
        // marginVertical: 10,
    },
    thankYouButton: {
        display: 'flex',
        // marginBottom: '3%',
        marginHorizontal: '-1%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '16%'
    },
    monthlyYearlyPlan: {
        width: '45%',
        height: 250,
        backgroundColor: "#151331",
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: Colors.purple,
        marginRight: '5%'
    },
    // monthlyPlan: {
    //     width: 148,
    //     height: 216,
    //     backgroundColor: "#151331",
    //     borderRadius: 20,
    //     bottom: '10%',
    //     borderStyle: 'solid',
    //     borderWidth: 2,
    //     borderColor: Colors.purple
    // },
    plansPlates: {
        flexDirection: 'row',
        marginLeft: '3%',
        marginRight: '-2%',
        bottom: '70%',
        marginBottom: "-5%"
    },
    bestValue: {
        width: '60%',
        height: 30,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: Colors.purple,
        top: '-18%',
    },
    gradient:{
      
    },
    childrenAnimals:{
        width: '90%',
       alignSelf: 'center' 
    }
});