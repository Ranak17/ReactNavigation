import React from 'react';
import {View,Text,StatusBar, StyleSheet, Image, Button} from 'react-native';
export default function Home({navigation}) {
  return (
    <View style={{flex:1}}>
        <StatusBar />
        <View style={{marginHorizontal:10,flex:1,backgroundColor:'white'}}>
        <View style={{height:100,width:'100%',marginTop:5}}>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{borderRadius:100,overflow:'hidden', backgroundColor:'green',width:100,alignItems:'center',justifyContent:'center'}}>
              <Image style={{flex:1}}resizeMode='contain' source={require('../../assets/icon.png')}/>
            </View>
            <View style={Style.pofofo}>
              <Text>12</Text>
              <Text>Posts</Text>
            </View>
            <View style={Style.pofofo}>
            <Text>83</Text>
              <Text>Followers</Text>
            </View>
            <View style={Style.pofofo}>
            <Text>188</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <View><Text>Singh Karan</Text></View>
        <View><Text>About</Text></View>
        <View><Text>Followed by ...</Text></View>
        </View>
        <Button title="About" onPress={()=>{navigation.navigate('About')}} />
    </View>
  )
}

const Style = StyleSheet.create({
  pofofo:{
    // backgroundColor:'green',
  flex:.333,
  alignItems:'center',
  justifyContent:'center'}
})