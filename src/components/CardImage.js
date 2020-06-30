import React from 'react'
import { Image ,StyleSheet } from 'react-native'

export default function CardImage({CardImage}){
    const { ImageStyle } = Styles
    return(
        <Image style={ImageStyle} source={{ uri : CardImage }} />
    );
};

const Styles= StyleSheet.create({
    ImageStyle:{
        height: 100,
        width:150,
        borderRadius:15,
    },
})
