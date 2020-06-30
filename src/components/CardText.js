import React from 'react'
import { Text ,StyleSheet } from 'react-native'

export default function CardText({CardText}){
    const { TextStyle } = Styles
    return(
        <Text style={TextStyle}>{CardText}</Text>
    );
};

const Styles= StyleSheet.create({
    TextStyle:{
        fontSize: 18,
        padding:5
    }
})