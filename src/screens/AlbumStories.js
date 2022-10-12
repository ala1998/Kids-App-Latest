import React, { useState } from 'react';
import {
    View,
    ScrollView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

import {
    gradient_colors
} from '../utils/constants.js';

import { LinearGradient } from 'expo-linear-gradient';
import { url } from '../services/config';

// Assets
// Utils
import {
    // stories,
} from '../utils/constants.js';
import * as Colors from '../styles/Colors';

import { FavoritesHeaderIcon, BackIcon } from '../assets/images/iconSvg'
import { Text, Story, CircularIcon } from '../component'

const AlbumStories = ({ navigation, route }) => {

    const { item, index } = route?.params;

    const [stories, setStories] = useState(item.audios);
    // console.log('item', item);
    // console.log("stories", stories);

    
    // item.img = 
    return (
        <ImageBackground
            style={{
                height: '100%',
                flexDirection: 'column',
                backgroundColor: gradientColors[2],
                flex: 1
            }}>

            <ImageBackground
                style={styles.screenHeader}
                source={

                }
            >
                <View style={styles.headerLogs}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CircularIcon
                            Icon={BackIcon}
                            circleSize={50}
                            borderColor="rgba(255, 255, 255, 0.11)"
                            backgroundColor="rgba(255, 255, 255, 0.11)" />
                    </TouchableOpacity>
                    <CircularIcon
                        Icon={FavoritesHeaderIcon}
                        circleSize={50}
                        borderColor="rgba(255, 255, 255, 0.11)"
                        backgroundColor="rgba(255, 255, 255, 0.11)" />

                </View>
            </ImageBackground>
          

            <LinearGradient >
                <Text VibesRegular color={Colors.white} size={64} style={styles.title}>
                    {item.title}
                </Text>
            </LinearGradient>
            {/* </LinearGradient> */}
            <Text GulfMedium color={Colors.white} size={20} style={styles.amount}>
                {"قصة واحدة"}
            </Text>
            <ScrollView style={[styles.StoriesView, { backgroundColor: gradientColors[2] }]} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    {stories.map((story, index) => (
                        <Story item={story} index={index} length={stories.length - 1} />
                    ))}
                </View>
            </ScrollView>
            {/* </ImageBackground> */}

        </ImageBackground>
    );
};
export default AlbumStories;

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: Colors.orangeBackground,
    },
    screenHeader: {
        width: '100%',
        height: 350,
    },
    headerLogs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Platform.OS == 'ios' ? 70 : 50,
        marginBottom: "75%",
        marginHorizontal: "5%"
    },
    screenBody: {
        backgroundColor: Colors.orangeBackground,
    },
    title: {
        textAlign: 'center',
        fontWeight: "normal",
        fontStyle: "normal",
        marginTop: '17%'
    },
    amount: {
        textAlign: 'center',
        fontWeight: "500",
        fontStyle: "normal",
        marginTop: "-3%",
    },
    StoriesView: {
        height: '100%',
        backgroundColor: 'rgb(90,91,55)',
        marginTop: '5%',
        marginBottom: '5%'
    }
});