import React from 'react'
import { View ,StyleSheet ,ScrollView } from 'react-native'

import Header from '../components/Header'
import Card from '../components/Card'


export default function Category() {
    const {CardContainer ,MainContainer } = Styles
    const album = {
        "uri" : "https://i.ibb.co/kBqN5f9/IMG-20200108-WA0005.jpg",
        "text" : "MGU"
    }
    const album1 = {
        "uri" : "https://www.w3schools.com/css/img_lights.jpg",
        "text" : "PSC"
    }
    const album2 = {
        "uri" : "https://www.w3schools.com/css/img_mountains.jpg",
        "text" : "KERALA University"
    }
    const album3 = {
        "uri" : "https://www.w3schools.com/css/img_5terre.jpg",
        "text" : "Calicut University"
    }
    return(
        <View>
            <Header HeaderText={'Category'} />
            <ScrollView style={MainContainer}>
                <View style={CardContainer}>
                    <Card Album={album}/>
                    <Card Album={album1}/>
                </View>
                <View style={CardContainer}>
                    <Card Album={album2}/>
                    <Card Album={album3}/>
                </View>
                <View style={CardContainer}>
                    <Card Album={album}/>
                    <Card Album={album1}/>
                </View>
                <View style={CardContainer}>
                    <Card Album={album2}/>
                    <Card Album={album3}/>
                </View>
                <View style={CardContainer}>
                    <Card Album={album}/>
                    <Card Album={album1}/>
                </View>
                <View style={CardContainer}>
                    <Card Album={album2}/>
                    <Card Album={album3}/>
                </View>
            </ScrollView>
        </View>
    );
};

const Styles= StyleSheet.create({
    CardContainer:{
        margin:3,
        marginBottom:40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    MainContainer:{
        marginTop:50,
        marginBottom:50
    }
});

