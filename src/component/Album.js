import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import * as Colors from '../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import Text from './Text';
import { circles_colors } from '../utils/constants';
import { url } from '../services/config';

const Album = ({ item, index, length }) => {
  const navigation = useNavigation();

  const Icon = item.img_label ? circles_colors[item.ar_name] : undefined

  {
    return item.img_label ?
      (
        <TouchableOpacity
          style={[styles.albumContainer, {
            marginLeft: index == 0 ? 28 : 14, marginRight: index == length ? 28 : 14,
          }]}
          onPress={() => navigation.navigate('AlbumStories', { item, index })}
        >
          <ImageBackground
            resizeMode='stretch'
            style={styles.img}
            imageStyle={{ borderRadius: 15 }}
            source={
              { uri: `${url}/images/${item.img_label}-large.png` }

            }
          >
            {/* source={item.img}> */}

            {Icon ?
              <View style={styles.circle}>
                <Icon width={72} height={72} />
                <Text SFProRoundedSemiBold size={24} color={Colors.white} style={{ left: "1%", bottom: "51%" }}>{index == 1 ? item.audios_count : "1"}</Text>
              </View>

              : null}
          </ImageBackground>

          <Text
            GulfSemiBold
            size={15}
            color="#2f4c63"
            style={styles.title}>
            {item.ar_name}
          </Text>
        </TouchableOpacity>
      ) : null
  }

};
export default Album;

const styles = StyleSheet.create({
  albumContainer: {
    height: 256,
    width: 215,
    backgroundColor: Colors.white,
    borderRadius: 40,
    flexDirection: 'column',
    padding: "0.5%"
  },
  title: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  img: {
    flex: 1,
    shadowColor: "rgba(255, 255, 255, 0.53)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  circle: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    shadowColor: "#cb421e",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    right: "6%",
    top: "-2%"
  }
});
