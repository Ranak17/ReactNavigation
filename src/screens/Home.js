import React , {useEffect,useState,useRef} from 'react';
import {View,Text,StatusBar, StyleSheet, Image, Button, TouchableOpacity,ScrollView,Dimensions, FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Footer from '../screens/Footer';
export default function Home({navigation}) {
  const names=[
      {   id:"1",
          picSource:require('../../assets/1.webp')
      },
      {
          id:"2",
          picSource:require('../../assets/2.webp')
      },
      {
          id:"3",
          picSource:require('../../assets/4.webp')
      },
      {
          id:"4",
          picSource:require('../../assets/5.webp')
      }]
      const scrollRef=useRef(null);
    const profilePic=require('../../assets/shiva.jpg');
    const phoneWidth=Dimensions.get('window').width;
  return (
    <>
    <ScrollView   contentContainerStyle={{
    minHeight: '100%',
    paddingBottom: 60,
    backgroundColor:'white'
  }}>
    <View style={{flex:1}}>
        <StatusBar />
        <View style={{marginHorizontal:10,flex:.6}}>
        <View style={{height:100,width:'100%',marginTop:5}}>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{borderRadius:100,overflow:'hidden',width:100,alignItems:'center',justifyContent:'center'}}>
              <Image style={{flex:1}}resizeMode='contain' source={profilePic}/>
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
              <TouchableOpacity style={{width:75,height:75,margin:1,borderColor:'#efefef',borderWidth:1,borderRadius:100,overflow:'hidden'}} onPress={()=>{console.log("click hua")}}>
                <Image source={require('../../assets/car1.jpg')} style={{width:75,height:75, resizeMode:'contain',flex:1}}/>
              </TouchableOpacity>
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
          <TouchableOpacity style={Style.icon} onPress={()=>{scrollRef.current.scrollTo({x:-phoneWidth,y:0,animated:true});}}><MaterialIcons name="grid-on" size={24} color="gray" /></TouchableOpacity>
          <TouchableOpacity style={Style.icon} onPress={()=>scrollRef.current.scrollTo({x:phoneWidth,y:0,animated:true})}><MaterialIcons name="grid-on" size={24} color="gray" /></TouchableOpacity>
        </View>
        </View>
        <ScrollView 
        showsHorizontalScrollIndicator={true}
          contentInset={{ top: -20 }}
  contentOffset={{ x: 0, y: 20 }} 
        horizontal ref={scrollRef} style={{flex:1}}>
          <View style={{width:phoneWidth,flex:.4,marginTop:4,flexDirection:'row',justifyContent:'space-between',flexWrap:"wrap"}}>
            {names.map((ele,index)=>{
              return(<TouchableOpacity key={index} style={Style.post} onPress={()=>{navigation.navigate("Posts",{id:index})}}>
              <Image resizeMode='contain' style={Style.postPic} source={ele.picSource}/>
            </TouchableOpacity>)
            })}
            
        </View>
        <View style={{width:phoneWidth,flex:.4,marginTop:4,flexDirection:'row',justifyContent:'space-between',flexWrap:"wrap"}}>
            {names.map((ele,index)=>{
              return(<TouchableOpacity key={index} style={Style.post} onPress={()=>{navigation.navigate("Posts",{id:index})}}>
              <Image resizeMode='contain' style={Style.postPic} source={ele.picSource}/>
            </TouchableOpacity>)
            })}
            
        </View>
      </ScrollView>



    </View>
    </ScrollView>
    <Footer />

    </>
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
  height:130,
  width:"32.8%",
  marginBottom:2
},
postPic:{
  height:130,
  width:'100%',
  resizeMode:'cover',
}


})