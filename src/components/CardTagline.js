import React from 'react'
import { Text ,StyleSheet } from 'react-native'

export default function CardTagline({CardTaglineText}){
    const { TextStyle } = Styles
    return(
        <Text style={TextStyle}>{CardTaglineText}</Text>
    );
};

const Styles= StyleSheet.create({
    TextStyle:{
        fontSize: 14,
        padding:5,
        color:'#fff',
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin:2
    }
})