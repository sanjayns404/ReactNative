import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

import CardImage from './CardImage'
import CardText from './CardText'
import CardTagline from './CardTagline'
import Subject from '../screens/Subject'


export default function SubjectCard({Subject}){
    const { CardStyle, TextContainer } = Styles
    return(
        <View style={CardStyle}>
            <View>
                <CardImage CardImage={Subject.uri}/>
            </View>
            <View style={TextContainer}>
                <CardText CardText={Subject.title}/>
                <CardTagline CardTaglineText={Subject.unit} />
                <CardTagline CardTaglineText={Subject.videos} />
            </View>
        </View>
    );
};

const Styles= StyleSheet.create({
    CardStyle:{
        flexDirection :'row',
        justifyContent: 'space-around',
        borderColor: '#f8f8f8',
        borderColor: 24,
        borderWidth: 1,
        borderRadius:15,
        padding:15,
        marginTop:30,
        marginLeft:8,
        marginRight:8,
    },
    TextContainer:{
        width:150,
        flexDirection: "column",
        justifyContent: "space-around"
    }
})