import React from 'react';
import {TouchableOpacity,StyleSheet,View, Image} from 'react-native'
import Text  from './Text';
import * as Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Error =(props) =>{
    return(
        <Text
            size={13}
            color={Colors.red}
            style={[props.style,{textAlign:'left'}]}
        >
            {props.children}
        </Text>
    )
}
const Paragraph =(props) =>{
    return(
        <Text
            size={props.size ?? 16}
            color = {props.color ?? Colors.black}
            style={[props.style]}
            {...props}
        >
            {props.children}
        </Text>
    )
}
const Link =(props) =>{
    return(
        <TouchableOpacity
            {...props}
            onPress={props.onPress}
            style={[{flexDirection:'row',alignItems:'center'},props.style]}
        >   
            {props.iconName && 
                <Icon 
                    name={props.iconName}
                    size={18}
                    color={Colors.mainColor}
                    style={{marginHorizontal:5}}
                />
            }
            {props.source && 
                <Image 
                    source={props.source}
                    style={{marginHorizontal:5}}
                />
            }
            <Text
                size={props.size ?? 12}
                color={props.color ?? Colors.mainColor}
                style={[props.style]}
                semibold
            >
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  
})
export {Paragraph, Link, Error};
