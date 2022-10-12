import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Text from './Text';
import { Play } from '../assets/images/iconSvg';
import { Audio } from 'expo-av';
import { url } from '../services/config';

const Story = ({ item, index }) => {

  const navigation = useNavigation();
  const [sound, setSound] = useState();

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      {
         url + item.url
      },
      {
        isMuted: false,
        rate: 1.0
      },
    );

    setSound(sound);

  }

  /*   useEffect(() => {
      if (!sound || (sound && !sound._loaded)) {
        loadSound()
      }
  
    }, [sound]);
   */
  {
    return (
        <TouchableOpacity
          style={[{ marginTop: '2%' }, styles.storyContainer]}
          onPress={() => {
            item.ar_name ? navigation.navigate('StoryDetails', { item }) : null
          }}>
          <ImageBackground style={styles.storyPlate} source={require('../assets/images/StoryMainPlate.png')} resizeMode='stretch'>
            <TouchableOpacity style={styles.play}
              onPress={() => item.ar_name? navigation.navigate('StoryDetails', { item }) : null}>
              <Play />
            </TouchableOpacity>

            <ImageBackground style={styles.img} imageStyle={{ borderRadius: 30 }}
              source={
              
                  item.img
              } />

            <View style={styles.details}>
              <View style={{ width: "40%" }}>
                <Text GulfSemiBold size={17} color="#2f4c63"
                  style={item.ar_name && item.ar_name.split(" ").length > 2 ? styles.title : null}>{item.ar_name ? item.ar_name : item.title}</Text>
              </View>
              <Text SFProRoundedMedium size={17} color="#0e9dcb">{item.time} دقيقة </Text>

            </View>
          </ImageBackground>
        </TouchableOpacity>
        :
        null
    )
  };
};
export default Story;

const styles = StyleSheet.create({
  storyContainer: {
    flex: 1,
    marginHorizontal: "4%",
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2%'
  },
  storyPlate: {
    width: "90%",
    height: 128,
  },
  play: {
    alignSelf: "flex-end",
    top: '28%',
    right: '1%',
    position: 'absolute'
  },
  title: {
    lineHeight: 35
  },
  img: {
    marginBottom: 0,
    bottom: 3,
    marginTop: 6,
    marginHorizontal: 5,
    width: 138,
    height: 120,
    shadowColor: "rgba(255, 255, 255, 0.53)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  details: {
    marginTop: '-30%',
    marginLeft: "42%",
    width: "100%",
  }
});

