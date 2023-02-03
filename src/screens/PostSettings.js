import React, { useState } from 'react';
import { View, Text, Button,Animated ,Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather,AntDesign,FontAwesome,MaterialCommunityIcons,Ionicons,SimpleLineIcons } from '@expo/vector-icons';
import {  } from '@expo/vector-icons';

const PostSettings = () => {
    const sizeofIcon=28;
    const phoeheight=Dimensions.get('window').height;
    const [hidden,setHidden] =useState('none')
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
     {/* <Button title='change color' onPress={()=>{
animUp.start()
    }}
    /> */}
    <Animated.View style={{display:hidden,position:'absolute',width:'100%',transform:[{translateY:topValue}],height:'100%',borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'white'}}>
        <View style={{flex:.15,borderBottomWidth:1,padding:10}}>
            <View style={{felx:1,flexDirection:'row',marginTop:10}}>
            <View style={Style.BiB}>
                    <View style={Style.BiB2}>
                    <Feather name="share-2" size={28} color="black" />
                    </View>
                    <Text>share</Text>
            </View>            
            <View style={Style.BiB}>
                <View style={Style.BiB2}>
                <AntDesign name="link" size={28} color="black" />
                </View>
                <Text>Link</Text>
            </View>            
            <View style={Style.BiB}>
                <View style={Style.BiB2}>
                <FontAwesome name="bookmark-o" size={24} color="black" />
                </View>
                <Text>Save</Text>
            </View>            
            <View style={Style.BiB}>
                <View style={Style.BiB2}>
                <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
                </View>
                <Text>QR code</Text>
            </View>            

            </View>
        </View>
        <View style={{flex:.85,padding:10,backgroundColor:'white'}}>
            <View style={Style.editoptions}>
            <Ionicons name="md-archive-outline" size={sizeofIcon} color="black" />
                    <Text style={Style.icts}>Archive</Text>
            </View>
            <View style={Style.editoptions}>
            <Ionicons name="heart-dislike-outline" size={sizeofIcon} color="black" />
                    <Text style={Style.icts}>Hide Like Count</Text>
            </View>
            <View style={Style.editoptions}>
            <Feather name="eye-off" size={sizeofIcon} color="black" />
                    <Text style={Style.icts}>Turn off cmmenting</Text>
            </View>
            <View style={Style.editoptions}>
            <SimpleLineIcons name="pencil" size={sizeofIcon} color="black" />
                    <Text style={Style.icts}>Edit</Text>
            </View>
            <View style={Style.editoptions}>
            <SimpleLineIcons name="pin" size={sizeofIcon} color="black" />
                    <Text style={Style.icts}>Pin to your profile</Text>
            </View>
            <View style={Style.editoptions}>
            <Feather name="share-2" size={sizeofIcon} color="black" />
                    <Text style={Style.icts}>Post to other apps</Text>
            </View>
            <View style={Style.editoptions}>
            <AntDesign name="delete" size={sizeofIcon} color="red" />
            <Text style={Style.icts}>Karan</Text>

            </View>
        </View>
    </Animated.View>
   
    </>
  );
};
const Style = StyleSheet.create({
    editoptions:{
        height:50,
        flexDirection:'row',
        alignItems:'center'
    },
    icts:{
        marginLeft:10,
        fontSize:16,
    },
    BiB:{
        flex:.25,
        justifyContent:'center',
        alignItems:'center'
    },
    BiB2:{
        borderWidth:1,
        borderRadius:100,
        width:70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#727272',
    }
})

export default PostSettings;
