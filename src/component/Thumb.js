import React from 'react';
import { View } from 'react-native';

import * as Colors from '../styles/Colors'

const Thumb = () => {
    return (

        <View style={{
            width: 32,
            height: 32,
            // left: 21,
            borderRadius: 32 / 2,
            backgroundColor: Colors.white,
            transform: [
                { scaleX: 1 }
            ],
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            marginVertical: 60,
            // marginHorizontal: 20

        }}>
     {/*        <View style={{
                width: 5,
                height: 5,
                borderRadius: 5 / 2,
                // right: 31,
                // top: 7,
                backgroundColor: Colors.thumbOrange,
                transform: [
                    { scaleX: 1 }
                ],
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 60,
                marginHorizontal: 20

            }}>
            </View> */}
        </View>
    );
}

export default Thumb;