import React from "react";
import { ImageBackground, StyleSheet, Text, View ,TouchableOpacity ,Image } from "react-native";

const image1 = { uri: "https://i.ibb.co/jVQZ5GJ/128595-online-lectures.jpg" };
const image2 = { uri: "https://i.ibb.co/3sqPFMD/back-2.png"};


export default function SubjectHeadrer({SubjectName}) {
    const { container , text ,imageStyle, icon} =Styles
  return (
    <View style={container}>
        <ImageBackground source={image1} style={imageStyle}>
            <TouchableOpacity>
                <Image style={icon} source={image2} />
            </TouchableOpacity>
        </ImageBackground>
        <Text style={text}>{SubjectName}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height:305,
        paddingTop:18,
        backgroundColor:'#fff',
        shadowColor: '#fff',
        shadowOffset: { width: 0 ,height: 20 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
      },
      imageStyle: {
        resizeMode: "cover",
        justifyContent: "center",
        height:230
      },
      text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        padding:15,
        textAlign: 'center',
      },
      icon:{
          width:33,
          height:33,
          marginLeft:15,
          marginTop:-95
      }
})