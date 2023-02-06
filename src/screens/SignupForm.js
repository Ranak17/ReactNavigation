import React, {useState} from 'react';
import {View,Text, StyleSheet,TextInput,ScrollView,StatusBar,Image,TouchableOpacity,RefreshControl} from 'react-native';
function SignupForm(props) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const submit = () =>{
    let data={name,email,username,password};
    fetch('http://192.168.1.9:3005/users',
    {
      method:'POST',
      mode: 'cors',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    }).then((res)=>{
      if(res.ok){
        console.log("navigation is not working")
      }else{
        console.log("error while submiting form");
      }
    });
    props.suFA2.start();
  }
  // console.log({name,email,username,password});
  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View>
        <StatusBar backgroundColor={"gray"}/>
        <View >
          {/* <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
            <View style={{height:200,width:200,borderRadius:100,overflow:'hidden'}}>
            <Image style={{backgroundColor:'pink',height:'100%',width:'100%'}} source={require('../../assets/insta.jpg')} />
            </View>
          </View> */}
          <View style={{alignItems:'center',marginTop:5}}><Text style={{fontSize:30}}>Sign up</Text></View>
          <View style={{marginTop:30,marginHorizontal:10}}>
            <Text style={{fontSize:18,marginVertical:10}}>Name :</Text>
            <TextInput style={styles.inptField}
            autoCapitalize="none"
            autoCorrect={false}
            // placeholder="Karan"
            value={name}
            onChangeText={(ele)=>{setName(ele)}}
            />
          </View>          
          <View style={{marginTop:30,marginHorizontal:10}}>
            <Text style={{fontSize:18,marginVertical:10}}>Email :</Text>
            <TextInput style={styles.inptField}
            autoCapitalize="none"
            autoCorrect={false}
            // placeholder="Karan"
            value={email}
            onChangeText={(ele)=>{setEmail(ele)}}
            />
          </View>          
          <View style={{marginTop:30,marginHorizontal:10}}>
            <Text style={{fontSize:18,marginVertical:10}}>Username :</Text>
            <TextInput style={styles.inptField}
            autoCapitalize="none"
            autoCorrect={false}
            // placeholder="Karan"
            value={username}
            onChangeText={(ele)=>{setUsername(ele)}}
            />
          </View>
          <View style={{marginTop:20,marginHorizontal:10}}>
            <Text style={{fontSize:18,marginVertical:10}} onPress>Password :</Text>
            <TextInput  style={styles.inptField}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(ele)=>{setPassword(ele)}}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>{submit()}}><Text style={styles.btnTxt}> Sign Up</Text></TouchableOpacity>
          <View style={{marginHorizontal:10,marginTop:10}}><Text style={{fontSize:17}}>If You already have account then <Text style={{color:'blue'}} onPress={()=>props.suFA2.start()}>Sign In</Text></Text></View>
        </View>
    </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
    inptField:{
      fontSize:18,
       borderWidth:1,
       paddingLeft:8,
       borderColor:'gray',
       height:40,
       marginVertical:5,
    borderRadius:5,
    // borderColor:'gray'
    },
    btn:{
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


export default SignupForm;
