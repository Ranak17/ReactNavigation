import React, { useEffect, useState } from 'react';
import {View,Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Image,Keyboard, ScrollView, KeyboardAvoidingView, Alert, Animated,Dimensions} from 'react-native';
function Login() {
    const [name,setName]=useState("");
    const [pswd,setPswd]=useState("");
  return (
    <View style={{flex:1,backgroundColor:'gold'}}>
    <StatusBar backgroundColor={"gray"}/>
    <View >
      <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
        <View style={{height:200,width:200,borderRadius:100,overflow:'hidden'}}>
        <Image style={{backgroundColor:'pink',height:'100%',width:'100%'}} source={require('../../assets/insta.jpg')} /></View>
      </View>
      <View style={{alignItems:'center',marginTop:5}}><Text style={{fontSize:30}}>Login Form</Text></View>
      <View style={{marginTop:30,marginHorizontal:10}}>
        <Text style={{fontSize:18,marginVertical:10}}>Enter Your Name</Text>
        <TextInput style={styles.inptField}
        autoCapitalize="none"
        autoCorrect={false}
        // placeholder="Karan"
        value={name}
        onChangeText={(ele)=>{setName(ele)}}
        />
      </View>
      <View style={{marginTop:20,marginHorizontal:10}}>
        <Text style={{fontSize:18,marginVertical:10}} onPress>Enter Your Password</Text>
        <TextInput  style={styles.inptField}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={pswd}
        onChangeText={(ele)=>{setPswd(ele)}}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>{submit()}}><Text style={styles.btnTxt}> Sign in</Text></TouchableOpacity>
      <View style={{marginHorizontal:10}}>
        <Text style={{fontSize:17}}>If You are new then please<Text style={{color:'blue'}} onPress={()=>suFA.start()}>Sign Up</Text></Text></View>
    </View>
</View>
  )
}


const styles=StyleSheet.create({
    inptField:{
      fontSize:18,
      // backgroundColor:'pink',
       borderWidth:1,
       paddingLeft:8,
       borderColor:'gray',
       height:40,
       marginVertical:5,
    borderRadius:5,
    // borderColor:'gray'
    },
    btn:{
      backgroundColor:'pink',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
    marginTop:20,
    backgroundColor:'#1DB8DD',
    borderRadius:5
    },
    btnTxt:{
      fontSize:18,
      color:'white'
    }
  })


export default Login
