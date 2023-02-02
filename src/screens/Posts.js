import React, {useRef, useEffect,useState} from 'react'
import { View,Text,Image, ScrollView, FlatList } from 'react-native';
import { Entypo,Feather,FontAwesome5,FontAwesome } from '@expo/vector-icons';
import Footer from "../screens/Footer";

function Posts({route}) {
    console.log(typeof route.params.id);
    console.log(route.params.id);
    const id= route.params.id;
    const names=[
        {   id:1,
            name:'shiva',
            picSource:require('../../assets/shiva.jpg')
        },
        {
            id:2,
            name:'ganesh',
            picSource:require('../../assets/ganesha.jpg')
        },
        {
            id:3,
            name:'hanuman',
            picSource:require('../../assets/hanuman.jpg')
        },
        {
            id:4,
            name:'car1',
            picSource:require('../../assets/car1.jpg')
        },
        {
            id:5,
            name:'car2',
            picSource:require('../../assets/1st.jpg')
        },
        {
            id:6,
            name:'car2',
            picSource:require('../../assets/car2.jpg')
        },
        {
            id:7,
            name:'hanuman',
            picSource:require('../../assets/hanuman.jpg')
        }]    
  return (<>
    <View style={{flex:1,backgroundColor:'white'}}>
    <FlatList 
    data={names}
    initialScrollIndex={id}
    renderItem={(ele,index)=>{
        // console.log(ele.item);
        // console.log(`../../assets/`)
        return(      <View id={ele.item.id}>
        <View style={{backgroundColor:'white',height:70,flexDirection:'row'}}>
        <View style={{flex:.2,height:'100%',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:45,height:45,marginLeft:5,borderRadius:100,overflow:'hidden'}}>
                <Image style={{width:45,height:45}} source={require('../../assets/shiva.jpg')} /> 
            </View>
        </View>
        <View style={{flex:.7,height:'100%'}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>_karansingh17</Text>
            <Text>Leh Ladakh</Text>
            <Text>song</Text>
        </View>
        <View style={{flex:.1,height:'100%',justifyContent:'center',alignItems:'center'}}>
        <Entypo name="dots-three-vertical" size={24} color="gray" />
        </View>
        </View>
        <View style={{height:270,alignItems:'center',justifyContent:'center'}}>
            <Image style={{flex:1,resizeMode:'contain'}} source={ele.item.picSource} />
        </View>
        <View style={{height:30,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',flex:.5}}>
                <FontAwesome style={{marginHorizontal:3}}name="heart-o" size={24} color="gray" />
                <FontAwesome5 style={{marginHorizontal:3}} name="comment" size={24} color="gray" />
                <Feather style={{marginHorizontal:3}} name="share-2" size={24} color="gray" />
            </View>
            <View style={{flex:.5,flexDirection:'row',justifyContent:'flex-end'}}>
            <FontAwesome style={{marginRight:4}}name="bookmark-o" size={24} color="gray" />
            </View>   
            <View></View>
        </View>
        <View style={{height:100}}><Text>Comment Box</Text></View>
      </View>);
    }}/>
    </View>
    <Footer/>
    </>
  )
}

export default Posts
