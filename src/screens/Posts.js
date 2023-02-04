import React, {useRef, useEffect,useState} from 'react'
import { View,Text,Image, FlatList,StyleSheet,Dimensions,Animated, TouchableOpacity,RefreshControl } from 'react-native';
import { Entypo,Feather,FontAwesome5, AntDesign,FontAwesome,MaterialCommunityIcons,Ionicons,SimpleLineIcons  } from '@expo/vector-icons';
import Footer from "../screens/Footer";
import PostSettings from './PostSettings';

function Posts({route}) {
    // console.log(typeof route.params.id);
    // console.log(route.params.id);
    
    const id= route.params.id;
// let id =0;
//     try{
//     id= route.params.id;
// }catch(err)
// {
//      id= 0;
// }   
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

        //Post Settings
        const sizeofIcon=28;
    const phoeheight=Dimensions.get('window').height;
    const [hidden,setHidden] =useState('flex');
    const [opacity,setOpacity]=useState(1)
    const topValue=useState(new Animated.Value(phoeheight))[0];
    const animUp =Animated.timing(topValue,{
        toValue:150,
        duration:100,
        useNativeDriver:true
    });
    const animDown =Animated.timing(topValue,{
        toValue:phoeheight,
        duration:100,
        useNativeDriver:true
    });
  return (<>
    <View activeOpacity={1} style={{flex:1,backgroundColor:'white',opacity:opacity}}>
    <FlatList 
    keyExtractor={(item)=>{return item.id}}
    refreshControl={
        <RefreshControl 
        refreshing={false}
        />
    }
    removeClippedSubviews={true}
    initialNumToRender={2}
    windowSize={5}
    data={names}
    initialScrollIndex={id}
    renderItem={(ele,index)=>{
        // console.log(ele.item);
        // console.log(`../../assets/`)
        return(     
             <View key={index} id={ele.item.id}>
        <View style={{backgroundColor:'white',height:70,flexDirection:'row'}}>
        <View style={{flex:.2,height:'100%',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:45,height:45,marginLeft:5,borderRadius:100,overflow:'hidden'}}>
                <Image style={{width:45,height:45}} source={require('../../assets/1.png')} /> 
            </View>
        </View>
        <View style={{flex:.7,height:'100%'}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>_karansingh17</Text>
            <Text>Leh Ladakh</Text>
            <Text>song</Text>
        </View>
        <View style={{flex:.1,height:'100%',justifyContent:'center',alignItems:'center'}}>
        <Entypo name="dots-three-vertical" size={24} color="gray" onPress={()=>{animUp.start();setOpacity(0.5);}}/>
        </View>
        </View>
        <View style={{height:270,alignItems:'center',justifyContent:'center'}}>
            <Image style={{flex:1,resizeMode:'cover',height:200,width:200}} source={ele.item.picSource} />
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
            <Text style={Style.icts}>Delete</Text>

            </View>
        </View>
    </Animated.View>
    <Footer/>
    </>
  )
}
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


export default Posts
