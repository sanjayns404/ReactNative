import React from 'react';
import { StyleSheet ,View } from 'react-native';

import Subject from './src/screens/Subject'



export default function App() {
  return (
    <View style={Styles.Root}>
        <Subject />
    </View>
  );
}

const Styles = StyleSheet.create({
  Root:{
    flex :1
  }
})

