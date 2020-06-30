import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

import CardImage from './CardImage'
import CardText from './CardText'

export default function Card({Album}){
    const { CardStyle } = Styles
    return(
        <View style={CardStyle}>
            <CardImage CardImage={Album.uri}/>
            <CardText CardText={Album.text}/>
        </View>
    );
};

const Styles= StyleSheet.create({
    CardStyle:{
        flexDirection :'column',
        justifyContent: 'space-around',
    },
})
