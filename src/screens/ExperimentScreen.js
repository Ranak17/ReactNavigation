import React from 'react';
import { Text, View ,Animated, StyleSheet,Dimensions, ScrollView} from 'react-native';
function ExperimentScreen() {
    let width=Dimensions.get('window').width;
    console.log(width)
  return (
    <View style={{flexDirection:'row',flex:1}}>
        <View id='1' style={Style.red}></View>
        <View id='2' style={Style.green}></View>
    </View>
  )
}
const Style= StyleSheet.create({
    green:{
        // display:'none',
        width:300,
        // left:0,
        height:'100%',
        backgroundColor:'green'
        },
    red:{
        width:300,
        // display:'none',
        height:'100%',
        backgroundColor:'red'
        }
})

export default ExperimentScreen;
