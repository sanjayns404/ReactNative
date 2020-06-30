import React from "react";
import { View ,Text ,StyleSheet } from "react-native";

function Header({HeaderText}){
    const { ViewStyle, TextStyle } = Styles
    return (
        <View style={ViewStyle}>
            <Text style={TextStyle}>{HeaderText}</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor:'#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0 ,height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    TextStyle: {
        fontSize:20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Header;