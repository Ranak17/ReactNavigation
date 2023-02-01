import React from 'react';
import {View,Text,StatusBar, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
export default function Home({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <StatusBar />
        <View style={{marginHorizontal:10,flex:.6,backgroundColor:'white'}}>
        <View style={{height:100,width:'100%',marginTop:5}}>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{borderRadius:100,overflow:'hidden',width:100,alignItems:'center',justifyContent:'center'}}>
              <Image style={{flex:1}}resizeMode='contain' source={require('../../assets/shiva.jpg')}/>
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
        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:7}}>
          <TouchableOpacity style={Style.EpSp}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.EpSp}>
            <Text>Share Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:110,width:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',marginTop:3}}>
        <View style={{width:90,height:'100%',justifyContent:'center',alignItems:'center',marginHorizontal:3}}>
            <View style={{width:80,height:80,borderRadius:100,borderWidth:1,borderColor:'#efefef', justifyContent:'center',alignItems:'center'}}>
              <View style={{width:75,height:75,margin:1,borderColor:'#efefef',borderWidth:1,borderRadius:100,overflow:'hidden'}}>
                <Image source={require('../../assets/car1.jpg')} style={{width:75,height:75, resizeMode:'contain',flex:1}}/>
              </View>
            </View>
          <Text>b17 family</Text>
          </View>
          <View style={{width:90,height:'100%',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:80,height:80,borderRadius:100,borderWidth:1,borderColor:'#efefef', justifyContent:'center',alignItems:'center'}}>
              <View style={{width:75,height:75,margin:1,borderColor:'#efefef',borderWidth:1,borderRadius:100,overflow:'hidden'}}>
                <Image source={require('../../assets/1st.jpg')} style={{width:75,height:75, resizeMode:'contain',flex:1}}/>
              </View>
            </View>
          <Text>lines</Text>
          </View>
        </View>
        <View style={{height:30,flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <View style={Style.icon}><MaterialIcons name="grid-on" size={24} color="gray" /></View>
          <View style={Style.icon}><MaterialIcons name="grid-on" size={24} color='gray' /></View>
        </View>
        </View>
        <View style={{flex:.4,marginTop:4,flexDirection:'row',justifyContent:'space-between',flexWrap:"wrap"}}>
          <View style={Style.post}>
            {/* <Text>Karan</Text> */}
            <Image resizeMode='contain' style={Style.postPic} source={require("../../assets/hanuman.jpg")}/>
          </View>
          <View style={Style.post}>
            {/* <Text>Karan</Text> */}
            <Image resizeMode='contain' style={Style.postPic} source={require("../../assets/car1.jpg")}/>
          </View>
          <View style={Style.post}>
            {/* <Text>Karan</Text> */}
            <Image resizeMode='contain' style={Style.postPic} source={require("../../assets/ganesha.jpg")}/>
          </View>
          <View style={Style.post}>
            {/* <Text>Karan</Text> */}
            <Image resizeMode='contain' style={Style.postPic} source={require("../../assets/shiva.jpg")}/>
          </View>
        </View>
    </View>
  )
}

const Style = StyleSheet.create({
  pofofo:{
    // backgroundColor:'green',
  flex:.333,
  alignItems:'center',
  justifyContent:'center'},

EpSp:{
// backgroundColor:'green',
backgroundColor:'#efefef',
// borderWidth:1,
// borderColor:'black',
height:35,
flex:.49,
borderRadius:10,
justifyContent:'center',
alignItems:'center'
},
icon:{
  // backgroundColor:'pink',
  flex:.5,
  justifyContent:'center',
  alignItems:'center',
  height:40
},
post:{
  // backgroundColor:'gold',
  height:120,
  width:126,
  marginBottom:2
  // overflow:'hidden',
  // flex:.328,
},
postPic:{
  height:120,
  width:'100%',
  resizeMode:'cover',
}


})