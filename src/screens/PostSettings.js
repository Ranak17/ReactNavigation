import React, { useState } from 'react';
import { View, Text, Button,Animated ,Dimensions, TouchableOpacity} from 'react-native';

const PostSettings = () => {
    const phoeheight=Dimensions.get('window').height;
    const [hidden,setHidden] =useState('flex')
    const topValue=useState(new Animated.Value(phoeheight))[0];
    const animUp =Animated.timing(topValue,{
        toValue:200,
        duration:100,
        useNativeDriver:true
    });
    const animDown =Animated.timing(topValue,{
        toValue:phoeheight,
        duration:100,
        useNativeDriver:true
    });
  return (
    <>
    <TouchableOpacity activeOpacity={1} style={{flex:1,backgroundColor:'gold'}} onPress={()=>{
        animUp.stop();
        animDown.start()}}></TouchableOpacity>
    <Animated.View style={{display:hidden,position:'absolute',width:'100%',transform:[{translateY:topValue}],height:'100%', backgroundColor:'pink'}}/>
    <Button title='change color' onPress={()=>{
animUp.start()
    }}/>
    </>
  );
};

export default PostSettings;
